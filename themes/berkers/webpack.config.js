const path = require('path');

module.exports = {
  entry: "./app/entry",

  output: {
    path    : path.resolve(__dirname, "static/js"),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use : ['style-loader', 'postcss-loader']
      }
    ]
  }
};