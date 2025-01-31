const webpack = require("webpack");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const jsonPackage = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/food/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "food",
      filename: "remoteEntry.js",
      exposes: {
        "./FoodApp": "./src/bootstrap",
      },
      shared: jsonPackage.dependencies,
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
