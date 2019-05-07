'use strict';
import { EggAppInfo} from 'beidou';
import { Configuration } from 'webpack';
const path = require('path')
const webpack = require('webpack')
const BundleAnalyzer = require('webpack-bundle-analyzer');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const BundleAnalyzerPlugin = new BundleAnalyzer.BundleAnalyzerPlugin({
  analyzerMode: 'static',
  openAnalyzer: false
})

export default (app: EggAppInfo, defaultConfig: Configuration, dev: boolean ): Configuration => {
  if (app && dev) {
    defaultConfig.entry = {
      app: [
        `${require.resolve('webpack-dev-server/client')}?http://0.0.0.0:6002`,
        require.resolve('webpack/hot/only-dev-server'),
        path.join(__dirname, '../client/pages/index')
      ]
    }
    defaultConfig.plugins.push(
      new webpack.ProvidePlugin({
        APP: path.resolve(__dirname, '../client/utils/app')
      })
    );
  } else {
    defaultConfig.entry = {
      app: [
        path.join(__dirname, '../client/pages/index')
      ]
    },
    defaultConfig.plugins.push(
      new webpack.ProvidePlugin({
        APP: path.resolve(__dirname, '../client/utils/app')
      }),
      BundleAnalyzerPlugin,
      new ImageminPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      })
    );
  }
  defaultConfig.mode = dev ? 'development' : 'production';
  return defaultConfig;
};
