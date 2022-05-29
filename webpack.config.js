const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/client.js',
    bundle: './src/bundle.js',
    runtime: "regenerator-runtime/runtime.js"
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
 },
 node: {
  child_process: 'empty',
  fs: 'empty',
  net: 'empty',
  tls: 'empty',
  readline: 'empty'
}
}
