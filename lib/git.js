var git = require("nodegit");
var Clone = git.Clone.clone;

function clone(url, destination, callback) {
    Clone(url, destination, null).then(function (repo) {
        callback(null);
    }, function (err) {
        callback(err);
    });
}
exports.clone = clone;
