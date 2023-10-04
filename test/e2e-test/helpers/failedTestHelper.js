const Helper = require('@codeceptjs/helper');
const { event, output } = require('codeceptjs');
const process = require('process');

class FailedTest extends Helper {
  _failed() {
    process.exit(1);
  }
  async _finishTest() {
    console.log('finished all tests wooooo')
  }
  async _beforeStep() {
    const helper = this.helpers['Puppeteer'];
    output.log('Checking flakiness');
    try {
      for (let i = 0; i < 10; i++) {
        await helper.waitForText('Sign out', 5);
        await helper.see('Sorry, there is a problem with this service');
        await helper.refreshPage();
        output.error('Saw flakey problem with service');
        await helper.wait(5);
      }
    } catch (err) {
      // do nothing
    }
  }
}

module.exports = FailedTest;
