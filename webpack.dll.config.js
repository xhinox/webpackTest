const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        modules: [
            'jquery',
            'owl.carousel',
            'hammerjs',
            'pikaday'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public') + '/js/',
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, '[name]-manifest.json')
        })
    ]
}
