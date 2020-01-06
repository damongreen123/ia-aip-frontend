import { paths } from '../../../../app/paths';
const config = require('config');

const testUrl = config.get('testUrl');

module.exports = {
  homeOfficeReferenceNumber(I) {
    Given('I am on the home office reference page', async () => {
      I.amOnPage(testUrl + paths.homeOffice.details);
    });

    When(/^I enter a home office reference "([^"]*)"/, async (refNumber) => {
      I.fillField('#homeOfficeRefNumber', refNumber);
    });

    When(/^I click on Home office details$/, async () => {
      await I.click('a[href*="/home-office"]');
    });

    Then(/^I should be taken to the home office ref number page$/, async () => {
      await I.seeInCurrentUrl('/home-office/details');
    });

    When(/^I enter "([^"]*)" as the Office ref number and click Save and continue/, async (refNumber) => {
      I.fillField('#homeOfficeRefNumber', refNumber);
      I.click('Save and continue');
    });
  }
};