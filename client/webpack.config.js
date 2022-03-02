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
      port: 8080,
      open: true
    }
};