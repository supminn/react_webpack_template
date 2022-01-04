const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.join(__dirname, "public"),
    clean: true,
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Webpack Setup",
      template: path.resolve(__dirname, "src/template", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    // open: true,  open's a new tab on browser which runs localhost
    static: "./public",
    client: {
      reconnect: 3,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
