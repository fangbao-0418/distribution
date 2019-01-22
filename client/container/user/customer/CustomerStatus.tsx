import React from 'react'
import classnames from 'classnames/bind'
import Select from 'client/component/select/Item1'
const cx = classnames.bind(require('./style.module.sass'))
const option = [
  {
    label: '全部',
    value: '-1'
  },
  {
    label: '已成交',
    value: '1'
  },
  {
    label: '已退户',
    value: '0'
  }
]
interface Props {
  value?: string
  onChange?: (value) => void
}
class Main extends React.Component<Props> {
  render () {
    return (
      <div className={cx('customer-status')}>
        <h3>客户状态</h3>
        <Select
          value={this.props.value}
          onChange={(value) => {
            if (this.props.onChange) {
              this.props.onChange(value)
            }
          }}
          option={option}
        />
      </div>
    )
  }
}
export default Main

