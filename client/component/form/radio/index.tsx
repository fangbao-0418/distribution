import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  style?: React.CSSProperties
  className?: string
  value?: any
  option?: Array<{label: string, value: any}>
  onChange?: (value: any) => void
  itemStyle?: React.CSSProperties
  itemClassName?: string
}
class Main extends React.Component<Props> {
  state = {
    value: this.props.value,
    option: this.props.option
  }
  render () {
    const { value, option } = this.state
    return (
      <div
        style={this.props.style}
        className={this.props.className}
      >
        {
          (option || []).map((item) => {
            return (
              <span
                style={this.props.itemStyle}
                className={cx('radio', {
                  checked: item.value === value
                }, this.props.itemClassName)}
                onClick={() => {
                  this.setState({
                    value: item.value
                  })
                  if (this.props.onChange) {
                    this.props.onChange(item.value)
                  }
                }}
              >
                <i></i>
                <span>{item.label}</span>
              </span>
            )
          })
        }
      </div>
    )
  }
}
export default Main
