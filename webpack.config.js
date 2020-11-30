const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/source');
const DIST_DIR = path.join(__dirname, '/client/public');

module.exports = {
  mode: 'production',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  plugins: [new CompressionPlugin({
    algorithm: 'brotliCompress',
  })],
};
