'use strict';
import assert from 'assert';

const Helper = require('@codeceptjs/helper');

class NavigationHelper extends Helper {
  async checkIfFailedNavigation() {
    const helper = this.helpers['WebdriverIO']; // Or change to another Helper
    try {
      await helper.waitForText('There is a problem with the service', 1);
      return false;
    } catch (err) {
      // Do nothing
    }
    // assert.ok(false); // Or do an assert to throw an error if the above did not work
    return true;
  }
  async checkIfLogInIsSuccessful(timeout) {
    const helper = this.helpers['Puppeteer']; // Or change to another Helper
    try {
      await helper.waitForText('Do this next', timeout);
      return true;
    } catch (err) {
      // Do nothing
    }
    try {
      await helper.waitForText('Nothing to do next', timeout);
      return true;
    } catch (err) {
      // Do nothing
    }
    // assert.ok(false); // Or do an assert to throw an error if the above did not work
    return false;
  }
}

module.exports = NavigationHelper;
