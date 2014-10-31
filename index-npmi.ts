/// <reference path="typings/tsd.d.ts" />
export = module;
var program = require('commander');
program
  .option("-e, --exclude <project;...>", "Project name to exclude, semicolon seperated")
  .parse(process.argv);

program.exclude = ["installation"].concat(program.exclude && program.exclude.split(";") || []);

import npmi = require("./lib/npmi");
import utils = require("./lib/utils");
import _ = require("lodash");

utils.listAndExcludeProject(process.cwd(), program.exclude, function(err, repos) {
  if(err) {
    return console.error(err);
  }
  npmi.npminstall( _.map(repos, function(repo: any) {
    return <any>({
      path: repo.path,
      name: repo.pkg.name
    });
  }), function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("Successfuly npm install repositories");
  })
})
