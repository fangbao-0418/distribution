'use strict';
import { EggAppInfo} from 'beidou';
import { Configuration } from 'webpack';
const path = require('path')
const webpack = require('webpack')
var Visualizer = require('webpack-visualizer-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function getCssLoaderConfig(dev, modules = false) {
  return {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
      minimize: !dev,
      sourceMap: dev,
      modules,
      localIdentName: modules ? '[local]_[hash:base64:5]' : undefined,
    },
  };
}

export default (app: EggAppInfo, defaultConfig: Configuration, dev: boolean ): Configuration => {
  console.log(dev,'dev')
  if (app && dev) {
    defaultConfig.entry = {
      app: [
        `${require.resolve('webpack-dev-server/client')}?http://0.0.0.0:6002`,
        require.resolve('webpack/hot/only-dev-server'),
        path.join(__dirname, '../client/pages/index')
      ]
    }
    // defaultConfig.plugins.unshift(
    //   new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     minChunks: function (module) {
    //       return module.context && module.context.includes('node_modules');
    //     }
    //   })
    // )
    defaultConfig.plugins.push(
      new webpack.ProvidePlugin({
        APP: path.resolve(__dirname, '../client/utils/app')
      }),
      new Visualizer(),
      // new BundleAnalyzerPlugin()
    );
  } else {
    defaultConfig.entry = {
      app: [
        path.join(__dirname, '../client/pages/index')
      ]
    },
    // defaultConfig.plugins.unshift(
    //   new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor',
    //     minChunks: function (module) {
    //       return module.context && module.context.includes('node_modules');
    //     }
    //   })
    // )
    defaultConfig.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.ProvidePlugin({
        APP: path.resolve(__dirname, '../client/utils/app')
      }),
      new Visualizer(),
      // new BundleAnalyzerPlugin()
    );
  }

  // const tsLoader =  {
  //   test: /\.tsx?$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: 'babel-loader',
  //     },
  //   ],
  // };
  const sassLoader =  (modules = false) => ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      getCssLoaderConfig(dev, modules),
      'postcss-loader',
      'sass-loader'
    ],
  })
  // defaultConfig.module.rules[0].use = {
  //   loader: 'babel-loader',
  //   options: {
  //     babelrc: false,
  //     presets: [
  //       [
  //         '@babel/preset-env',
  //         {
  //           targets: {
  //             browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
  //           },
  //           useBuiltIns: 'entry',
  //           // Do not transform modules to CJS
  //           modules: false,
  //         },
  //       ],
  //       ['@babel/preset-stage-2', { decoratorsLegacy: true }],
  //       [
  //         '@babel/preset-react',
  //         {
  //           development: dev,
  //           useBuiltIns: true,
  //         },
  //       ],
  //     ],
  //     plugins: [],
  //     env: {
  //       development: {
  //         plugins: ['module:react-hot-loader/babel'],
  //       },
  //     },
  //     cacheDirectory: dev,
  //     compact: !dev,
  //     highlightCode: true,
  //   },
  // };
  // defaultConfig.module.rules[3].use = sassLoader()
  // defaultConfig.module.rules[4].use = sassLoader(true)
  // const tsLoader =  {
  //   test: /\.tsx?$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: 'babel-loader',
  //     },
  //   ],
  // };
  // defaultConfig.module.rules.push(tsLoader);
  // defaultConfig.output = {
  //   path: path.join(__dirname, '../app/public'),
  //   filename: '[name].js',
  //   publicPath: '/public/',
  //   chunkFilename: '[name].[chunkhash].js',
  // };
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   // filename: "vendor.js"
  //   // (给 chunk 一个不同的名字)

  //   minChunks: Infinity,
  //   // (随着 entry chunk 越来越多，
  //   // 这个配置保证没其它的模块会打包进 vendor chunk)
  // })
  defaultConfig.mode = dev ? 'development' : 'production';
  defaultConfig.externals = {
    // react: 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-router': 'ReactRouter',
    // 'react-router-dom': 'ReactRouterDOM',
    // axios: 'axios',
    // 'antd-mobile': 'window[\'antd-mobile\']'
  }
  console.log(defaultConfig, 'defaultConfig')
  return defaultConfig;
};
