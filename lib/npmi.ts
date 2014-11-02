var exec = require("child_process").exec;
import utils = require("./utils");
import async = require("async");

export interface Repo {
  path: string;
  name: string;
}
export function npminstall(repos: Repo[], callback) {
  async.each(repos, function (repo, callbackNpmi) {
    exec(
      'npm install',
      {cwd: repo.path},
      utils.execEndMessage.bind(null, callbackNpmi, "Successfully \"npm install\"'d " + repo.name)
    );
  }, function (err) {
    callback(err, repos);
  });
}
