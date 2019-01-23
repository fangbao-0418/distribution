import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  render () {
    return (
      <img
        className={cx('qr-code', 'mt10')}
        src={require('client/assets/icon_erweima@3x.png')}
        onClick={() => {
          APP.history.push('/profile')
        }}
      />
    )
  }
}
export default Main
