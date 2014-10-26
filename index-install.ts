/// <reference path="typings/tsd.d.ts" />
export = module;
var program = require('commander');
program
  .option("-n, --noprompt", "Automatically install all repo from the organization without prompt")
  .parse(process.argv);

import async = require("async");
import _ = require("lodash");
import GitHub = require("github");
var path = require("path");
var git = require("nodegit");
var Repo = require("nodegit").Repo;
var tsd = require("tsd");
var prompt = require("prompt");

var cwd = process.cwd();

var github = new GitHub({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});

async.waterfall([
  getRepos.bind(null,"my-koop")
  , promptSelectRepo
], cloneRepos);

function getRepos (org, callback) {
  github.repos.getFromOrg({
    org: org
  }, function(err, repos) {
    if(err) return callback(err);

    repos = _.filter(repos, function(repo: GitHubResult.Org.Repo) {
      // filter out this project
      return repo.name !== "installation";
    });

    callback(null, repos);
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

function cloneRepos (err, repos: GitHubResult.Org.Repo[]) {
  if(err) return console.error(err);
  if(_.isEmpty(repos)) return console.log("No repositories to clone");

  // update repoNames
  var maxLength = _.max(repos, function(repo) {
    return repo.name.length;
  }).name.length;

  _.forEach(repos, function(repo) {
    var repoPath = path.resolve(cwd, repo.name);
    Repo.clone(repo.git_url, repoPath, null, function(err){
      if(err) return console.error(err);
      var padding = "";
      for(var i=repo.name.length; i<maxLength; ++i){padding+=" ";}
      console.log("Repo: ",repo.name,padding," Successfully cloned at :",repoPath);
    });
  });
}



