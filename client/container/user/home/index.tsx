import React from 'react'
import classnames from 'classnames/bind'
import QRcode from './QRcode'
import Menu from './menu'
import MyActive from './my-active'
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
  onShowModal () {
    if (!this.props.user.qrCodeImageUrl) {
      return APP.toast('暂无个人宣传图片')
    }
    this.tips = document.createElement('div')
    this.tips.innerHTML = `<div class='${cx('tips',)}'>长按可下载图片或识别二维码</div>`
    this.setState({
      modal: true
    }, () => {
      document.body.append(this.tips)
      setTimeout(() => {
        if (document.body.contains(this.tips)) {
          document.body.removeChild(this.tips)
        }
      }, 2500)
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
          onClick={() => {
            console.log('111')
            APP.history.push('/info')
          }}
        >
          <div className={cx('avatar')} />
          <div className={cx('profile-right')}>
            <div
              className='font18'
            >
              {user.username}
            </div>
            <div className={cx('phone', 'mt10')}>
              <span>{user.phone}</span>
              <span className={cx('right')}></span>
              {/* <QRcode onShowModal={this.onShowModal.bind(this)}/> */}
            </div>
          </div>
        </div>
        <div className={cx('code')}
          onClick={() => {
            this.onShowModal()
          }}
        >
          <img
            className={cx('qr-code')}
            src={require('client/assets/icon_erweima@3x.png')}
          />
          <span className={cx('ml26')}>分享</span>
        </div>
        <Menu />
        <div
          className={cx('advertisement')}
          onClick={() => {
            APP.history.push(`/gift?u=${this.props.user.phone}`)
          }}
        >
          <i className={cx('yaoqing')}>立即邀请</i>
        </div>
        <MyActive
          onClick={() => {
            APP.history.push(`/gift?u=${this.props.user.phone}`)
          }}
        />
        <Modal
          className={cx('cover')}
          visible={this.state.modal}
          transparent
          maskClosable={false}
          onClose={this.onClose.bind(this)}
          title=''
          footer={[]}
          wrapClassName={cx('profile-wrap')}
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
