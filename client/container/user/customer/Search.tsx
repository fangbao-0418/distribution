import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  className?: string
  onSearch?: (value) => void
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
            ref='input'
            placeholder='请输入姓名 / 电话 / 公司名称'
          />
        </div>
        <span
          onClick={() => {
            if (this.props.onSearch) {
              const el: any = this.refs.input
              console.log(el.value)
              this.props.onSearch(el.value)
            }
          }}
        ></span>
      </div>
    )
  }
}
export default Main

