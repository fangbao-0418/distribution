'use strict';
import * as path from 'path';
export default () => {
  return {
    keys: 'secret',
    proxy: {
      host: 'https://x-sys.i-counting.cn',
      match: /\/(json|sys|mock)/
    },
    react: {
      assetPath: '/public',
    },

    view: {
      defaultExtension: '.tsx',
    },
    router: {
      entry: 'index',
      exts: ['.tsx'],
    },
    isomorphic: {
      babel: false,
    },
    webpack: {
      // your webpack config file
      custom: {
        configPath: path.resolve(__dirname, './webpack.config.js'),
      },
      devServer: {
        publicPath: '/public/',
      },
      resolve: {
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx', '.sass'],
        alias: {
          client: path.join(__dirname, '../client'),
        },
      },
    },
    onerror: {
      // 线上页面发生异常时，重定向到这个页面上
      errorPageUrl: '/error',
    },
    notfound: {
      pageUrl: '/404',
    }
  };
};
