
var exec = require("child_process").exec;
import path = require("path");

export function clone(
  url: string,
  destination: string,
  callback: (err) => void
) {
  exec("git clone " + url, {cwd:path.dirname(destination)}, callback);
}
