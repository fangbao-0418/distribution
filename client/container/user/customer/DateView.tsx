import React from 'react'
import classnames from 'classnames/bind'
import { PickerView } from 'antd-mobile'
const cx = classnames.bind(require('./style.module.sass'))
const season = [
  {
    label: '春',
    value: '春',
  },
  {
    label: '夏',
    value: '夏',
  },
];
class Main extends React.Component {
  render () {
    return (
      <div className={cx('date-view')}>
        <PickerView
          data={season}
          cascade={false}
        />
      </div>
    )
  }
}
export default Main

