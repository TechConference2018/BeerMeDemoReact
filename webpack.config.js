const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "src/target"),
    publicPath: "/"
  },
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    port: 9192,
    inline: true,
    contentBase: path.resolve(__dirname, "src")
  },
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
};
