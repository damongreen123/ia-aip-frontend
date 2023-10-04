'use strict';
const assert = require('assert');
const Helper = require('@codeceptjs/helper');
const output = require('codeceptjs').output;

class NavigationHelper extends Helper {
  async _beforeStep() {
    const helper = this.helpers['Puppeteer']; // Or change to another Helper
    try {
      for (let i = 0; i < 5; i++) {
        await helper.see('Sorry, there is a problem with this service');
        await helper.refreshPage();
        output.error('Saw flakey problem with service');
        await helper.wait(5);
      }
    } catch (err) {
      // do nothing
    }
  }
  async checkIfSuccessfulLoad() {
    const helper = this.helpers['Puppeteer']; // Or change to another Helper
    try {
      await helper.see('Sorry, there is a problem with this service');
      return false;
    } catch (err) {
      // Do nothing
    }
    return true;
  }
  async checkIfLogInIsSuccessful(timeout) {
    const helper = this.helpers['Puppeteer']; // Or change to another Helper
    try {
      await helper.wait(timeout);
      assert.ok(helper.page.url().includes('appeal-overview'));
      for (let i = 0; i < 3; i++) {
        let success = await this.checkIfSuccessfulLoad();
        if (success === true) {
          return true;
        } else {
          await helper.refreshPage();
          await helper.wait(2);
        }
      }
      return false;
    } catch (err) {
      return false;
    }
  }
}

module.exports = NavigationHelper;
