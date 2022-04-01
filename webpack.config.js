const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'react-client/src', 'index.jsx'),
  output: {
    path: path.join(__dirname, './react-client/dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project-Atelier',
      filename: 'index.html',
      template: './react-client/src/index.html',
    }),
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'url-loader',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
