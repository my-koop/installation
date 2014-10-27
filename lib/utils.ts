
export function execEndMessage(next, message, error, stdout, stderr) {
  if (stderr) console.log('stderr: ' + stderr);
  if (error) console.log('error: ' + error);
  else console.log(message);
  next(error);
}

export function execResult(next, error, stdout, stderr) {
  if (stdout)console.log('stdout: ' + stdout);
  if (stderr)console.log('stderr: ' + stderr);
  if (error) console.log('error: ' + error);
  next(error);
}

export function execPrint(error, stdout, stderr) {
  if (stdout)console.log('stdout: ' + stdout);
  if (stderr)console.log('stderr: ' + stderr);
  if (error) console.log('error: ' + error);
}
