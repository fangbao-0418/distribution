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
  payload = {
    pageCurrent: 1,
    pageSize: 20
  }
  state = {
    dataSource: []
  }
  componentWillMount () {
    if (__CLIENT__) {
      this.fetchData()
    }
  }
  fetchData () {
    const { dataSource } = this.state
    if (__CLIENT__) {
      Services.getCustomerList(this.payload).then((res) => {
        if (res.status === 200) {
          const { records, total } = res.data
          this.setState({
            dataSource: dataSource.concat(records)
          })
        }
      })
    }
  }
  render () {
    const { dataSource } = this.state
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
          <Filter />
          <div className={cx('scroll')}>
            <Search className='mt10 mb15'/>
            {
              dataSource.map((item) => {
                return (
                  <Item data={item} />
                )
              })
            }
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

