import { Toast } from 'antd-mobile'
import Cookies from 'js-cookie'
Object.assign(APP, {
  toast: (message, duration = 1) => {
    Toast.info((message || '未知错误'), duration)
  },
  Cookies,
  getEnv: () => {
    let env = 'browser'
    if (__CLIENT__) {
      if (/micromessenger/ig.test(window.navigator.userAgent)) {
        env = 'wechat'
      }
    } else if (APP.ctx) {
      if (/micromessenger/ig.test(APP.ctx.req.headers['user-agent'])) {
        env = 'wechat'
      }
    }
    return env
  }
})
if (__CLIENT__) {
  Object.defineProperty(APP, 'token', {
    get: function () {
      return Cookies.get('token') || ''
    },
    set: function (value) {
      Cookies.set('token', value, { expires: 1})
    }
  })
}

