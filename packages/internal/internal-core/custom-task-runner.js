const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { default: defaultTaskRunner } = require('nx/tasks-runners/default');

async function loadVersionEnv() {
  if (process.env.VERSION) {
    return;
  }

  const scriptPath = path.join(__dirname, './scripts/get-version.sh');
  try {
    const { stdout: version } = await exec(`bash ${scriptPath}`);
    process.env.VERSION = version.trim();
  } catch {}
}

module.exports = async (...args) => {
  await loadVersionEnv();
  return defaultTaskRunner(...args);
};
