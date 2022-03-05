const path = require('path');

module.exports = {
  mode: "development",
  entry: "./build/src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    port: 8080,
    open: true,
    proxy: {
      "/rest/*": {
        target: "http://localhost:8081",
        pathRewrite: { "/rest": "" }
      }
    }
  }
};