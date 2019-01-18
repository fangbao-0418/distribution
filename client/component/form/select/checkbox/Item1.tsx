import React from 'react'
import Common from './index'
class Main extends Common {
  render () {
    const cx = this.cx
    const { checked } = this.props
    return (
      <span
        style={this.props.itemStyle}
        className={cx('checkbox-1', {
          checked
        }, this.props.itemClassName)}
        onClick={() => {
          if (this.props.onClick) {
            this.props.onClick()
          }
        }}
      >
        <i></i>
        <span>{this.props.children}</span>
      </span>
    )
  }
}
export default Main

