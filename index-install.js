var program = require('commander');
program.option("-n, --noprompt", "Automatically clone all repositories without prompting").option("-l, --links", "Create npm & tsd symbolic links after installation").option("-i, --npmi", "Execute npm install on all repositories").option("-a, --all", "Run with all options [-n,-l,-i]").option("-e, --exclude <project;...>", "Project name to exclude, semicolon seperated").parse(process.argv);

program.exclude = ["installation"].concat(program.exclude && program.exclude.split(";") || []);
program.noprompt = program.all || program.noprompt;
program.links = program.all || program.links;
program.npmi = program.all || program.npmi;

var async = require("async");
var _ = require("lodash");
var github = require("./lib/github");
var path = require("path");
var git = require("nodegit");
var Clone = git.Clone.clone;
var Remote = git.Remote;
var tsd = require("tsd");
var prompt = require("prompt");
var links = require("./lib/links");
var utils = require("./lib/utils");
var npmi = require("./lib/npmi");
var execEndMessage = utils.execEndMessage;
var execResult = utils.execResult;
var exec = require("child_process").exec;

var cwd = process.cwd();

var MyKoopRepo = (function () {
    function MyKoopRepo(githubRepo, path) {
        this.githubRepo = githubRepo;
        this.path = path;
    }
    return MyKoopRepo;
})();

// Execute install
async.waterfall([
    github.getReposFromOrg.bind(github, "my-koop"),
    filterRepo,
    promptSelectRepo,
    cloneRepos,
    updateLinks,
    npminstall
], function (err) {
    if (err)
        return console.error(err);
    console.log("Successfully installed MyKoop");
});

function updateLinks(repos, callback) {
    if (!program.links)
        return callback(null, repos);

    links.updateLinks(program.exclude, function (err) {
        callback(err, repos);
    });
}

function npminstall(repos, callback) {
    if (!program.npmi)
        return callback(null, repos);
    npmi.npminstall(_.map(repos, function (repo) {
        return {
            path: repo.path,
            name: repo.githubRepo.name
        };
    }), function (err) {
        callback(null, repos);
    });
}

function filterRepo(repos, callback) {
    var excludesRegExp = utils.makeMyKoopNameRegExp(program.exclude);

    repos = repos.filter(function (repo) {
        return _.all(excludesRegExp, function (reg) {
            return !reg.exec(repo.name);
        });
    });

    callback(null, repos);
}
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
                    description: "Do you want to install? (y/n)",
                    message: "You must answer with yes or no",
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

function cloneRepos(gitRepos, callback) {
    if (_.isEmpty(gitRepos))
        callback(new Error("No repositories to clone"));

    // update repoNames
    var maxLength = _.max(gitRepos, function (gitRepo) {
        return gitRepo.name.length;
    }).name.length;

    var myKoopRepo = [];
    async.each(gitRepos, function (gitRepo, callback) {
        var repoPath = path.resolve(cwd, gitRepo.name);
        var repoUrl = gitRepo.clone_url;
        Clone(repoUrl, repoPath, null).then(function (repo) {
            var padding = "";
            for (var i = gitRepo.name.length; i < maxLength; ++i) {
                padding += " ";
            }
            console.log("gitRepo: ", gitRepo.name, padding, " Successfully cloned at :", repoPath);

            myKoopRepo.push(new MyKoopRepo(gitRepo, repoPath));
            callback(null, null);
        }, function (err) {
            console.warn(err);

            // keep going on error, simply warn
            callback(null, null);
        });
    }, function (err) {
        callback(err, myKoopRepo);
    });
}
module.exports = module;
