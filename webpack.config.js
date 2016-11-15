var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, 'app/static');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: [
        "webpack-hot-middleware/client",
        APP_DIR + '/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module : {
        loaders : [
            {
                test : /\.(js|jsx)$/,
                include : APP_DIR,
                exclude: /node_modules/,
                loader : 'babel'
            },
            {
                test : /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?outputStyle=compressed'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css', '.scss'],
        root: [__dirname]
    },
    sassLoader: {
        includePaths: [
            './node_modules',
            './node_modules/grommet/node_modules'
        ]
    }
};

module.exports = config;