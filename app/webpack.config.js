var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./main.js'],
  },
  output: {
    path: '../js',
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0'],
      },
      { test: /\.json/, loader: 'json' },
      { test: /\.css/, loader: 'style!css' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json' ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify(process.env.NODE_ENV)}
    })
  ]
};
