import React from 'react'
import Layout from 'client/layout/fix-top'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('../style.module.sass'))
import { connect } from 'react-redux'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
import { Modal } from 'antd-mobile'
import BindNewPhone from './BindNewPhone'
interface Props {
  user: UserProps
}
class Main extends React.Component<Props> {
  state = {
    showPassWord: false,
    password: '',
    disabled: true,
    modal: false
  }
  onShowModal () {
    this.setState({
      modal: true
    })
  }
  onClose () {
    this.setState({
      modal: false
    })
  }
  goInfo () {
    this.setState({
      modal: false
    }, () => {
      APP.history.push('/info')
    })
  }
  render () {
    const { showPassWord, password } = this.state
    return (
      <Layout
        goBack={() => {
          APP.history.push('/info')
        }}
        title={(
          <span>更换手机号</span>
        )}
        contentStyle={{
          padding: 0
        }}
      >
        <div className={cx('phone')}>
          <div className={cx('phone-bg')}></div>
          <div className={cx('cur-phone')}>当前手机号 {this.props.user.phone}</div>
          <div className={cx('tip-phone')}>更换手机号前，需验证您的登录密码</div>
          <FormItem
            noForm={true}
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
              placeholder='请输入密码'
              value={password}
              onChange={(e) => {
                this.setState({
                  password: e.target.value
                })
                if (e.target.value) {
                  this.setState({
                    disabled: false
                  })
                } else {
                  this.setState({
                    disabled: true
                  })
                }
              }}
            />
          </FormItem>
          <Button
            className={cx('mt40')}
            disabled={this.state.disabled}
            onClick={() => {
              console.log(this.state.password)
              this.onShowModal()
            }}
          >
            更换手机号
          </Button>
        </div>
        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={false}
          onClose={this.onClose.bind(this)}
          title='新手机号'
          footer={[]}
        >
          <BindNewPhone goInfo={this.goInfo.bind(this)}/>
        </Modal>
      </Layout>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    user: common.user
  }
})(Main)