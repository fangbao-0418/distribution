import { Toast } from 'antd-mobile'
Object.assign(APP, {
  toast: (message) => {
    Toast.info(message)
  }
})