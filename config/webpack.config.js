'use strict';
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
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (app, defaultConfig, dev) => {
  if (app && dev) {
    defaultConfig.entry = {
      app: [
        `${require.resolve('webpack-dev-server/client')}?http://0.0.0.0:6002`,
        require.resolve('webpack/hot/only-dev-server'),
        require.resolve('babel-polyfill'),
        path.join(__dirname, '../client/pages/index')
      ]
    },
    defaultConfig.plugins.push(
      new webpack.DefinePlugin({
        __ENV__: JSON.stringify('daily'),
        __CLIENT__: true,
        __SERVER__: false,
        __DEVELOPMENT__: true,
        __DEVTOOLS__: true,
        __DAILY__: true,
      }),
      new webpack.ProvidePlugin({
        APP: path.resolve(__dirname, '../client/utils/app')
      })
    );
  } else {
    defaultConfig.entry = {
      app: [
        require.resolve('babel-polyfill'),
        path.join(__dirname, '../client/pages/index')
      ]
    },
    defaultConfig.plugins.push(
      new webpack.DefinePlugin({
        __ENV__: JSON.stringify('prod'),
        __CLIENT__: true,
        __SERVER__: false,
        __DEVELOPMENT__: false,
        __DEVTOOLS__: false,
        __DAILY___: false,
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.ProvidePlugin({
        APP: path.resolve(__dirname, '../client/utils/app')
      })
    );
  }

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
                },
                useBuiltIns: 'entry',
                // Do not transform modules to CJS
                modules: false,
              },
            ],
            '@babel/typescript',
            ['@babel/preset-stage-2', { decoratorsLegacy: true }],
            [
              '@babel/preset-react',
              {
                development: dev,
                useBuiltIns: true,
              },
            ],
          ],

          plugins: [
            [
              '@babel/transform-runtime',
              {
                polyfill: false,
                regenerator: true,
              },
            ],
          ],
          env: {
            development: {
              plugins: ['module:react-hot-loader/babel'],
            },
          },
          cacheDirectory: dev,
          compact: !dev,
          highlightCode: true,
        },
      },
    ],
  };
  const sassLoader =  (modules = false) => ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      getCssLoaderConfig(dev, modules),
      'postcss-loader',
      {
        loader: require.resolve('sass-loader'),
      },
    ],
  })
  defaultConfig.module.rules[0].use = {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
            },
            useBuiltIns: 'entry',
            // Do not transform modules to CJS
            modules: false,
          },
        ],
        ['@babel/preset-stage-2', { decoratorsLegacy: true }],
        [
          '@babel/preset-react',
          {
            development: dev,
            useBuiltIns: true,
          },
        ],
      ],
      plugins: [],
      env: {
        development: {
          plugins: ['module:react-hot-loader/babel'],
        },
      },
      cacheDirectory: dev,
      compact: !dev,
      highlightCode: true,
    },
  };
  defaultConfig.module.rules[3].use = sassLoader()
  defaultConfig.module.rules[4].use = sassLoader(true)
  defaultConfig.module.rules.push(tsLoader);
  defaultConfig.output = {
    path: path.join(__dirname, '../app/public'),
    filename: '[name].js',
    publicPath: '/public/',
    chunkFilename: '[name].[chunkhash].js',
  };
  defaultConfig.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'react-router-dom': 'ReactRouterDOM',
    axios: 'axios',
    'antd-mobile': 'window[\'antd-mobile\']'
  }
  return defaultConfig;
};
