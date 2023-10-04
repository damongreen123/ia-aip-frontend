'use strict';
const assert = require('assert');
const Helper = require('@codeceptjs/helper');
const output = require('codeceptjs').output;

class NavigationHelper extends Helper {
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
