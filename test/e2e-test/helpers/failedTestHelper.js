const Helper = require('@codeceptjs/helper');
const { event, output } = require('codeceptjs');
const process = require('process');
const assert = require('assert');

class FailedTest extends Helper {
  _failed() {
    process.exit(1);
  }
  async _afterStep(step) {
    const helper = this.helpers['Puppeteer'];
    await output.log('Checking flakiness');
    const unwantedStrings = ['idam', 'start-appeal', 'eligibility'];
    const url = await helper.page.url();
    const isNotContainingUnwantedString = string => !url.includes(string);
    let retry = false;
    try {
      output.log(unwantedStrings.every(isNotContainingUnwantedString));
      assert.ok(unwantedStrings.every(isNotContainingUnwantedString));
      for (let i = 0; i < 10; i++) {
        await helper.waitForText('Sign out', 5);
        const content = await helper.page.content()
        assert.ok(content.includes('Sorry, there is a problem with this service'))
        await helper.refreshPage();
        retry = true;
      }
    } catch (err) {
      await output.log('Found no flakiness');
      if (retry === true) {
        step.run()
      }
    }
  }
}

module.exports = FailedTest;
