var exec = require("child_process").exec;
var utils = require("./utils");
var async = require("async");

function npminstall(repos, callback) {
    async.each(repos, function (repo, callbackNpmi) {
        exec('npm install', { cwd: repo.path }, utils.execEndMessage.bind(null, callbackNpmi, "Successfully \"npm install\"'d " + repo.name));
    }, function (err) {
        callback(err, repos);
    });
}
exports.npminstall = npminstall;
