const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  //loaders
  module: {
    rules: [
      {test:/\.(scss|sass)$/, use: ['l']}
    ]
  }
};