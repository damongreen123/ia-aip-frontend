const Helper = require('@codeceptjs/helper');
const { event } = require('codeceptjs');
const process = require('process');

class FailedTest extends Helper {
  _failed() {
    process.exit(1);
  }
}

module.exports = FailedTest;
