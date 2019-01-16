import React from 'react'
import classnames from 'classnames/bind'
import Select from 'client/component/select/Item1'
const cx = classnames.bind(require('./style.module.sass'))
const option = [
  {
    label: '全部',
    value: 'all'
  },
  {
    label: '已成交',
    value: '1'
  },
  {
    label: '已退户',
    value: '2'
  }
]
class Main extends React.Component {
  render () {
    return (
      <div className={cx('customer-status')}>
        <h3>客户状态</h3>
        <Select
          option={option}
        />
      </div>
    )
  }
}
export default Main

