import { paths } from '../../../../app/paths';

const config = require('config');

const testUrl = config.get('testUrl');

var NotifyClient = require('notifications-node-client').NotifyClient
const govNotifyApiKey = config.get('govNotify.accessKey');
var notifyClient = new NotifyClient(govNotifyApiKey)


module.exports = {
  startRepresentingYourself(I) {
    When(/^I visit the start-representing-yourself page$/, async () => {
      await I.amOnPage(testUrl + '/start-representing-yourself');
      await I.see('You no longer have a legal representative for this appeal. To start representing yourself, you must enter the online case reference number and security code from the email, text message or letter we sent you.');
    });

    When(/^I enter the case reference number `?([^\s`]+)`?$/, async (caseReferenceNumber) => {
      await I.waitForElement('#caseReferenceNumber', 60);
      await I.seeInCurrentUrl('start-representing-yourself/enter-case-number');
      await I.fillField('#caseReferenceNumber', caseReferenceNumber);
      await I.click('Continue');
    });

    When(/^I enter the access code `?([^\s`]+)`?$/, async (accessCode) => {
      await I.waitForElement('#accessCode', 60);
      await I.seeInCurrentUrl('start-representing-yourself/enter-security-code');
      await I.fillField('#accessCode', accessCode);
      await I.click('Continue');
    });

    Then(/^I complete the case details page$/, async () => {
      await I.see('These are your case details. If these are not the correct details, you should contact the Tribunal.');
      await I.seeInCurrentUrl('start-representing-yourself/confirm-case-details');
      await I.click('Continue');
    });

    Then(/^I see the confirm case details page/, async () => {
      await I.seeInCurrentUrl('start-representing-yourself/confirm-case-details');
      await I.see('These are your case details. If these are not the correct details, you should contact the Tribunal.');
      await I.see('You can now access your case. You will first need to create an account or sign in if you already have one.');
    });

    Then(/^I am on the self register page$/, async () => {
      await I.seeInCurrentUrl('users/selfRegister');
      await I.waitForText('Sign in to your account.', 30);
      await I.click('Sign in to your account');
      await I.waitForElement('#username', 30);
    });

    When(/^I should see the name `([^"]*)` and the case number `?([^\s`]+)`?$/, async (name, caseNumber) => {
      await I.waitForText('Case details', 60);
      await I.seeInCurrentUrl('start-representing-yourself/confirm-case-details');
      await I.see(name);
      await I.see(caseNumber);
    });

// TODO implement this instead of current LR to AiP NoC once LR env wrt testing has been fixed
    When('I test gov notify client', async () => {
      let notifications = await notifyClient
        .getNotifications()
        .then((response) => {
          let data = response.data.notifications.filter(item => item.template.id === 'abb94a28-62e3-4aea-9dba-9bdea1f6c9ec');
          let emailBody = data[0].body;
          let usefulInfo = emailBody.split('Enter your online case reference number: ')[1]
                                    .split('The security code is valid')[0]
                                    .split('*Enter this security code: ');
          let caseRef = usefulInfo[0].trim();
          let code = usefulInfo[1].trim();
          let name = emailBody.split('Appellant name:')[1].split('The online service:')[0].trim();
          let firstName = name.split(' ')[0];
          let lastName = name.split(' ')[1];
          console.log(caseRef, code, firstName, lastName)
        })
        .catch((err) => console.error(err))
    });
  }
};
