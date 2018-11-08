const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  mode: 'development',
  entry: {
    'create-account': ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './server/web/create-account'],
    'sign-in': ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './server/web/sign-in'],
    'qualification-manager': ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './server/web/qualification-manager'],
    'company-manager': ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './server/web/company-manager'],
    'profile-manager': ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './server/web/profile-manager'],

  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.join(`${__dirname}/static/dist/js/`),
    filename: '[name].js',
    publicPath: '/static/dist/',
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
};
