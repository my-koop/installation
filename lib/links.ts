
var fs = require("fs");
var path = require("path");
import async = require("async");
var exec = require("child_process").exec;
import utils = require("./utils");
var execEndMessage = utils.execEndMessage;
var execResult = utils.execResult;

var cwd = process.cwd();

class Repo {
  constructor(public pkg, public dir){}
}



export function updateLinks(doneCallback) {
  async.waterfall([
    fs.readdir.bind(null, cwd),
    function (files, callback) {
      var repos = [];
      async.each(files, function (file, callbackPkg) {
        var pkgPath = path.resolve(cwd, file, "package.json");
        fs.exists(pkgPath, function(exists) {
          if(exists) {
            try {
              var pkg = require(pkgPath);
            } catch(e) {
              callbackPkg(e, null);
            }
            if(/mykoop/i.test(pkg.name)) {
              var dir = path.dirname(pkgPath);
              repos.push(new Repo(pkg, dir));
              exec("npm link", {cwd:dir}, execEndMessage.bind(null,function() {
                exec(
                  "tsd-link group -g mykoop",
                  {cwd:dir},
                  execResult.bind(null, callbackPkg, "")
                );
              }, "Successfully linked " + pkg.name));
              return;
            }
            callbackPkg(null, null);
          }
        });
      }, function (err) {
        callback(err, repos);
      })
    },
    function (repos: Repo[], callback) {
      async.each(repos, function(repo, callbackRepo) {
        async.each(Object.keys(repo.pkg), function(dependency, callbackDep) {
          if (/mykoop/i.test(dependency)) {
            exec(
              "npm link " + dependency,
              {cwd:repo.dir},
              execEndMessage.bind(null,
                callbackDep,
                "Successfully linked " + repo.pkg.name + " with " + dependency
              )
            );
            return;
          }
          callbackDep(null, null);
        }, function() {
          callbackRepo(null, null);
        });
      }, function () {
        exec("tsd-link group update -g mykoop", execResult.bind(null,callback));
      });
    }
  ], function (err) {
    if(!err) console.log("Successfully linked modules");
    doneCallback(err);
  });
}
