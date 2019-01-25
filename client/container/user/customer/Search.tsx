import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  className?: string
  onSearch?: (value) => void
  onChange?: (value) => void
  setBtnShow?: (value) => void
}
class Main extends React.Component<Props> {
  componentDidMount () {
    var originalHeight = document.documentElement.clientHeight || document.body.clientHeight
    window.onresize = () => {
      var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight
      if(resizeHeight - 0 < originalHeight - 0){
        //当软键盘弹起，在此处操作
        this.props.setBtnShow(false)
      }else{
        //当软键盘收起，在此处操作
        this.props.setBtnShow(true)
      }
    }
  }
  render () {
    return (
      <div
        className={cx('search', this.props.className)}
      >
        <div className={cx('search-input')}>
          <input
            onChange={(e) => { this.props.onChange(e.target.value) }}
            onFocus={() => {this.props.setBtnShow(false)}}
            onBlur={() => {this.props.setBtnShow(true)}}
            onMouseLeave={() => {this.props.setBtnShow(true)}}
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

