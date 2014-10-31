var program = require('commander');
var pkginfo = require('pkginfo')(module);
var path = require("path");

program.version(module.exports.version || "unknown").command("install", "Install MyKoop from fresh").command("links", "Update npm link & tsd link for local dev").command("npmi", "Runs npm install on all repositories").parse(process.argv);
