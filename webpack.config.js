const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const nodeExternals = require('webpack-node-externals');
const { NODE_ENV = 'development' } = process.env;
const isDev = NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: './server.ts',
  watch: isDev,
  devtool: 'inline-source-map',
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: 'backend',
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    isDev
      ? new WebpackShellPlugin({
          onBuildEnd: {
            scripts: ['npm run start'],
            blocking: false,
            parallel: true,
          },
        })
      : null,
  ].filter((item) => item),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
