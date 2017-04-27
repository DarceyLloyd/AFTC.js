var path = require('path');

module.exports = {
  entry: './src/aftc.js',
  output: {
    filename: 'aftc.min.js',
    path: path.resolve(__dirname, 'dist')
  }
};