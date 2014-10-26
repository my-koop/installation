var GitHub = require("github");

var GitHubProxy = (function () {
    function GitHubProxy() {
        this.github = new GitHub({
            version: "3.0.0",
            timeout: 5000
        });
    }
    GitHubProxy.prototype.getReposFromOrg = function (org, callback) {
        this.github.repos.getFromOrg({
            org: org
        }, function (err, repos) {
            if (err)
                return callback(err);
            callback(null, repos);
        });
    };
    return GitHubProxy;
})();

module.exports = GitHubProxy;
