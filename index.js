var program = require('commander');
var pkginfo = require('pkginfo')(module);
var path = require("path");

program.version(module.exports.version || "unknown");

var installCommand = program.command("install", "Install MyKoop from fresh");

program.parse(process.argv);
