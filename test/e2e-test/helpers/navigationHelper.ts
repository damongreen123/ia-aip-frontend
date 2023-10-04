'use strict';
const assert = require('assert');
const Helper = require('@codeceptjs/helper');
const output = require('codeceptjs').output;

class NavigationHelper extends Helper {
  async _beforeStep() {
    const helper = this.helpers['Puppeteer']; // Or change to another Helper
    try {
      for (let i = 0; i < 5; i++) {
        await helper.see('There is a problem with the service');
        await helper.refreshPage();
        output.error('Saw flakey problem with service');
        await helper.wait(5);
      }
    } catch (err) {
      // do nothing
    }
  }
  async checkIfFailedNavigation() {
    const helper = this.helpers['Puppeteer']; // Or change to another Helper
    try {
      await helper.see('There is a problem with the service');
      return true;
    } catch (err) {
      // Do nothing
    }
    return false;
  }
  async checkIfLogInIsSuccessful(timeout) {
    const helper = this.helpers['Puppeteer']; // Or change to another Helper
    try {
      await helper.wait(timeout);
      assert.ok(helper.page.url().includes('appeal-overview'));
      await helper.see('Your appeal details');
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = NavigationHelper;
