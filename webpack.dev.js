const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
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
});
