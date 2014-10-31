/// <reference path="typings/tsd.d.ts" />
export = module;
var program = require('commander');
program
  .option("-e, --exclude <project;...>", "Project name to exclude, semicolon seperated")
  .parse(process.argv);

program.exclude = ["installation"].concat(program.exclude && program.exclude.split(";") || []);

import links = require("./lib/links");

links.updateLinks(program.exclude, function(err) {
  if (err) {
    console.error(err);
  }
});
