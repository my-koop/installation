/// <reference path="typings/tsd.d.ts" />
export = module;
var program = require('commander');
program
  .option("-n, --noprompt", "Automatically clone all repo from the organization without prompt")
  .option("-l, --links", "Create npm & tsd symbolic links after install")
  .option("-i, --npmi", "Execute npm install on all repo")
  .option("-a, --all", "Run all without prompts")
  .parse(process.argv);

program.noprompt = program.all || program.noprompt;
program.links = program.all || program.links;
program.npmi = program.all || program.npmi;

import async = require("async");
import _ = require("lodash");
import github = require("./lib/github");
var path = require("path");
var git = require("nodegit");
var Repo = git.Repo;
var Remote = git.Remote;
var tsd = require("tsd");
var prompt = require("prompt");
import links = require("./lib/links");
import utils = require("./lib/utils");
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

function cloneRepos (repos: GitHubResult.Org.Repo[], callback) {
  if(_.isEmpty(repos)) callback(new Error("No repositories to clone"));

  // update repoNames
  var maxLength = _.max(repos, function(repo) {
    return repo.name.length;
  }).name.length;

  var myKoopRepo: MyKoopRepo[] = [];
  async.each(repos, function(repo, callback) {
    var repoPath = path.resolve(cwd, repo.name);
    var repoUrl = repo.git_url;
    Repo.clone(repoUrl, repoPath, null, function(err){
      // don't break on error
      if(err) {
        console.warn(err);
        return callback(null, null);
      }
      var padding = "";
      for(var i=repo.name.length; i<maxLength; ++i){padding+=" ";}
      console.log("Repo: ",repo.name,padding," Successfully cloned at :",repoPath);

      myKoopRepo.push(new MyKoopRepo(repo, repoPath));
      callback(null, null);
    });
  }, function(err) {
    callback(err, myKoopRepo);
  });
}

