import { paths } from '../../../../app/paths';
const config = require('config');

const testUrl = config.get('testUrl');

module.exports = {
  checkAndSend(I) {

    Given(/^I am on the check your answers page$/, async () => {
      I.amOnPage(testUrl + paths.appealStarted.checkAndSend);
    });

    When(/^I click on the check and send your appeal link$/, async () => {
      await I.click('Check and send your appeal');
    });

    Then(/^I should be taken to the check-and-send page$/, async () => {
      await I.waitInUrl(paths.appealStarted.checkAndSend,10);
      await I.seeInCurrentUrl(paths.appealStarted.checkAndSend);
      await I.see('Check your answer', 'h1');
    });

    Then('I click Reason for late appeal change button', async () => {
      await I.click('(//a[contains(text(),"Change")])[10]');
    });

    When('I click send', async () => {
      await I.click('Send');
    });

    When('I click submit your appeal', async () => {
      await I.click('Submit your appeal');
    });

    When('I click Submit and continue to pay £80 by debit or credit card', async () => {
      await I.click('Submit and continue to pay £80 by debit or credit card');
    });

    Then('I check the statement of truth', async () => {
      await I.click('I believe the information I have given is true');
    });

    Then(/^I submit appeal for a decision (with|without) hearing (non paid|paid) appeal$/, async (hearingType, paymentChoice) => {
      if (paymentChoice === 'non paid') {
        await I.click('Send');
      } else {
        if (hearingType === 'with') {
          await I.click('Submit and continue to pay £140 by debit or credit card');
        } else {
          await I.click('Submit and continue to pay £80 by debit or credit card');
        }
        await I.see('Enter card details', 'h1');
        await I.fillField('#card-no','4444333322221111');
        await I.fillField('#expiry-month','10');
        await I.fillField('#expiry-year','23');
        await I.fillField('#cardholder-name','Successful payment');
        await I.fillField('#cvc','123');
        await I.fillField('#address-line-1','123 Bond Street');
        await I.fillField('#address-city','Bondsthorpe');
        await I.fillField('#address-postcode','BO0 0ND');
        await I.fillField('#email', 'test@mail.com');
        await I.click('Continue');
        await I.see('Confirm your payment', 'h1');
        await I.click('Confirm payment');
        await I.waitForText('What happens next', 60);
      }
    });

    Then(/^I submit a failed payment appeal with (Card type not accepted|Card declined|Card expired|Invalid CVC code|General error)$/, async (cardError) => {
      await I.click('Submit and continue to pay £140 by debit or credit card');
      await I.waitForText('Enter card details', 30);
      await I.see('Enter card details', 'h1');
      let cardNumber;
      if (cardError === 'Card type not accepted') {
        cardNumber = '6759649826438453';
      } else if (cardError === 'Card declined') {
        cardNumber = '4000000000000002';
      } else if (cardError === 'Card expired') {
        cardNumber = '4000000000000069';
      } else if (cardError === 'Invalid CVC code') {
        cardNumber = '4000000000000127';
      } else if (cardError === 'General error') {
        cardNumber = '4000000000000119';
      }
      await I.fillField('#card-no', cardNumber);
      await I.fillField('#expiry-month','10');
      await I.fillField('#expiry-year','23');
      await I.fillField('#cardholder-name','Successful payment');
      await I.fillField('#cvc','123');
      await I.fillField('#address-line-1','123 Bond Street');
      await I.fillField('#address-city','Bondsthorpe');
      await I.fillField('#address-postcode','BO0 0ND');
      await I.fillField('#email', 'test@mail.com');
      await I.click('Continue');
      await I.wait(2);
    });

    Then('I see a This card type is not accepted error message', async () => {
      await I.see('This card type is not accepted');
    });

    Then('I see the Your payment has been declined error page', async () => {
      await I.see('Your payment has been declined');
    });

    Then('I see the We’re experiencing technical problems error page', async () => {
      await I.see('We’re experiencing technical problems');
    });
  }
};
