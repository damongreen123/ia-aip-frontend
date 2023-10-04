const Helper = require('@codeceptjs/helper');
const { event, output } = require('codeceptjs');
const process = require('process');
const assert = require('assert');

class FailedTest extends Helper {
  _failed() {
    process.exit(1);
  }
  async _beforeStep() {
    const helper = this.helpers['Puppeteer'];
    output.log('Checking flakiness');
    const unwantedStrings = ['idam', 'start-appeal', 'eligibility'];
    const isNotContainingUnwantedString = string => !helper.page.url().includes(string);
    try {
      assert.ok(unwantedStrings.every(isNotContainingUnwantedString));
      for (let i = 0; i < 10; i++) {
        await helper.waitForText('Sign out', 5);
        await helper.see('Sorry, there is a problem with this service');
        await helper.refreshPage();
        output.error('Saw flakey problem with service');
        await helper.wait(5);
      }
    } catch (err) {
      output.log('Found no flakiness');
      output.log(err);
    }
  }
}

module.exports = FailedTest;
