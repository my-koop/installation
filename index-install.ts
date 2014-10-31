/// <reference path="typings/tsd.d.ts" />
export = module;
var program = require('commander');
program
  .option("-n, --noprompt", "Automatically clone all repo from the organization without prompt")
  .option("-l, --links", "Create npm & tsd symbolic links after install")
  .option("-i, --npmi", "Execute npm install on all repo")
  .option("-a, --all", "Run all without prompts")
  .option("-e, --exclude <project;...>", "Project name to exclude, semicolon seperated")
  .parse(process.argv);

program.exclude = ["installation"].concat(program.exclude && program.exclude.split(";") || []);
program.noprompt = program.all || program.noprompt;
program.links = program.all || program.links;
program.npmi = program.all || program.npmi;

import async = require("async");
import _ = require("lodash");
import github = require("./lib/github");
var path = require("path");
var git = require("nodegit");
var Clone = git.Clone.clone;
var Remote = git.Remote;
var tsd = require("tsd");
var prompt = require("prompt");
import links = require("./lib/links");
import utils = require("./lib/utils");
import util = require("util");
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

  links.updateLinks( function(err) {
    callback(err, repos);
  });
}

function npminstall(repos: MyKoopRepo[], callback) {
  if(!program.npmi) return callback(null, repos);

  async.each(repos, function (repo, callbackNpmi) {
    exec(
      'npm install',
      {cwd: repo.path},
      execEndMessage.bind(null, callbackNpmi, "Successfully npm install " + repo.githubRepo.name)
    );
  }, function (err) {
    callback(err, repos);
  });
}

function filterRepo (repos: GitHubResult.Org.Repo[], callback) {
  var excludesRegExp = _.map(program.exclude, function (exclude) {
    return new RegExp(util.format("(\\W%s$)|(^%s\\W)|(^%s$)",
        exclude,exclude,exclude), "i");
  });

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
          description: "Do you want to install?(y/n)",
          message: "Must respond yes or no",
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
    Clone(repoUrl, repoPath, null).then(function (repo) {
      var padding = "";
      for(var i=gitRepo.name.length; i<maxLength; ++i){padding+=" ";}
      console.log("gitRepo: ", gitRepo.name,padding, " Successfully cloned at :", repoPath);

      myKoopRepo.push(new MyKoopRepo(gitRepo, repoPath));
      callback(null, null);
    }, function (err) {
      console.warn(err);
      // keep going on error, simply warn
      callback(null, null);
    });
  }, function(err) {
    callback(err, myKoopRepo);
  });
}

