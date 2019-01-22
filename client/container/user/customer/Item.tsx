import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
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
    console.log(data, 'data')
    return (
      <div className={cx('item')}>
        <div className={cx('avatar')}>
          {data.contractName.slice(0, 1)}
        </div>
        <div className={cx('item-right')}>
          <h3>
            {data.contractName}{data.type === 0 ? '（自留）' : ''}
            <span>
              {this.handleDate(data.createTime)}
            </span>
          </h3>
          <p className='mt8'>{data.contractPhone}</p>
          <p className='mt8'>
            {data.companyName}
            {
              data.status !== 0 &&
              <div className={cx('tags')}>
                {data.status === 1 ? '已退户' : '已成交'}
              </div>
            } 
          </p>
        </div>
      </div>
    )
  }
}
export default Main

