
var git = require("nodegit");
var Clone = git.Clone.clone;

export function clone(
  url: string,
  destination: string,
  callback: (err) => void
) {
  Clone(url, destination, null).then(function (repo) {
    callback(null);
  }, function(err) {
    callback(err);
  });
}
