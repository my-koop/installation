var program = require('commander');
program.option("-e, --exclude <project;...>", "Project name to exclude, semicolon seperated").parse(process.argv);

program.exclude = ["installation"].concat(program.exclude && program.exclude.split(";") || []);

var links = require("./lib/links");

links.updateLinks(program.exclude, function (err) {
    if (err) {
        console.error(err);
    }
});
module.exports = module;
