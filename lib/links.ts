
var fs = require("fs");
var path = require("path");
import async = require("async");
import _ = require("lodash");
var exec = require("child_process").exec;
import utils = require("./utils");
var execEndMessage = utils.execEndMessage;
var execResult = utils.execResult;

var cwd = process.cwd();

class Repo {
  public doNpmLink: boolean;
  public doTsdLink: boolean;
  public name: string;
  public dependencies: string[];

  constructor(public pkg, public tsd, public dir) {
    this.name = pkg.name;
    this.doNpmLink = false;
  }
}

export function updateLinks(excludeList, doneCallback) {
  async.waterfall([
    fs.readdir.bind(null, cwd),
    filterMykoopRepo.bind(null, excludeList),
    checkNeedLink,
    npmLinks,
    tsdLinks,
    completeLinks
  ], function (err) {
    if(!err) console.log("Successfully linked modules");
    doneCallback(err);
  });
}


function filterMykoopRepo(excludeList, allRepos, callback) {
  var excludesRegExp = utils.makeMyKoopNameRegExp(excludeList);

  async.concat(allRepos, function (file, callbackPkg) {
    var pkgPath = path.resolve(cwd, file, "package.json");
    var tsdPath = path.resolve(cwd, file, "tsd.json");
    fs.exists(pkgPath, function(exists) {
      if(exists) {
        var pkg = null;
        var tsd = null;
        try {
          pkg = require(pkgPath);
          tsd = require(tsdPath);
        } catch(e) {
          // stop if no package json
          if(!pkg) {
            callbackPkg(null, []);
          }
          // continue if tsd failed
          tsd = null;
        }
        if(/mykoop/i.test(pkg.name) && _.all(excludesRegExp, function(regex) {
          return !regex.test(pkg.name);
        })
        ) {
          var dir = path.dirname(pkgPath);
          callbackPkg(null, <any>new Repo(pkg, tsd, dir));
          return;
        }
      }
      callbackPkg(null, []);
    });
  }, function (err, mykoopRepos) {
    callback(null, mykoopRepos);
  });
}

function checkNeedLink(repos: Repo[], callback) {
  var repoMap = _.reduce(repos, function(repoMap, repo) {
    repoMap[repo.name] = repo;
    return repoMap;
  }, {});

  async.each(repos, function(repo, callback) {
    repo.doTsdLink = repo.tsd && (repo.tsd.owned || repo.tsd.dependencies);
    async.concat(Object.keys(repo.pkg.dependencies || {}),
      function(dependency, callbackDep) {
        if(repoMap[dependency]) {
          repoMap[dependency].doNpmLink = true;
          callbackDep(null, [dependency]);
          return;
        }
        callbackDep(null, []);
      }
      , function(err, allDependencies: string[]) {
        repo.dependencies = allDependencies;
        callback(null, null);
      }
    )
  }, function(err) {
    callback(null, repos);
  });
}

function npmLinks(repos: Repo[], callback) {
  async.each(repos, function(repo, callback) {
    if(repo.doNpmLink) {
      exec("npm link", {cwd:repo.dir},
        execEndMessage.bind(null,callback,
          "Successfully linked " + repo.name
        )
      );
    } else {
      callback(null, null);
    }
  }, function(err) {
    callback(null, repos);
  });
}

function tsdLinks(repos: Repo[], callback) {
  async.each(repos, function(repo, callback) {
    if(repo.doTsdLink) {
      exec("tsd-link group -g mykoop", {cwd:repo.dir},
        execResult.bind(null,callback)
      );
    } else {
      callback(null, null);
    }
  }, function(err) {
    callback(null, repos);
  });
}

function completeLinks(repos: Repo[], callback) {
  async.each(repos, function(repo, callbackRepo) {
    async.each(repo.dependencies, function(dependency, callbackDep) {
      exec(
        "npm link " + dependency,
        {cwd:repo.dir},
        execEndMessage.bind(null,
          callbackDep,
          "Successfully linked " + repo.name + " with " + dependency
        )
      );
    }, function() {
      callbackRepo(null, null);
    });
  }, function () {
    exec("tsd-link group update -g mykoop", execResult.bind(null,callback));
  });
}
