import React from 'react'
import Layout from 'client/layout/fix-top'
import classnames from 'classnames/bind'
import Button from 'client/component/button'
import Filter from './Filter'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  render () {
    return (
      <Layout
        title='客户列表' 
      >
        <div className={cx('container')}>
          <Filter />
          <div className={cx('scroll')}>
          </div>
          <div className={cx('bottom')}>
            <Button
              size='small'
              style={{
                marginTop: '12.5px'
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

