import React from 'react'
import classnames from 'classnames/bind'
import FormItem from 'client/component/form/FormItem'
import Checkbox from 'client/component/form/checkbox'
import Button from 'client/component/button'
import ValidateCode from 'client/container/user/registry/ValidateCode'
import * as Services from 'client/utils/service'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  state = {
    showPassWord: false,
    showAccount: true,
    /** 账号 */
    account: '',
    /** 密码 */
    password: '',
    /** 验证码 */
    code: '',
    /** 记住密码 */
    remberPassword: false
  }
  public componentDidMount () {
    this.setState({
      account: APP.Cookies.get('account') || '',
      password: APP.Cookies.get('password') || '',
      remberPassword: APP.Cookies.get('account') && APP.Cookies.get('password') ? true : false
    })
    if (APP.token) {
      APP.history.push('/user')
    }
  }
  render () {
    const { showPassWord, remberPassword, account, showAccount, password, code } = this.state
    console.log(this.state, 'status')
    return (
      <div className={cx('login')}>
        <div className={cx('card')}>
          <FormItem
            right={(
              <img
                onClick={() => {
                  this.setState({
                    account: '',
                    password: '',
                    code: ''
                  })
                }}
                hidden={!account}
                src={require('client/assets/icon_dele@3x.png')} width={15.4} height={15.4}
              />
            )}
          >
            <input
              type='text'
              value={account}
              placeholder={showAccount ? '请输入账号' : '请输入手机号'}
              onChange={(e) => {
                this.setState({
                  account: e.target.value
                })
              }}
            />
          </FormItem>
          <FormItem
            right={(
              this.state.showAccount ?
              <div
                // onClick={() => {
                //   this.setState({
                //     showPassWord: !showPassWord
                //   })
                // }}
              >
                {/* {
                  <img
                    className={cx('show-password')}
                    src={showPassWord ?
                      require('client/assets/icon_zanshi@3x.png')
                      :
                      require('client/assets/icon_yican@3x.png')
                    }
                  />
                } */}
              </div> :
              <ValidateCode
                mobile={this.state.account}
              />
            )}
          >
            <input
              type={(!showAccount || showPassWord) ? 'text' : 'password'}
              placeholder={this.state.showAccount ? '请输入密码' : '请输入验证码'}
              maxLength={!showAccount ? 6 : undefined}
              value={showAccount ? password : code}
              onChange={(e) => {
                this.setState({
                  [showAccount ? 'password' : 'code']: e.target.value
                })
              }}
            />
          </FormItem>
          {showAccount && <div className='mt10'>
            <span
              onClick={() => {
                this.setState({
                  remberPassword: !remberPassword
                })
              }}
            >
              <Checkbox
                className={cx('checkout-box')}
                checked={remberPassword}
              />
              <span className={cx('rember-password')}>记住密码</span>
            </span>
          </div>}
          <Button
            className='mt26'
            onClick={() => {
              if (showAccount) {
                const params = {
                  phone: account,
                  password: password
                }
                Services.loginAccount(params).then((res) => {
                  if (res.status === 200) {
                    if (remberPassword) {
                      APP.Cookies.set('account', account, {
                        expires: 100000
                      })
                      APP.Cookies.set('password', password, {
                        expires: 100000
                      })
                    } else {
                      APP.Cookies.set('account', account, {
                        expires: -1
                      })
                      APP.Cookies.set('password', password, {
                        expires: -1
                      })
                    }
                    APP.history.push('/user')
                  } else {
                    APP.toast(res.message)
                  }
                })
              } else {
                const params = {
                  phone: account,
                  checkCode: code
                }
                Services.loginPhone(params).then((res) => {
                  if (res.status === 200) {
                    APP.history.push('/user')
                  } else {
                    APP.toast(res.message)
                  }
                })
              }
            }}
          >
            登录
          </Button>
          <div className={cx('tab')}>
            <div 
              className={cx('con')}
              style={{color: '#2D8EFF'}}
              onClick={() => {
                APP.history.push('/registry')
              }}
            >
              立即注册
            </div>
            <div className={cx('line')}></div>
            <div
              className={cx('con')}
              onClick={() => {
                this.setState({
                  showAccount: !showAccount
                })
              }}
            >
              {
                showAccount ? '短信登录' : '账号密码'
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Main