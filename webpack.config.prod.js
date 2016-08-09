var path = require('path');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var swPrecache = require('sw-precache');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

function WebpackSwPrecachePlugin(options) {
}

WebpackSwPrecachePlugin.prototype.apply = function (compiler) {
  var rootDir = 'dist';

  var options = {
    staticFileGlobs: [
      'prod-bundle.js',
      'assets/**/*',
      'assets/pages/css/*',
      'favicon.ico'
    ],
    stripPrefix: 'dist',
  }
  compiler.plugin("after-emit", (compilation, callback) => {
    swPrecache.write(path.join(rootDir, "sw-precache-config.js"), options, function (err) {
      if (err) {
        console.log("\n*** sw-precache file creation error: " + err);
      } else {
          console.log("\nCreated sw-precache file static/sw-precache-config.js");
      }
      callback(err);
    })
  });
};
module.exports = {
  entry: {
    'prod-bundle': './src/app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new ImageminPlugin(),
    new webpack.ProvidePlugin({ Papa: 'papaparse' }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    new TransferWebpackPlugin([
      {from: 'assets',to: 'assets'},
    ]),
    new WebpackSwPrecachePlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=20000000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=20000000&mimetype=application/font-woff'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=20000000'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=20000000'
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=20000000'
      },
      { 
        test: /\.png$/,
        loader: 'url-loader?limit=20000000'
      }
    ]
  }
};