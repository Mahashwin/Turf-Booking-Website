const webpack = require("webpack");

module.exports = function override(config, env) {
  config.resolve.fallback = {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    process: require.resolve("process/browser"),
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ];

  return config;
};
