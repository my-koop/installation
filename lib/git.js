var exec = require("child_process").exec;
var path = require("path");

function clone(url, destination, callback) {
    exec("git clone " + url, { cwd: path.dirname(destination) }, callback);
}
exports.clone = clone;
