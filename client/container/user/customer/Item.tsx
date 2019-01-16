import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  render () {
    return (
      <div className={cx('item')}>
        <div className={cx('avatar')}>
          张
        </div>
        <div className={cx('item-right')}>
          <h3>
            张女士
            <span>
              09-01 12:00
            </span>
          </h3>
          <p className='mt8'>153****7066</p>
          <p className='mt8'>
            北京****科技有限公司
            <div className={cx('tags')}>

            </div>
          </p>
        </div>
      </div>
    )
  }
}
export default Main

