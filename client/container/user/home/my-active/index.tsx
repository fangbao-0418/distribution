import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
import Tips from './Tips'
class Main extends React.Component {
  render () {
    return (
      <div
        className={cx('mt30')}
        onClick={() => {
          APP.history.push('/gift')
        }}
      >
        <Tips title='我的活动'/>
        <div className={cx('active-item')}>
          <div className={cx('con', 'clear', 'ml26')}>
            <div className={cx('mr20')}>
              <span className={cx('eye', 'mr10')}></span>
              <span>256</span>
            </div>
            <div>
              <span>成交量：</span>
              <span>3/200</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Main
