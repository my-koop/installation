import util = require("util");
import async = require("async");
import _ = require("lodash");
import fs = require("fs");
import path = require("path");

export function execEndMessage(next, message, error, stdout, stderr) {
  if (stderr) console.log('stderr: ' + stderr);
  if (error) console.log('error: ' + error);
  else console.log(message);
  next();
}

export function execResult(next, error, stdout, stderr) {
  if (stdout)console.log('stdout: ' + stdout);
  if (stderr)console.log('stderr: ' + stderr);
  if (error) console.log('error: ' + error);
  next();
}

export function execPrint(error, stdout, stderr) {
  if (stdout)console.log('stdout: ' + stdout);
  if (stderr)console.log('stderr: ' + stderr);
  if (error) console.log('error: ' + error);
}

export function makeMyKoopNameRegExp(names) {
  return _.map(names, function (name) {
    return new RegExp(util.format("(\\W%s$)|(^%s\\W)|(^%s$)",
        name,name,name), "i");
  });
}

export function listAndExcludeProject(dir, excludes, callback: (err, result?: {pkg:any; path:string}[] ) => void) {
  var excludesRegExp = makeMyKoopNameRegExp(excludes);
  fs.readdir(dir,function(err, files) {
    if(err) {
      return callback(err);
    }

    async.concat(files, function(file, callback) {
      var pkgPath = path.resolve(file, "package.json");
      try {
        var pkg = require(pkgPath);
      } catch(e) {
        return callback(null, []);
      }
      var isKept = _.all(excludesRegExp, function(regex) {
        return !regex.test(pkg.name);
      })
      if(isKept) {
        return callback(null, [{
          pkg: pkg,
          path: path.resolve(file)
        }]);
      }
      callback(null, []);
    }, function(err, result: any) {
      callback(err, result);
    })
  })
}
