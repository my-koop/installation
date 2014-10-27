/// <reference path="typings/tsd.d.ts" />
export = module;
var program = require('commander');
program
  .parse(process.argv);

import links = require("./lib/links");

links.updateLinks(function(err) {
  if (err) {
    console.error(err);
  }
});
