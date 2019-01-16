import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  className?: string
}
class Main extends React.Component<Props> {
  render () {
    return (
      <div
        className={cx('search', this.props.className)}
      >
        <div className={cx('search-input')}>
          <input
            type="text"
            placeholder='请输入姓名 / 电话 / 公司名称'
          />
        </div>
        <span></span>
      </div>
    )
  }
}
export default Main

