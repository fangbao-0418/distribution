import React from 'react'
import classnames from 'classnames/bind'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
import ValidateCode from 'client/container/user/registry/ValidateCode'
import { Toast } from 'antd-mobile'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  state = {
    showPassWord: false,
    showAccount: true
  }
  render () {
    const { showPassWord } = this.state
    return (
      <div className={cx('login')}>
        <div className={cx('card')}>
          <FormItem>
            <input
              placeholder={this.state.showAccount ? '请输入账号' : '请输入手机号'}
            />
          </FormItem>
          <FormItem
            right={(
              this.state.showAccount ?
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
              </div> :
              <ValidateCode/>
            )}
          >
            <input
              type={showPassWord ? 'text' : 'password'}
              placeholder={this.state.showAccount ? '请输入密码' : '请输入验证码'}
            />
          </FormItem>
          <Button
            className='mt26'
            onClick={() => {
              // Toast.info('xxx')
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
                  showAccount: !this.state.showAccount
                })
              }}
            >
              {
                this.state.showAccount ? '短信登录' : '账号密码'
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Main