require('dotenv-extended').load({ path: 'api/.env.defaults' });
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
        // timeout: 5000
    },
    htmlReporter: {
        baseDir: 'reports/tests/mutation/node/'
    },
    concurrency: 2
}