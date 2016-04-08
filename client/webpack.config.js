var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app/app.jsx',
  output: {
      path: path.join(__dirname, 'src'),
      publicPath: '/src/',
      filename: 'bundle.js'
  },
  // devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/, //reg-ex for js & jsx
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          //added react-require to fix React is not defined issue
          //did not work
          plugins: ['react-require', 'transform-runtime'],
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  debug: true
};