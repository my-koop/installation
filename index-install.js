var program = require('commander');
program.parse(process.argv);

var _ = require("lodash");
var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});

github.repos.getFromOrg({
    org: "my-koop"
}, function (err, repos) {
    if (err) {
        console.error(err);
        return;
    }
    repos = _.filter(repos, function (repo) {
        // filter out this project
        return repo.name !== "installation";
    });
    var repoNames = repos.map(function (repo) {
        return repo.name;
    });
});
module.exports = module;
