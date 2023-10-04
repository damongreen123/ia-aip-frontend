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
    await output.log('Checking flakiness');
    const unwantedStrings = ['idam', 'start-appeal', 'eligibility'];
    const url = await helper.page.url();
    const isNotContainingUnwantedString = string => !url.includes(string);
    try {
      output.log(unwantedStrings.every(isNotContainingUnwantedString));
      assert.ok(unwantedStrings.every(isNotContainingUnwantedString));
      for (let i = 0; i < 10; i++) {
        await output.log('waiting for sign out text');
        await helper.waitForText('Sign out', 5);
        await output.log('Can I see flakey error page?');
        await helper.see('Sorry, there is a problem with this service');
        await output.log('Saw flakey problem with service');
        await helper.page.reload();
        await output.log('Reloaded page');
      }
    } catch (err) {
      await output.log('Found no flakiness');
      await output.log(err);
    }
  }
}

module.exports = FailedTest;
