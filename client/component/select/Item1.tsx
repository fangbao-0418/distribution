import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  /** 一行多少条 */
  option: Array<{label: string, value: any}>
  flex?: number
  onChange?: (value: any) => void
  value?: any
  type?: 'radio' | 'checkbox'
  theme?: '1' | '2' | '3'
}
class Main extends React.Component<Props> {
  state = {
    value: this.props.value,
    option: this.props.option
  }
  componentWillReceiveProps (props: Props) {
    this.setState({
      option: props.option,
      value: props.value
    })
  }
  render () {
    const { value, option } = this.state
    const flex = this.props.flex || 3
    return (
      <div className={cx('select-type-1')}>
        {
          option.map((item) => {
            return (
              <div
                style={{
                  width: (100 / flex) + '%'
                }}
                className={(cx('select-wrap'))}
              >
                <span
                  className={cx({
                    active: item.value === value
                  })}
                  onClick={() => {
                    this.setState({
                      value: item.value
                    })
                    if (this.props.onChange) {
                      this.props.onChange(item.value)
                    }
                  }}
                >
                  {item.label}
                </span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default Main

