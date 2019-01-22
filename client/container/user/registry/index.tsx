import React from 'react'
import classnames from 'classnames/bind'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
import ValidateCode from './ValidateCode'
import CitySelect from 'client/component/form/CitySelect'
import { connect } from 'react-redux'
import actions from 'client/actions'
import * as Services from 'client/utils/service'
import _ from 'lodash'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  registry: RegistryFormProps
  selectCity: CityProps
}
class Main extends React.Component<Props> {
  payload: RegistryFormProps = this.props.registry
  state = {
    showPassWord: false
  }
  handleForm (field, value) {
    this.payload[field] = value
    APP.dispatch(actions.form.registry(Object.assign({}, this.payload)))
  }
  render () {
    const { showPassWord } = this.state
    const { registry } = this.props
    return (
      <div className={cx('container')}>
        <div className={cx('registry')}>
          <div className={cx('logo')}></div>
          <div className={cx('title')}></div>
          <div className={cx('card')}>
            <div className={cx('title')}>注册账号</div>
            <FormItem
              className='mt23'
              label='账号'
              required
              right={(
                <img
                  onClick={() => {
                    this.handleForm('phone', '')
                  }}
                  hidden={!registry.phone}
                  src={require('client/assets/icon_dele@3x.png')} width='15.4px' height='15.4px'
                />
              )}
            >
              <input
                placeholder='请输入手机号码'
                value={registry.phone}
                onChange={(e) => {
                  this.handleForm('phone', e.target.value)
                }}
              />
            </FormItem>
            <FormItem
              label='验证码'
              required
              right={(
                <ValidateCode
                  mobile={this.payload.phone}
                />
              )}
            >
              <input
                placeholder='请输入6位验证码'
                maxLength={6}
                value={registry.checkCode}
                onChange={(e) => {
                  const value = e.target.value
                  this.handleForm('checkCode', value)
                }}
              />
            </FormItem>
            <FormItem
              label='密码'
              required
              right={(
                <div
                  onClick={() => {
                    this.setState({
                      showPassWord: !showPassWord
                    })
                  }}
                >
                  {
                    <img
                      className={cx('show-password')}
                      src={showPassWord ?
                        require('client/assets/icon_zanshi@3x.png')
                        :
                        require('client/assets/icon_yican@3x.png')
                      }
                    />
                  }
                </div>
              )}
            >
              <input
                maxLength={12}
                type={showPassWord ? 'text' : 'password'}
                placeholder='请输入密码6-12位字符'
                value={registry.password}
                onChange={(e) => {
                  this.handleForm('password', e.target.value)
                }}
              />
            </FormItem>
            <FormItem
              label='确认密码'
              required
            >
              <input
                maxLength={12}
                type={showPassWord ? 'text' : 'password'}
                placeholder='重新输入密码'
                value={registry.surePassword}
                onChange={(e) => {
                  this.handleForm('surePassword', e.target.value)
                }}
                onBlur={() => {
                  if (registry.password !== registry.surePassword) {
                    APP.toast('两次密码不一致，请重新输入')

                  }
                }}
              />
            </FormItem>
            <CitySelect />
            <Button
              className='mt26'
              onClick={() => {
                // APP.history.push('/registry/success')
                if (!registry.phone) {
                  APP.toast('请填写账号')
                  return
                }
                if (!registry.checkCode) {
                  APP.toast('请填写验证码')
                  return
                }
                if (registry.checkCode.length != 6) {
                  APP.toast('请填写验证码')
                  return
                }
                if (!registry.password) {
                  APP.toast('请填写密码')
                  return
                }
                if (registry.password.length < 6) {
                  APP.toast('密码格式不正确')
                  return
                }
                if (!registry.surePassword) {
                  APP.toast('请再次输入密码')
                  return
                }
                if (registry.surePassword !== registry.password) {
                  APP.toast('两次密码不一致，请重新输入')
                  return
                }
                const params: RegistryFormProps = _.cloneDeep(this.props.registry)
                params.cityCode = this.props.selectCity.code
                params.cityName = this.props.selectCity.name
                delete params.surePassword
                Services.registry(params).then((res) => {
                  if (res.status !== 200) {
                    APP.toast(res.message)
                  } else {
                    APP.token = res.data.token
                    APP.history.push('/registry/success')
                  }
                })
              }}
            >
              提交
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(({common, form}: State.Props) => {
  return {
    selectCity: common.selectCity,
    registry: form.registry
  }
})(Main)