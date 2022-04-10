const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './script.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  plugins: [
    new Dotenv()
  ],
  mode: 'development'
}
