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

var cwd = process.cwd();

var github = new GitHub({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});

github.repos.getFromOrg({
  org: "my-koop"
}, function(err, repos) {
  if(err) {
    console.error(err);
    return;
  }

  repos = _.filter(repos, function(repo: GitHubResult.Org.Repo) {
    // filter out this project
    return repo.name !== "installation";
  });
  var repoNames = repos.map(function (repo) { return repo.name; });
  var maxLength = _.max(repoNames, function(name) {
    return name.length;
  }).length;

  if(program.noprompt) {
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
});



