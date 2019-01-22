import { Toast } from 'antd-mobile'
import Cookies from 'js-cookie'
Object.assign(APP, {
  toast: (message) => {
    Toast.info(message)
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
