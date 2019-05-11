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
  defaultConfig.plugins.push(
    new webpack.ProvidePlugin({
      APP: path.resolve(__dirname, '../client/utils/app')
    })
  );
  defaultConfig.entry = {
    app: [
      path.join(__dirname, '../client/pages/index')
    ]
  }
  if (app && dev) {
    /** ... */
  } else {
    defaultConfig.plugins.push(
      BundleAnalyzerPlugin,
      new ImageminPlugin()
    );
  }
  defaultConfig.mode = dev ? 'development' : 'production';
  return defaultConfig;
};
