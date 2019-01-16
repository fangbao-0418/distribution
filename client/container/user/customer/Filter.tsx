import React from 'react'
import classnames from 'classnames/bind'
import Select from 'client/component/select'
import Popup from 'client/component/action-sheet'
import { Picker } from 'antd-mobile'
import CustomerStatus from './CustomerStatus'
const cx = classnames.bind(require('./style.module.sass'))
function getMonthOption () {
  const startMonth = 1
  const startYear = 2019
  const endMonth = new Date().getMonth() + 1
  const endYear = new Date().getFullYear()
  // const option = [startDate]
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
class Main extends React.Component {
  state = {
    customerStatusClicked: false,
    dateStatusClicked: false
  }
  customerStatus: any
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
    const { customerStatusClicked, dateStatusClicked } = this.state
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
            <CustomerStatus />
          )}
        >
          <Select
            className='mr48'
            clicked={customerStatusClicked}
            onClick={this.onCustomerClick.bind(this)}
          >
            全部
          </Select>
        </Popup>
        <span
          className={cx('date-select')}
        >
          <Picker
            onOk={(val) => {
              console.log(val, 'val')
              this.setState({

              })
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
              01/2029
            </Select>
          </Picker>
        </span>
      </div>
    )
  }
}
export default Main

