"use strict";
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm.js"
    },
    extensions: [".ts", ".js", ".vue", ".json"]
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true,
    hot: true,
    open: true,
    port: 8888
  }
};
