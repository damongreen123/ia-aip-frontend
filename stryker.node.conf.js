require('dotenv-extended').load({ path: 'api/.env.defaults' });

const mocha = require("mocha");
const proxyquire = require("proxyquire");
const sinon = require("sinon");
const MOCK_GLOB_SYNC = require("./mock.json");


const fetchStub = sinon.stub();
fetchStub.resolves(MOCK_GLOB_SYNC);

const mockGlobSync = proxyquire(
   "./node_modules/mocha/node_modules/glob/sync.js",
   {
    "node-fetch": fetchStub
   }
  );

module.exports = {
    // fileLogLevel: 'trace',
    // logLevel: 'trace',
    mutate: ["app/**/*.ts", "!app/test/**/*.ts"],
    transpilers: [
        'typescript'
    ],
    testRunner: "mocha",
    reporters: ["clear-text", "progress", "html"],
    tsconfigFile: 'tsconfig.json',
    mochaOptions: {
        spec: [ "dist/out-tsc/api/{,!(test)/**/}*.spec.js" ],
        require: ["mockGlobSync"]
        // timeout: 5000
    },
    concurrency: 2
}