import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  label?: string
  required?: boolean
  right?: React.ReactNode
  className?: string
}
class Main extends React.Component<Props> {
  render () {
    return (
      <div className={cx('form-item', this.props.className)}>
        {
          this.props.label && (
            <div className={cx('label')}>
              {this.props.required && <span className={cx('required')}>*</span>}{this.props.label}:
            </div>
          )
        }
        <div className={cx('control')}>
          {this.props.children}
        </div>
        {
          this.props.right && (
            <div className={cx('right')}>
              {this.props.right}
            </div>
          )
        }
      </div>
    )
  }
}
export default Main
