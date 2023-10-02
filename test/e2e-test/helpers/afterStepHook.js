const event = require('codeceptjs').event;

module.exports = async function() {

  event.dispatcher.on(event.step.failed, async function (test) {
    try {
      console.log('after step');
      const helper = event.step.helper;
      await helper.see('There is a problem with the service');
      await helper.page.goBack();
      event.step.run();
    } catch (err) {
      // Do nothing
    }
  });
}
