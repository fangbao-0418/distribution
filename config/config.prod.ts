import * as path from 'path';
export default appInfo => {
  return {
    proxy: false,
    static: {
      prefix: '/build/',
      dir: path.join(appInfo.baseDir, 'build'),
      dynamic: false,
      preload: true,
    }
  };
};
