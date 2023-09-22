const config = require('config');
const process = require('process');
const ourBootStrap = require('./test/functional/bootstrap').bootstrap
const ourTeardown = require('./test/functional/bootstrap').teardown

exports.config = {
  name: 'codecept',
  output: './functional-output/e2e/reports/',
  // teardown: './test/functional/bootstrap.ts',
  bootstrap: async () => {
    await ourBootStrap();
  },
  teardown: async () => {
    await ourTeardown();
  },
  helpers: {
    Puppeteer: {
      url: config.get('testUrl'),
      show: config.get('showTests'),
      chrome: {
        ignoreHTTPSErrors: true
      }
    },
    customHelper: {
      require: './test/e2e-test/helpers/navigationHelper.ts' // Import the custom helper file
    }
  },
  gherkin: {
    features: './test/e2e-test/features/*.feature',
    steps: ['./test/e2e-test/step_definitions/steps.ts']
  },
  plugins: {
    retryFailedStep: {
      enabled: true
    }
  },
  'mocha': {
    'reporterOptions': {
      'codeceptjs-cli-reporter': {
        'stdout': '-',
        'options': {
          'verbose': true,
          'steps': true
        }
      },
      'mochawesome': {
        'stdout': './functional-output/e2e/reports/console.log',
        'options': {
          'reportDir': './functional-output/e2e/reports/',
          'reportFilename': 'report'
        }
      }
    }
  },
  require: ['ts-node/register/transpile-only']
};
