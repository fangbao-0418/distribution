import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
class  Main extends React.Component {
  render () {
    return (
      <div className={cx('bg')}></div>
    )
  }
}
export default Main