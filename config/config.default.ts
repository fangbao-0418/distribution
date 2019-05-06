'use strict';
import { EggAppConfig, PowerPartial } from 'beidou';
import { Configuration } from 'webpack';
// 应用本身的配置 Scheme
interface A {
  [field: string]: any
}
export interface Config extends EggAppConfig {
  // webpack?: Configuration
}

import * as path from 'path';
export default () => {
  let config: any = {};
  config = {
    keys: 'secret',
    proxy: {
      host: 'https://x-sys.i-counting.cn',
      match: /\/(json|sys|mock)/
    },
    react: {
      assetPath: '/build',
    },

    view: {
      defaultExtension: '.tsx',
    },
    router: {
      entry: 'index',
      exts: ['.tsx'],
    },
    isomorphic: {
      // babel: false,
    },
    webpack: {
      // your webpack config file
      custom: {
        configPath: path.resolve(__dirname, './webpack.config.ts'),
      },
      optimization: {
        splitChunks: {
          chunks (chunk) {
            // exclude `my-excluded-chunk`
            return true
          },
          name: 'vendor',
          // cacheGroups: {
          //   default: false,
          //   vendors: false,
          //   manifest: {
          //     test: /[\\/]node_modules[\\/]/,
          //   },
          // },
        },
        noEmitOnErrors: true,
      },
      devServer: {
        publicPath: '/build/',
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
  return config
};
