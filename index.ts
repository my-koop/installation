/// <reference path="typings/tsd.d.ts" />

var program = require('commander');
var pkginfo = require('pkginfo')(module);

program
  .version(module.exports.version || "unknown")
  .option('-c, --config [file]', 'Choose config file with module list [modules.json]', 'modules.json')
  .parse(process.argv);

var path = require("path");
var configPath = path.resolve(program.config);
var modules = require(configPath);
console.log(modules);
