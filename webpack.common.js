const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const webpackConfig = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: path.join(__dirname, "public"),
      clean: true,
    },
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
    optimization: {
		splitChunks: {
			cacheGroups: {
				node_vendors: {
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					priority: 1
				}
			}
		},
	},
};

module.exports = webpackConfig;