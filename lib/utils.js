var util = require("util");
var _ = require("lodash");

function execEndMessage(next, message, error, stdout, stderr) {
    if (stderr)
        console.log('stderr: ' + stderr);
    if (error)
        console.log('error: ' + error);
    else
        console.log(message);
    next();
}
exports.execEndMessage = execEndMessage;

function execResult(next, error, stdout, stderr) {
    if (stdout)
        console.log('stdout: ' + stdout);
    if (stderr)
        console.log('stderr: ' + stderr);
    if (error)
        console.log('error: ' + error);
    next();
}
exports.execResult = execResult;

function execPrint(error, stdout, stderr) {
    if (stdout)
        console.log('stdout: ' + stdout);
    if (stderr)
        console.log('stderr: ' + stderr);
    if (error)
        console.log('error: ' + error);
}
exports.execPrint = execPrint;

function makeMyKoopNameRegExp(names) {
    return _.map(names, function (name) {
        return new RegExp(util.format("(\\W%s$)|(^%s\\W)|(^%s$)", name, name, name), "i");
    });
}
exports.makeMyKoopNameRegExp = makeMyKoopNameRegExp;
