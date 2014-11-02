import GitHub = require("github");

class GitHubProxy {
  github: GitHub;
  constructor() {
    this.github = new GitHub({
        version: "3.0.0",
        timeout: 5000
    });
  }

  getReposFromOrg (
    org: string,
    callback: (err, repos?: GitHubResult.Org.Repo[]) => void
  ) {
    this.github.repos.getFromOrg({
      org: org
    }, function(err, repos) {
      if(err) return callback(err);
      callback(null, repos);
    });
  }
}

export = GitHubProxy;
