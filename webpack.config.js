const path = require('path');


module.exports = {
  entry: path.join(__dirname, "react-client/src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "react-client", "dist"),
    clean: true
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
}


// test: /\.?js$/,