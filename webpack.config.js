module.exports = {
    mode: 'development',
    entry: './build/src/index.js',
    output: {
      filename: './build/bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        open: true
      }
};