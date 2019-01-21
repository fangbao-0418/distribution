import React from 'react'
import classnames from 'classnames/bind'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
import ValidateCode from './ValidateCode'
import { Toast } from 'antd-mobile'
import CitySelect from 'client/component/form/CitySelect'
import { connect } from 'react-redux'
import actions from 'client/actions'
import * as Services from 'client/utils/service'
import _ from 'lodash'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  registry: RegistryFormProps
}
class Main extends React.Component<Props> {
  payload: RegistryFormProps = {}
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
    console.log(registry, 'render')
    return (
      <div className={cx('registry')}>
        <div className={cx('card')}>
          <div className={cx('title')}>注册账号</div>
          <FormItem
            className='mt23'
            label='账号'
            required
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
              type={showPassWord ? 'text' : 'password'}
              placeholder='重新输入密码'
              value={registry.surePassword}
              onChange={(e) => {
                this.handleForm('surePassword', e.target.value)
              }}
              onBlur={() => {
                if (registry.password !== registry.surePassword) {
                  console.log('两次密码不一致，请重新输入')
                }
              }}
            />
          </FormItem>
          <CitySelect />
          <Button
            className='mt26'
            onClick={() => {
              console.log(this.props.registry)
              const params: RegistryFormProps = _.cloneDeep(this.props.registry)
              params.cityCode = '110000'
              params.cityName = '北京市'
              delete params.surePassword
              Services.registry(params).then((res) => {
                if (res && res.status === 400) {
                  Toast.info(res.message)
                } else {
                  APP.history.push('/registry/success')
                }
              })
            }}
          >
            提交
          </Button>
        </div>
      </div>
    )
  }
}
export default connect((state: State.Props) => {
  return {
    registry: state.form.registry
  }
})(Main)