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
        loader: 'babel',
      },
      { test: /\.css/, loader: 'style!css' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json' ],
  },
};
