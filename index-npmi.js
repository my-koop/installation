var program = require('commander');
program.option("-e, --exclude <project;...>", "Project name to exclude, semicolon seperated").parse(process.argv);

program.exclude = ["installation"].concat(program.exclude && program.exclude.split(";") || []);

var npmi = require("./lib/npmi");
var utils = require("./lib/utils");
var _ = require("lodash");

utils.listAndExcludeProject(process.cwd(), program.exclude, function (err, repos) {
    if (err) {
        return console.error(err);
    }
    npmi.npminstall(_.map(repos, function (repo) {
        return ({
            path: repo.path,
            name: repo.pkg.name
        });
    }), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Successfuly npm install repositories");
    });
});
module.exports = module;
