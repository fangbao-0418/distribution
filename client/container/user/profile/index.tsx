import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  render () {
    return (
      <div className={cx('bg')}>
        <img src={require('client/assets/label_erwi@3x.png')}/>
      </div>
    )
  }
}
export default Main