import React from 'react'
import classnames from 'classnames/bind'
import QRcode from './QRcode'
import Menu from './menu'
import { connect } from 'react-redux'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  user: UserProps
}
class Main extends React.Component<Props> {
  render () {
    const { user } = this.props
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
              {user.phone}
            </div>
            <div>
              <QRcode />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    user: common.user
  }
})(Main)
