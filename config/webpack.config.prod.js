const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
  }
};