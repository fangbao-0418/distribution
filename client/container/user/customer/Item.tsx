import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  className?: string
  style?: React.CSSProperties
  data: {
    companyName: string
    contractName: string
    contractPhone: string
    demandType: string
    createTime: string
    type: number
    status: number
  }
}
class Main extends React.Component<Props> {
  handleDate (date: string) {
    const res = date.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/) || []
    if (res.length > 6) {
      return `${res[2]}-${res[3]} ${res[4]}:${res[5]}`
    } else {
      return ''
    }
  }
  render () {
    const data = this.props.data
    return (
      <div
        style={this.props.style}
        className={cx('item', this.props.className)}
      >
        <div className={cx('avatar')}>
          {(data.contractName || '').trim().slice(0, 1)}
        </div>
        <div className={cx('item-right')}>
          <h3>
            {data.contractName}{data.type === 0 ? '（自留）' : ''}
            {
              data.status !== 0 &&
              <div className={cx('tags')}>
                {data.status === 1 ? '已退户' : '已成交'}
              </div>
            } 
          </h3>
          <p className='mt8'>
            {data.contractPhone}
            <span className={cx('time')}>
              {this.handleDate(data.createTime)}
            </span>
          </p>
          <p className='mt8'>
            {data.companyName}
          </p>
          <p className={cx('active', 'mt10')}>
            <span className={cx('active-name')}>新人大礼包</span>
            <span className={cx('active-con')}>一个月免费记账</span>
            <span className={cx('cui-tag')}>催</span>
          </p>
        </div>
      </div>
    )
  }
}
export default Main

