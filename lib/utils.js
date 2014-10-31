var util = require("util");
var async = require("async");
var _ = require("lodash");
var fs = require("fs");
var path = require("path");

function execEndMessage(next, message, error, stdout, stderr) {
    if (stderr)
        console.log('stderr: ' + stderr);
    if (error)
        console.log('error: ' + error);
    else
        console.log(message);
    next();
}
exports.execEndMessage = execEndMessage;

function execResult(next, error, stdout, stderr) {
    if (stdout)
        console.log('stdout: ' + stdout);
    if (stderr)
        console.log('stderr: ' + stderr);
    if (error)
        console.log('error: ' + error);
    next();
}
exports.execResult = execResult;

function execPrint(error, stdout, stderr) {
    if (stdout)
        console.log('stdout: ' + stdout);
    if (stderr)
        console.log('stderr: ' + stderr);
    if (error)
        console.log('error: ' + error);
}
exports.execPrint = execPrint;

function makeMyKoopNameRegExp(names) {
    return _.map(names, function (name) {
        return new RegExp(util.format("(\\W%s$)|(^%s\\W)|(^%s$)", name, name, name), "i");
    });
}
exports.makeMyKoopNameRegExp = makeMyKoopNameRegExp;

function listAndExcludeProject(dir, excludes, callback) {
    var excludesRegExp = exports.makeMyKoopNameRegExp(excludes);
    fs.readdir(dir, function (err, files) {
        if (err) {
            return callback(err);
        }

        async.concat(files, function (file, callback) {
            var pkgPath = path.resolve(file, "package.json");
            try  {
                var pkg = require(pkgPath);
            } catch (e) {
                return callback(null, []);
            }
            var isKept = _.all(excludesRegExp, function (regex) {
                return !regex.test(pkg.name);
            });
            if (isKept) {
                return callback(null, [{
                        pkg: pkg,
                        path: path.resolve(file)
                    }]);
            }
            callback(null, []);
        }, function (err, result) {
            callback(err, result);
        });
    });
}
exports.listAndExcludeProject = listAndExcludeProject;
