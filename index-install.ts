/// <reference path="typings/tsd.d.ts" />
export = module;
var program = require('commander');
program
  .option("-n, --noprompt", "Automatically clone all repositories without prompting")
  .option("-l, --links", "Create npm & tsd symbolic links after installation")
  .option("-i, --npmi", "Execute npm install on all repositories")
  .option("-a, --all", "Run with all options [-n,-l,-i,-d]")
  .option("-d, --default", "Checkout default branch if the repository is already cloned")
  .option("-e, --exclude <project;...>", "Project name to exclude, semicolon seperated")
  .parse(process.argv);

program.exclude = ["installation"].concat(program.exclude && program.exclude.split(";") || []);
program.noprompt = program.all || program.noprompt;
program.links = program.all || program.links;
program.npmi = program.all || program.npmi;
program.default = program.all || program.default;

import async = require("async");
import _ = require("lodash");
import github = require("./lib/github");
import fs = require("fs");
import path = require("path");
import git = require("./lib/git");
var tsd = require("tsd");
var prompt = require("prompt");
import links = require("./lib/links");
import utils = require("./lib/utils");
import npmi = require("./lib/npmi");
var execEndMessage = utils.execEndMessage;
var execResult = utils.execResult;
var exec = require("child_process").exec;

var cwd = process.cwd();

class MyKoopRepo {
  constructor(public githubRepo: GitHubResult.Org.Repo, public path){}
}

// Execute install
async.waterfall([
  github.getReposFromOrg.bind(github,"my-koop")
  , filterRepo
  , promptSelectRepo
  , cloneRepos
  , updateLinks
  , npminstall
], function(err) {
  if(err) return console.error(err);
  console.log("Successfully installed MyKoop");
});

function updateLinks (repos: MyKoopRepo[], callback) {
  if(!program.links) return callback(null, repos);

  links.updateLinks(program.exclude, function(err) {
    callback(err, repos);
  });
}

function npminstall(repos: MyKoopRepo[], callback) {
  if(!program.npmi) return callback(null, repos);
  npmi.npminstall(_.map(repos, function(repo) {
    return {
      path: repo.path,
      name: repo.githubRepo.name
    };
  })
  , function(err) {
    callback(null, repos);
  });
}

function filterRepo (repos: GitHubResult.Org.Repo[], callback) {
  var excludesRegExp = utils.makeMyKoopNameRegExp(program.exclude);

  repos = repos.filter(function(repo) {
    return _.all(excludesRegExp, function(reg) {
      return !reg.exec(repo.name);
    })
  });

  callback(null, repos);
}
function promptSelectRepo (repos: GitHubResult.Org.Repo[], callback) {
  // fallthrough
  if(_.isEmpty(repos) || program.noprompt) return callback(null, repos);

  var repoNames = repos.map(function (repo) { return repo.name; });
  prompt.start();
  var schema = {
    properties: {
      option: {
        pattern: /^(a|s)$/i,
        message: "Valid options are [a|s]",
        required: true
      }
    }
  };

  console.log(
    "Repositories list:\n  %s\nOptions:\n  Install all(a)\n  Select install(s)",
    repoNames.join("\n  ")
  );
  prompt.get(schema, function(err, result) {
    if(err) callback(err, null);

    if(result.option == "a") {
      return callback(null, repos);
    }

    // Select which repo to install
    var InstallSchema = {
      properties: {
        install: {
          pattern: /^y[es]*|n[o]?$/i,
          description: "Do you want to install? (y/n)",
          message: "You must answer with yes or no",
          default: "yes",
          required: true
        }
      }
    };

    var resultingRepos = [];
    async.whilst(
      function() { return !_.isEmpty(repos); },
      function(callback) {
        var repo = repos.shift();
        console.log("Repository [%s]", repo.name);
        prompt.get(InstallSchema, function(err, result) {
          // don't break execution for an error at the prompt, assume no
          if(err) return console.error(err);
          if(result.install.charAt(0) === "y") {
            resultingRepos.push(repo);
          }
          callback(null);
        });
      },
      function(err) {
        callback(err, resultingRepos);
      }
    );
  });
}

function cloneRepos (gitRepos: GitHubResult.Org.Repo[], callback) {
  if(_.isEmpty(gitRepos)) callback(new Error("No repositories to clone"));

  // update repoNames
  var maxLength = _.max(gitRepos, function(gitRepo) {
    return gitRepo.name.length;
  }).name.length;

  var myKoopRepo: MyKoopRepo[] = [];
  async.each(gitRepos, function(gitRepo, callback) {
    var repoPath = path.resolve(cwd, gitRepo.name);
    var repoUrl = gitRepo.clone_url;
    fs.stat(repoPath, function(err) {
      if(!err) {
        // folder already exists
        if(program.default) {
          var branch = gitRepo.default_branch;
          // try to checkout default branch
          exec("git fetch", {cwd: repoPath}, function(err) {
            if(!err) {

              exec(
                "git checkout -B " + branch + " origin/" + branch,
                {cwd: repoPath},
                execEndMessage.bind(
                  null,
                  callback,
                  "Branch [" + branch + "] checked out for repository " + gitRepo.name
                )
              );
            }
          });
        } else {
          console.log("Repository %s already exists", repoPath);
        }
      } else {
        git.clone(repoUrl, repoPath, function (err) {
          if(err) {
            return console.warn(err);
          }
          var padding = "";
          for(var i=gitRepo.name.length; i<maxLength; ++i){padding+=" ";}
          console.log("gitRepo: ", gitRepo.name,padding, " Successfully cloned at :", repoPath);
          myKoopRepo.push(new MyKoopRepo(gitRepo, repoPath));
          callback(null, null);
        });
      }
    });
  }, function(err) {
    callback(err, myKoopRepo);
  });
}

