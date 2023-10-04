const Helper = require('@codeceptjs/helper');
const { event, output } = require('codeceptjs');
const process = require('process');
const assert = require('assert');

class FailedTest extends Helper {
//  _failed() {
//    process.exit(1);
//  }
  async _afterStep(step) {
    const helper = this.helpers['Puppeteer'];
    await output.log('Checking flakiness');
    const unwantedStrings = ['idam', 'start-appeal', 'eligibility'];
    const url = await helper.page.url();
    const isNotContainingUnwantedString = string => !url.includes(string);
    let retry = false;
    try {
      assert.ok(unwantedStrings.every(isNotContainingUnwantedString));
      for (let i = 0; i < 10; i++) {
        await output.log('waiting for sign out text');
        await helper.waitForText('Sign out', 5);
        await output.log('Can I see flakey error page?');
        const content = await helper.page.content()
        assert.ok(content.includes('Sorry, there is a problem with this service'))
        await output.log('Saw flakey problem with service');
        await helper.refreshPage();
        await output.log('Reloaded page');
        retry = true;
      }
    } catch (err) {
      await output.log(err);
      await output.log('Found no flakiness');
      if (retry === true) {
        step.run()
      }
    }
  }
}

module.exports = FailedTest;
