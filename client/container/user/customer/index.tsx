import React from 'react'
import Layout from 'client/layout/fix-top'
import classnames from 'classnames/bind'
import Button from 'client/component/button'
import Filter from './Filter'
import Search from './Search'
import Item from './Item'
import * as Services from 'client/utils/service'
import { ActivityIndicator } from 'antd-mobile'
const cx = classnames.bind(require('./style.module.sass'))
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() < 10 ? ('-0' + (date.getMonth() + 1)) : (date.getMonth() + 1) + ''
const defaultDate = year + month + '-01'
class Main extends React.Component {
  payload = {
    pageCurrent: 1,
    pageSize: 10,
    status: undefined,
    totalDate: defaultDate,
    key: undefined
  }
  state = {
    loading: false,
    total: 0,
    dataSource: [],
    showBtn: true
  }
  componentDidMount () {
    this.fetchData()
    const scroll: any = this.refs.scroll
    if (scroll) {
      scroll.onscroll = () => {
        const size = this.payload.pageSize
        const maxSize = Math.ceil(this.state.total / size)
        const wrap: any = this.refs.wrap
        const height = scroll.clientHeight
        const wrapHeight = wrap.clientHeight
        const scrollTop = scroll.scrollTop
        if (scrollTop + height > wrapHeight) {
          if (!this.state.loading && maxSize > this.payload.pageCurrent) {
            this.payload.pageCurrent += 1
            this.fetchData()
          }
        }
      }
    }
  }
  fetchData () {
    this.setState({
      loading: true
    })
    const { dataSource } = this.state
    if (__CLIENT__) {
      Services.getCustomerList(this.payload).then((res) => {
        if (res.status === 200) {
          const { records, total } = res.data
          this.setState({
            total,
            dataSource: this.payload.pageCurrent === 1 ? records : dataSource.concat(records)
          })
          this.setState({
            loading: false
          })
        }
      }, () => {
        this.setState({
          loading: false
        })
      })
    }
  }
  render () {
    const { dataSource, total, loading } = this.state
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
              const date = value.date.replace(/(\d{2})\/(\d{4})/, function () {
                return [arguments[2], arguments[1], '01'].join('-')
              })
              this.payload.status = value.customerStatus === '-1' ? undefined :  value.customerStatus 
              this.payload.totalDate = date
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
                setBtnShow={(value) => {
                  this.setState({
                    showBtn: value
                  })
                }}
                onChange={(value) => {
                  console.log('111')
                  this.payload.key = value
                }}
                onSearch={(value) => {
                  this.payload.pageCurrent = 1
                  this.payload.key = value
                  this.fetchData()
                }}
              />
              {
                dataSource.map((item, index) => {
                  return (
                    <Item
                      key={`customer-item-${index}`}
                      data={item}
                    />
                  )
                })
              }
              {<div
                hidden={!loading}
                className={cx('loading')}
              >
                <ActivityIndicator
                  animating={loading}
                  text='载入中...'
                />
              </div>}
            </div>
          </div>
          {
            this.state.showBtn &&
            <div className={cx('bottom')}>
              <Button
                className='ml20 mr20'
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
          }
        </div>
      </Layout>
    )
  }
}
export default Main

