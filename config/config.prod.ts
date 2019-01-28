import * as path from 'path';
export default appInfo => {
  return {
    proxy: false,
    static: {
      prefix: '/public/',
      dir: path.join(appInfo.baseDir, 'app/public'),
      dynamic: false,
      preload: true,
    }
  };
};
