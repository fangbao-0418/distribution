import React from 'react'
import classnames from 'classnames/bind'
import { Toast } from 'antd-mobile'
const cx = classnames.bind(require('./style.module.sass'))
interface Props extends React.ButtonHTMLAttributes<any> {
  size: 'large' | 'small'
}
class Main extends React.Component<Props> {
  el: any
  public componentDidMount () {
    this.el = this.refs.button
    this.el.addEventListener('touchstart', (e) => {
      e.preventDefault()
      this.el.className = `${this.el.className} ${cx('active')}`.replace(new RegExp(cx('active'), 'g'), cx('active'))
    })
    this.el.addEventListener('touchend', (e) => {
      e.preventDefault()
      this.el.className = this.el.className.replace(RegExp(cx('active'), 'g'), '')
    })
  }
  render () {
    return (
      <div
        ref='button'
        {...this.props}
        className={cx('button', this.props.className, cx(this.props.size || 'large'))}
      >
        {this.props.children}
      </div>
    )
  }
}
export default Main
