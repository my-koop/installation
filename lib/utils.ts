import util = require("util");
import _ = require("lodash");

export function execEndMessage(next, message, error, stdout, stderr) {
  if (stderr) console.log('stderr: ' + stderr);
  if (error) console.log('error: ' + error);
  else console.log(message);
  next();
}

export function execResult(next, error, stdout, stderr) {
  if (stdout)console.log('stdout: ' + stdout);
  if (stderr)console.log('stderr: ' + stderr);
  if (error) console.log('error: ' + error);
  next();
}

export function execPrint(error, stdout, stderr) {
  if (stdout)console.log('stdout: ' + stdout);
  if (stderr)console.log('stderr: ' + stderr);
  if (error) console.log('error: ' + error);
}

export function makeMyKoopNameRegExp(names) {
  return _.map(names, function (name) {
    return new RegExp(util.format("(\\W%s$)|(^%s\\W)|(^%s$)",
        name,name,name), "i");
  });
}
