const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack')
const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
			'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/entery/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader", "postcss-loader"]
        }]
    },
    plugins:[
        new webpack.DefinePlugin({
            MOCK: true
        }),
    ]
    
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);