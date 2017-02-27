var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: "source-map",
  entry: [
    "./frontend/index.js"
  ],

  output: {
    path: path.resolve(__dirname, "./public/javascripts"),
    filename: "bundle.js",
    publicPath: "/"
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        include: path.resolve(__dirname, "./frontend"),
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }

}
