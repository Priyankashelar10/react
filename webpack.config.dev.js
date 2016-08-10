var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var swPrecache = require('sw-precache');

function WebpackSwPrecachePlugin(options) {
}

WebpackSwPrecachePlugin.prototype.apply = function (compiler) {
  var rootDir = 'src';

  var options = {
    staticFileGlobs: [
        'src/bundle.js',
        'src/assets/**/*',
    ],
    stripPrefix: 'src',
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
  devtool: 'cheap-module-eval-source-map',
  entry: {
    bundle: './src/app.js'
  },
  output: {
    path: 'src',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackSwPrecachePlugin(),
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
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000'
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
        loader: 'url-loader?limit=10000'
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000'
      },
      { 
        test: /\.png$/,
        loader: 'url-loader?limit=1000'
      }
    ]
  }
};