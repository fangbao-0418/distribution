import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  render () {
    return (
      <div className={cx('bg')}>
        <div>
          <img className={cx('or-code')} src='https://pilipa-ml.oss-cn-beijing.aliyuncs.com/pilipa/distributor/qr/201901/1087260110466682882.png'/>
        </div>
      </div>
    )
  }
}
export default Main