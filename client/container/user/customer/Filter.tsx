import React from 'react'
import classnames from 'classnames/bind'
import Select from 'client/component/select'
import Popup from 'client/component/action-sheet'
import { Picker } from 'antd-mobile'
import CustomerStatus from './CustomerStatus'
const cx = classnames.bind(require('./style.module.sass'))
const CustomerEnum = {
  '-1': '全部',
  '1': '已退户',
  '2': '已成交'
}
function getMonthOption () {
  const startMonth = 1
  const startYear = 2019
  const endMonth = new Date().getMonth() + 1
  const endYear = new Date().getFullYear()
  let month = startMonth
  let year = startYear
  const option = [`0${startMonth}/${startYear}`]
  while (year < endYear || year === endYear && month < endMonth) {
    month += 1
    if (month > 12) {
      month = 1
      year += 1
    }
    option.push(`${String(month).length === 1 ? '0' + month : month}/${year}`)
  }
  return option
}
const option = getMonthOption().map((item) => {
  return {
    label: item,
    value: item
  }
})
interface Props {
  total?: number
  onChange?: (values: {customerStatus: string, date: string}) => void
}
class Main extends React.Component<Props> {
  payload = {}
  state = {
    customerStatusClicked: false,
    dateStatusClicked: false,
    payload: {
      date: option[option.length - 1].value,
      customerStatus: '-1'
    }
  }
  customerStatus: any
  componentWillUnmount () {
    this.customerStatus.hide(0)
  }
  onCustomerClick () {
    const { customerStatusClicked } = this.state
    this.setState({
      customerStatusClicked: !customerStatusClicked,
      dateStatusClicked: false
    })
  }
  onDateClick () {
    const { dateStatusClicked } = this.state
    this.setState({
      customerStatusClicked: false,
      dateStatusClicked: !dateStatusClicked
    })
    this.customerStatus.hide()
  }
  render () {
    const { customerStatusClicked, dateStatusClicked, payload } = this.state
    return (
      <div className={cx('filter')}>
        <Popup
          ref={(ref) => {
            this.customerStatus = ref
          }}
          style={{
            top: '94px'
          }}
          onExited={() => {
            this.setState({
              customerStatusClicked: false
            })
          }}
          overlay={(
            <CustomerStatus
              value={payload.customerStatus}
              onChange={(value) => {
                payload.customerStatus = value
                this.setState({
                  payload,
                  customerStatusClicked: false
                })
                this.customerStatus.hide()
                if (this.props.onChange) {
                  this.props.onChange(payload)
                }
              }}
            />
          )}
        >
          <Select
            className='mr48'
            clicked={customerStatusClicked}
            onClick={this.onCustomerClick.bind(this)}
          >
            {CustomerEnum[payload.customerStatus]}
          </Select>
        </Popup>
        <span
          className={cx('date-select')}
        >
          <Picker
            value={[payload.date]}
            onOk={(value) => {
              // const res = value[0].split('/')
              // payload.date = res[1] + '-' + res[0]
              payload.date = value[0]
              if (this.props.onChange) {
                this.props.onChange(payload)
              }
            }}
            onVisibleChange={(visible) => {
              if (!visible) {
                this.setState({
                  dateStatusClicked: false
                })
              }
            }}
            data={option}
            cols={1}
          >
            <Select
              clicked={dateStatusClicked}
              onClick={this.onDateClick.bind(this)}
            >
              {payload.date}
            </Select>
          </Picker>
        </span>
        <span className={cx('total-item')}>{this.props.total}个</span>
      </div>
    )
  }
}
export default Main

