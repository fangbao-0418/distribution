import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
import RadioItem1 from './radio/Item1'
import CheckboxItem1 from './checkbox/Item1'
const ControlOptions = {
  radio1: RadioItem1,
  checkbox1: CheckboxItem1
}
interface Props {
  /** 一行多少条 */
  option: Array<{label: string, value: any}>
  flex?: number
  onChange?: (value: any) => void
  value?: any
  type?: 'radio' | 'checkbox'
  theme?: '1' | '2'
  itemStyle?: React.CSSProperties
  itemClassName?: string
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
  public handleClick (value: any) {
    const { type } = this.props
    if (type === 'radio') {
      this.setState({
        value: value
      })
    } else {
      const oldValue = this.state.value || []
      console.log(oldValue, 'oldValue')
      if (oldValue instanceof Array === false) {
        throw Error('多选类型value必须是数组')
      }
      const index = oldValue.indexOf(value)
      console.log(index, 'index')
      if (index === -1) {
        oldValue.push(value)
      } else {
        oldValue.splice(index, 1)
      }
      this.setState({
        value: oldValue
      })
    }
  }
  render () {
    const { value, option } = this.state
    const flex = this.props.flex || 0
    const theme = this.props.theme || '1'
    const { type, itemStyle, itemClassName } = this.props
    const Control = ControlOptions[`${type}${theme}`]
    let nodes = []
    return (
      <div className={cx('select')}>
        {
          option.map((item, index) => {
            nodes.push(
              <Control
                itemStyle={itemStyle}
                itemClassName={itemClassName}
                checked={(value instanceof Array ? value : [value]).indexOf(item.value) > -1}
                onClick={this.handleClick.bind(this, item.value)}
              >
                {item.label}
              </Control>
            )
            if (nodes.length === flex || index === option.length - 1) {
              const node = nodes
              nodes = []
              return (
                <div
                  className={(cx('select-wrap'))}
                >
                  {node}
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}
export default Main

