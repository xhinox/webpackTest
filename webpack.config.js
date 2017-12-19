const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        appTest: path.resolve(__dirname, 'lib/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'public') + '/',
        filename: '[name].js',
        publicPath: path.resolve(__dirname, 'public') + '/js/',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'es2015',
                        plugins: 'syntax-dynamic-import'
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
    ]
}
