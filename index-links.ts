/// <reference path="typings/tsd.d.ts" />
export = module;
var program = require('commander');
program
  .option("-n, --noprompt", "Automatically install all repo from the organization without prompt")
  .parse(process.argv);

var fs = require("fs");
var path = require("path");
import async = require("async");
var exec = require('child_process').exec;

var cwd = process.cwd();

class Repo {
  constructor(public pkg, public dir){}
}

function execResult(next, error, stdout, stderr) {
  if (stdout)console.log('stdout: ' + stdout);
  if (stderr)console.log('stderr: ' + stderr);
  if (error) console.log('error: ' + error);
  next();
}

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
            exec('npm link', {cwd:dir}, execResult.bind(null,function() {
              exec('tsd-link group -g mykoop', {cwd:dir}, execResult.bind(null,callbackPkg));
            }));
            return;
          }
          callbackPkg(null, null);
        }
      });
    }, function (err) {
      if (!err) callback(null, repos);
    })
  },
  function (repos: Repo[], callback) {
    async.each(repos, function(repo, callbackRepo) {
      async.each(Object.keys(repo.pkg), function(dependency, callbackDep) {
        if (/mykoop/i.test(dependency)) {
          exec(
            'npm link ' + dependency,
            {cwd:repo.dir},
            execResult.bind(null,callbackDep)
          );
          return;
        }
        callbackDep(null, null);
      }, function() {
        callbackRepo(null, null);
      });
    }, function () {
      exec('tsd-link group update', execResult.bind(null,callback));
    });
  }
], function (err) {
  if(err) return console.error(err);
  console.log("Successfully linked modules");
});
