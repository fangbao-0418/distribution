import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
import Layout from 'client/layout/fix-top'
import Sort from './Sort'
import { connect } from 'react-redux'
import actions from 'client/actions'
class Main extends React.Component<State.Common> {
  render () {
    return (
      <Layout
        title='城市选择'
      >
        <div className={cx('city')}>
          <div className={cx('search', 'mt18 mb30')}>
            <div className={cx('search-text')}>
              <input
                placeholder='搜索'
                onChange={(e) => {
                  APP.dispatch(actions.city.filter({
                    text: e.target.value,
                    sourceCities: this.props.sourceCities
                  }))
                }}
              />
            </div>
          </div>
          <p className={cx('title')}>
            选择所在城市
          </p>
          {
            this.props.sourceCities.length > 0 && this.props.cities.length === 0 && <div className='font14 mt10'>抱歉，未找到相关位置，可以试修改后重试</div>
          }
          <Sort />
        </div>
      </Layout>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    sourceCities: common.sourceCities,
    cities: common.cities
  }
})(Main)

