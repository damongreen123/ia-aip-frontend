const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonConfig = require('./webpack.common');
const Configuration = require('webpack');
const merge = require('webpack-merge');

const serverConfig = {
    dependencies: ['server'],
    mode: "production"
};

const clientConfig = {
    dependencies: ['client'],
    mode: "production",
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};

const prodConfig = {
    serverConfig,
    clientConfig
};

console.debug('PROD')
console.debug(JSON.stringify(prodConfig))
console.debug('COMMON')
console.debug(JSON.stringify(commonConfig))

const config = merge<Configuration>(commonConfig, prodConfig);

module.exports = config;

