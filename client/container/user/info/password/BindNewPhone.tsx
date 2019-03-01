import React from 'react'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('../style.module.sass'))
interface Props {
  goInfo?: () => void
}
class Main extends React.Component<Props> {
  state = {
    showPassWord: false,
    password: '',
    surePassword: ''
  }
  render () {
    const { showPassWord, password, surePassword } = this.state
    return (
      <div>
        <FormItem
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
            placeholder='请输入新密码'
            value={password}
            onChange={(e) => {
              this.setState({
                password: e.target.value
              })
            }}
          />
        </FormItem>
        <FormItem
        >
          <input
            maxLength={12}
            type={showPassWord ? 'text' : 'password'}
            placeholder='请再次确认密码'
            value={surePassword}
            onChange={(e) => {
              this.setState({
                surePassword: e.target.value
              })
            }}
          />
        </FormItem>
        <Button
          className='mt30'
          onClick={() => {
            if (password !== surePassword) {
              APP.toast('两次密码不一致，请重新输入')
              return
            }
            this.props.goInfo()
          }}
        >
          确定提交
        </Button>
      </div>
    )
  }
}
export default Main