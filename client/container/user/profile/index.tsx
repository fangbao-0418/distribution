import React from 'react'
import classnames from 'classnames/bind'
import { connect } from 'react-redux'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  onClose?: () => void
  user: UserProps
  imgOnLoaded?: () => void
}
class Main extends React.Component<Props> {
  render () {
    const { user } = this.props
    return (
      <div className={cx('bg')} onClick={() => { this.props.onClose()}}>
        <img
          onLoad={() => {
            if (this.props.imgOnLoaded) {
              this.props.imgOnLoaded()
            }
          }}
          src={user.qrCodeImageUrl}
        />
      </div>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    user: common.user
  }
})(Main)