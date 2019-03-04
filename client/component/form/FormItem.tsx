import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  label?: string
  required?: boolean
  right?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  noForm?: boolean
  onClick?: () => void
}
class Main extends React.Component<Props> {
  render () {
    return (
      <div
        style={this.props.style}
        className={cx('form-item', this.props.className)}
        onClick={() => {
          if (this.props.onClick) {
            this.props.onClick()
          }
        }}
      >
        {
          this.props.label && (
            <div className={cx('label')}>
              {this.props.required && <span className={cx('required')}>*</span>}{this.props.label}{this.props.noForm ? '' : ':'}
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
