import React from 'react'
import Layout from 'client/layout/fix-top'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('../style.module.sass'))
import { connect } from 'react-redux'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
import { Modal } from 'antd-mobile'
import BindNewPhone from './BindNewPhone'
import ValidateCode from 'client/container/user/registry/ValidateCode'
interface Props {
  user: UserProps
}
class Main extends React.Component<Props> {
  state = {
    disabled: true,
    modal: false,
    checkCode: ''
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
    return (
      <Layout
        goBack={() => {
          APP.history.push('/info')
        }}
        title={(
          <span>更换密码</span>
        )}
        contentStyle={{
          padding: 0
        }}
      >
        <div className={cx('phone')}>
          <div className={cx('phone-bg')}></div>
          <div className={cx('cur-phone')}>当前手机号 {this.props.user.phone}</div>
          <div className={cx('tip-phone')}>更换密码前，需验证您的手机号</div>
          <FormItem
            right={(
              <ValidateCode
                mobile={this.props.user.phone}
              />
            )}
          >
            <input
              placeholder='请输入验证码'
              maxLength={6}
              value={this.state.checkCode}
              onChange={(e) => {
                this.setState({
                  checkCode: e.target.value
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
              this.onShowModal()
            }}
          >
            下一步
          </Button>
        </div>
        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={false}
          onClose={this.onClose.bind(this)}
          title='更换密码'
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