import React from 'react'
import Layout from 'client/layout/fix-top'
import classnames from 'classnames/bind'
import Button from 'client/component/button'
import Filter from './Filter'
import Search from './Search'
import Item from './Item'
import * as Services from 'client/utils/service'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  loading = false
  payload = {
    pageCurrent: 1,
    pageSize: 10,
    status: undefined,
    totalDate: undefined,
    key: undefined
  }
  state = {
    total: 0,
    dataSource: []
  }
  componentWillMount () {
    if (__CLIENT__) {
      this.fetchData()
    }
  }
  componentDidMount () {
    console.dir(this.refs.scroll, 'scroll')
    const scroll: any = this.refs.scroll
    scroll.onscroll = () => {
      const size = this.payload.pageSize
      const maxSize = Math.ceil(this.state.total / size)
      const wrap: any = this.refs.wrap
      const height = scroll.clientHeight
      const wrapHeight = wrap.clientHeight
      const scrollTop = scroll.scrollTop
      if (scrollTop + height > wrapHeight) {
        if (!this.loading && maxSize > this.payload.pageCurrent) {
          this.payload.pageCurrent += 1
          this.fetchData()
        }
      }
    }
  }
  fetchData () {
    console.log('fetch data')
    this.loading = true
    const { dataSource } = this.state
    if (__CLIENT__) {
      Services.getCustomerList(this.payload).then((res) => {
        if (res.status === 200) {
          const { records, total } = res.data
          this.setState({
            total,
            dataSource: this.payload.pageCurrent === 1 ? records : dataSource.concat(records)
          })
          this.loading = false
        }
      })
    }
  }
  render () {
    const { dataSource, total } = this.state
    return (
      <Layout
        goBack={() => {
          APP.history.push('/user')
        }}
        title={(
          <img src={require('client/assets/logo@3x.png')} width='77px' height='27px' />
        )}
        contentStyle={{
          padding: 0
        }}
      >
        <div className={cx('container')}>
          <Filter
            total={total}
            onChange={(value) => {
              console.log(value, '111')
              this.payload.status = value.customerStatus === '-1' ? undefined :  value.customerStatus 
              this.payload.totalDate = value.date ? (value.date + '-01') : ''
              this.payload.pageCurrent = 1
              this.fetchData()
            }}
          />
          <div
            ref='scroll'
            className={cx('scroll')}
          >
            <div ref='wrap'>
              <Search
                className='mt10 mb15'
                onSearch={(value) => {
                  this.payload.pageCurrent = 1
                  this.payload.key = value
                  this.fetchData()
                }}
              />
              {
                dataSource.map((item) => {
                  return (
                    <Item data={item} />
                  )
                })
              }
            </div>
          </div>
          <div className={cx('bottom')}>
            <Button
              size='small'
              style={{
                marginTop: '12.5px'
              }}
              onClick={() => {
                APP.history.push('/user/customer/add')
              }}
            >
              新增客户
            </Button>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Main

