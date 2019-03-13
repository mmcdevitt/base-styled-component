const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "styled-components": "styled-components"
  },
  devServer: {
    historyApiFallback: true
  },
  mode: "production"
};
