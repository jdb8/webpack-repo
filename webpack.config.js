const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  plugins: [new HtmlWebpackPlugin()]
};
