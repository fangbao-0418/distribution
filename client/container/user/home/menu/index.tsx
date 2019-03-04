import React from 'react'
import classnames from 'classnames/bind'
import { Toast } from 'antd-mobile'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  render () {
    return (
      <div className={cx('menu')}>
        <div
          className={cx('menu-item', 'customer')}
          onClick={() => {
            APP.history.push('/user/customer')
          }}
        >
          我的客户
        </div>
        <div
          className={cx('menu-item', 'wallet')}
          onClick={() => {
            Toast.info('该功能暂未开放！')
          }}
        >
          我的钱包
        </div>
        <div
          className={cx('menu-item', 'call')}
          onClick={() => {
            APP.history.push('/user/call')
          }}
        >
          联系客服
        </div>  
      </div>
    )
  }
}
export default Main
