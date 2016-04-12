const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // reg-ex for js & jsx
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          // added react-require to fix React is not defined issue
          // react-require must go before 'transform-runtime'
          plugins: ['react-require', 'transform-runtime'],
          presets: ['es2015', 'react'],
        },
      }, {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
    ],
  },
  debug: true,
};
