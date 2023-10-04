'use strict';
import assert from 'assert';

const Helper = require('@codeceptjs/helper');

class NavigationHelper extends Helper {
  async checkIfFailedNavigation() {
    const helper = this.helpers['WebdriverIO']; // Or change to another Helper
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
      await helper.dontSee('There is a problem with the service');
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = NavigationHelper;
