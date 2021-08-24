const path = require("path");

module.exports = {
  mode: "development",
  entry: "./source/js/main.js",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "build")
  },
  devtool: "source-map",
};