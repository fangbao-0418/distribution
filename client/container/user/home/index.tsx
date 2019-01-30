import React from 'react'
import classnames from 'classnames/bind'
import QRcode from './QRcode'
import Menu from './menu'
import Profile from '../profile'
import { connect } from 'react-redux'
import { Modal } from 'antd-mobile'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  user: UserProps
}
class Main extends React.Component<Props> {
  state = {
    modal: false
  }
  tips: any
  componentWillUnmount () {
    this.onClose()
  }
  onShowModal (e) {
    if (!this.props.user.qrCodeImageUrl) {
      return APP.toast('暂无个人宣传图片')
    }
    this.tips = document.createElement('div')
    this.tips.innerHTML = `<div class='${cx('tips',)}'>长按可下载图片或识别二维码</div>`
    this.setState({
      modal: true
    }, () => {
      if (document.body.contains(this.tips)) {
        document.body.removeChild(this.tips)
      }
    })
  }
  onClose () {
    if (document.body.contains(this.tips)) {
      document.body.removeChild(this.tips)
    }
    this.setState({
      modal: false
    })
  }
  render () {
    const { user } = this.props
    return (
      <div
        className={cx('container')}
      >
        <div
          className={cx('text-center', 'top')}
        >
          <img
            src={require('client/assets/logo@3x.png')}
          />
        </div>
        <div
          className={cx('profile')}
        >
          <div className={cx('avatar')} />
          <div className={cx('profile-right')}>
            <div
              className='font18'
            >
              {user.phone}
            </div>
            <div>
              <QRcode onShowModal={this.onShowModal.bind(this)}/>
            </div>
          </div>
        </div>
        <Menu />
        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={false}
          onClose={this.onClose.bind(this)}
          title=''
          footer={[]}
        >
          <Profile onClose={this.onClose.bind(this)}/>
        </Modal>
        {/* {
          this.state.modal &&
          <div className={cx('tips')}>长按可下载图片或识别二维码</div>
        } */}
        {/* <div className={cx('tips')}>长按可下载图片或识别二维码</div> */}
      </div>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    user: common.user
  }
})(Main)
