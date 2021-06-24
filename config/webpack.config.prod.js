const path = require("path");

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: 'js/[name]-[contenthash:6].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test:/\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test:/\.(jpg|png|svg|gif|jpeg)$/i,
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:6].css'
    }),
    new HtmlWebpackPlugin({title: "WarsawJS Workshop 54", template: "src/templates/template.html"}),
  ]
};