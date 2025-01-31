const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const jsonPackage = require("../package.json");

const devConfig = {
  mode: "development",
  output:{
    publicPath: "http://localhost:8081/"
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "/index.html",
    },
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
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
