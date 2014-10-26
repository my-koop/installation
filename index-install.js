var program = require('commander');
var path = require("path");
require("json5/lib/require");

program.option('-c, --config [file]', 'Choose config file with module list for installation [modules.json5]', __dirname + '/modules.json5').parse(process.argv);

var configPath = path.resolve(program.config);
var modules = require(configPath);
console.log(modules);
module.exports = module;
