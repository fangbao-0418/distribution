import React from 'react'
import classnames from 'classnames/bind'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
import { Toast } from 'antd-mobile'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  state = {
    showPassWord: false
  }
  render () {
    const { showPassWord } = this.state
    return (
      <div className={cx('login')}>
        <div className={cx('card')}>
          <FormItem>
            <input placeholder='请输入账户'/>
          </FormItem>
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
              type={showPassWord ? 'text' : 'password'}
              placeholder='请输入密码'
            />
          </FormItem>
          <Button
            className='mt26'
            onClick={() => {
              // Toast.info('xxx')
            }}
          >
            登陆
          </Button>
        </div>
      </div>
    )
  }
}
export default Main