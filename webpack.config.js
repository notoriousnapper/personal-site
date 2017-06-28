module.exports = {
  entry: [
  ],

  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      // { test: /\.css$/, loader: "style-loader!css-loader" },
      {test: /\.scss$/,loader:"css!sass-loader-once"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
