var program = require('commander');
program.parse(process.argv);

var links = require("./lib/links");

links.updateLinks(function (err) {
    if (err) {
        console.error(err);
    }
});
module.exports = module;
