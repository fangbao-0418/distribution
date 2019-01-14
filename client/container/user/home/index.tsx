import React from 'react'
import classnames from 'classnames/bind'
import Menu from './menu'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  render () {
    return (
      <div
        className={cx('container')}
      >
        <div
          className={cx('text-center', 'top')}
        >
          <img
            src={require('client/assets/logo@3x.png')}
          />
        </div>
        <div
          className={cx('profile')}
        >
          <div className={cx('avatar')} />
          <div className={cx('profile-right')}>
            <div
              className='font18'
            >
              153678972183
            </div>
            <div>
              <img
                className={cx('qr-code', 'mt10')}
                src={require('client/assets/icon_erweima@3x.png')}
              />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    )
  }
}
export default Main
