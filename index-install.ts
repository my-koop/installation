/// <reference path="typings/tsd.d.ts" />
export = module;
var program = require('commander');
var path = require("path");

program
  .option('-c, --config [file]', 'Choose config file with module list for installation [modules.json]', __dirname + '/modules.json')
  .parse(process.argv);

var configPath = path.resolve(program.config);
var modules = require(configPath);
console.log(modules);
