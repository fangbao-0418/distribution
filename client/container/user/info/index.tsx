import React from 'react'
import Layout from 'client/layout/fix-top'
import FormItem from 'client/component/form/FormItem'
import { connect } from 'react-redux'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
import Button from 'client/component/button'
import actions from 'client/actions'
import * as Services from 'client/utils/service'
interface Props {
  user: UserProps
  selectCity: CityProps
}
class Main extends React.Component<Props> {
  componentWillMount () {
    if (this.props.selectCity.code && this.props.selectCity.code !== this.props.user.cityCode) { // 修改地区
      const params = {
        cityCode: this.props.selectCity.code,
        cityName: this.props.selectCity.name
      }
      Services.updataInfo(this.props.user.phone, params).then((res) => {
        if (res.status === 200) { // 需要更新用户信息
          APP.toast('地区修改成功')
          APP.dispatch(actions.user.fetch())
        } else {
          APP.toast(res.message)
        }
      })
    }
    console.log(this.props.selectCity.code, 'code')
  }
  selectCity () {
    APP.history.push('/city')
    console.log(this.props.selectCity.code, this.props.selectCity.name)
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
                <span className={cx('color9', 'mr15')}>{this.props.user.cityName}</span>
                <img
                  src={require('client/assets/icon_huileft@3x.png')} width='5px' height='9px'
                />
              </span>
            )}
            noForm={true}
          >
          </FormItem>
          <Button
            className={cx('mt50')}
            onClick={() => {
              APP.history.push('/logout')
            }}
          >
            退出账号
          </Button>
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