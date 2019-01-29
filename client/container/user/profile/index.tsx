import React from 'react'
import classnames from 'classnames/bind'
import { connect } from 'react-redux'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  onClose?: () => void
  user: UserProps
}
class Main extends React.Component<Props> {
  render () {
    const { user } = this.props
    return (
      <div className={cx('bg')} onClick={() => { this.props.onClose()}}>
        <img src={user.qrCodeImageUrl}/>
        <div className={cx('tips')}>长按可下载图片或识别二维码</div>
      </div>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    user: common.user
  }
})(Main)