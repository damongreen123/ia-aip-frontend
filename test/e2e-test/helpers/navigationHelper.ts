'use strict';
const assert = require('assert');
const Helper = require('@codeceptjs/helper');
const output = require('codeceptjs').output;

class NavigationHelper extends Helper {
  async _beforeStep() {
    const helper = this.helpers['Puppeteer']; // Or change to another Helper
    try {
      for (let i = 0; i < 10; i++) {
        await helper.see('Sign out');
        await helper.see('Sorry, there is a problem with this service');
        await helper.refreshPage();
        output.error('Saw flakey problem with service');
        await helper.wait(5);
      }
    } catch (err) {
      // do nothing
    }
  }
  async checkIfLogInIsSuccessful(timeout) {
    const helper = this.helpers['Puppeteer']; // Or change to another Helper
    try {
      await helper.wait(timeout);
      assert.ok(helper.page.url().includes('appeal-overview'));
      await helper.see('Sign out');
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = NavigationHelper;
