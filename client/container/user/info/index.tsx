import React from 'react'
import Layout from 'client/layout/fix-top'
import FormItem from 'client/component/form/FormItem'
import { connect } from 'react-redux'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
import actions from 'client/actions'
interface Props {
  user: UserProps
  selectCity: CityProps
}
class Main extends React.Component<Props> {
  componentWillMount () {
    if (__CLIENT__) {
      if (!this.props.selectCity.code) {
        APP.dispatch(actions.city.fetchLocation())
      }
    }
  }
  selectCity () {
    APP.history.push('/city')
  }
  render () {
    return (
      <Layout
        goBack={() => {
          APP.history.push('/user')
        }}
        title={(
          <span>账号设置</span>
        )}
        contentStyle={{
          padding: 0
        }}
      >
        <div className={cx('con')}>
          <FormItem
            className={cx('con-label')}
            label='用户名'
            right={(
              <span className={cx('color9')}>{this.props.user.username}</span>
            )}
            noForm={true}
          >
          </FormItem>
          <FormItem
            className={cx('con-label')}
            label='账号'
            right={(
              <span onClick={() => {APP.history.push('/info/phone')}}>
                <span className={cx('color9', 'mr15')}>{this.props.user.phone}</span>
                <img
                  src={require('client/assets/icon_huileft@3x.png')} width='5px' height='9px'
                />
              </span>
            )}
            noForm={true}
          >
          </FormItem>
          <FormItem
            className={cx('con-label')}
            label='登录密码'
            right={(
              <span onClick={() => {APP.history.push('/info/password')}}>
                <span className={cx('color9', 'mr15')}>修改</span>
                <img
                  src={require('client/assets/icon_huileft@3x.png')} width='5px' height='9px'
                />
              </span>
            )}
            noForm={true}
          >
          </FormItem>
          <FormItem
            className={cx('con-label')}
            label='地区'
            right={(
              <span onClick={this.selectCity.bind(this)}>
                <span className={cx('color9', 'mr15')}>{this.props.selectCity.name}</span>
                <img
                  src={require('client/assets/icon_huileft@3x.png')} width='5px' height='9px'
                />
              </span>
            )}
            noForm={true}
          >
          </FormItem>
        </div>
      </Layout>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    user: common.user,
    selectCity: common.selectCity
  }
})(Main)