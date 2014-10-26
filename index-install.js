var program = require('commander');
program.option("-n, --noprompt", "Automatically install all repo from the organization without prompt").parse(process.argv);

var async = require("async");
var _ = require("lodash");
var GitHub = require("./lib/github");
var path = require("path");
var git = require("nodegit");
var Repo = require("nodegit").Repo;
var tsd = require("tsd");
var prompt = require("prompt");

var cwd = process.cwd();

var github = new GitHub();

// Execute install
async.waterfall([
    github.getReposFromOrg.bind(github, "my-koop"),
    promptSelectRepo
], cloneRepos);

function promptSelectRepo(repos, callback) {
    // fallthrough
    if (_.isEmpty(repos) || program.noprompt)
        return callback(null, repos);

    var repoNames = repos.map(function (repo) {
        return repo.name;
    });
    prompt.start();
    var schema = {
        properties: {
            option: {
                pattern: /^(a|s)$/i,
                message: "Valid options are [a|s]",
                required: true
            }
        }
    };

    console.log("Repositories list:\n  %s\nOptions:\n  Install all(a)\n  Select install(s)", repoNames.join("\n  "));
    prompt.get(schema, function (err, result) {
        if (err)
            callback(err, null);

        if (result.option == "a") {
            return callback(null, repos);
        }

        // Select which repo to install
        var InstallSchema = {
            properties: {
                install: {
                    pattern: /^y[es]*|n[o]?$/i,
                    description: "Do you want to install?(y/n)",
                    message: "Must respond yes or no",
                    default: "yes",
                    required: true
                }
            }
        };

        var resultingRepos = [];
        async.whilst(function () {
            return !_.isEmpty(repos);
        }, function (callback) {
            var repo = repos.shift();
            console.log("Repository [%s]", repo.name);
            prompt.get(InstallSchema, function (err, result) {
                // don't break execution for an error at the prompt, assume no
                if (err)
                    return console.error(err);
                if (result.install.charAt(0) === "y") {
                    resultingRepos.push(repo);
                }
                callback(null);
            });
        }, function (err) {
            callback(err, resultingRepos);
        });
    });
}

function cloneRepos(err, repos) {
    if (err)
        return console.error(err);
    if (_.isEmpty(repos))
        return console.log("No repositories to clone");

    // update repoNames
    var maxLength = _.max(repos, function (repo) {
        return repo.name.length;
    }).name.length;

    _.forEach(repos, function (repo) {
        var repoPath = path.resolve(cwd, repo.name);
        Repo.clone(repo.git_url, repoPath, null, function (err) {
            if (err)
                return console.error(err);
            var padding = "";
            for (var i = repo.name.length; i < maxLength; ++i) {
                padding += " ";
            }
            console.log("Repo: ", repo.name, padding, " Successfully cloned at :", repoPath);
        });
    });
}
module.exports = module;
