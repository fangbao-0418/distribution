import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  render () {
    return (
      <div className={cx('menu')}>
        <div
          className={cx('menu-item', 'person')}
        >
          个人信息
        </div>
        <div
          className={cx('menu-item', 'customer')}
        >
          个人信息
        </div>
        <div
          className={cx('menu-item', 'wallet')}
        >
          个人信息
        </div>
      </div>
    )
  }
}
export default Main
