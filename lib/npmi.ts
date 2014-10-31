var exec = require("child_process").exec;
import utils = require("./utils");

export interface Repo {
  path: string;
  name: string;
}
export function npminstall(repos: Repo[], callback) {
  async.each(repos, function (repo, callbackNpmi) {
    exec(
      'npm install',
      {cwd: repo.path},
      utils.execEndMessage.bind(null, callbackNpmi, "Successfully npm install " + repo.name)
    );
  }, function (err) {
    callback(err, repos);
  });
}
