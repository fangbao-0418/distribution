import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
import { connect } from 'react-redux'
import user from 'client/saga/user';
interface Props {
  user: UserProps
}
class Main extends React.Component<Props> {
  state = {
    showShare: this.props.user.phone ? true : false
  }
  componentWillMount () {
    console.log(this.props.user.phone, '11111')
  }
  render () {
    return (
      <div className={cx('outer')} style={{display: this.state.showShare ? 'block' : 'none'}}>
        <div className={cx('con')}>
          <div className={cx('code')}>
            <div className={cx('share')}></div>
            <img
              // src={require('client/assets/icon_erweima@3x.png')}
              src={this.props.user.qrCodeSmallImageUrl}
            /> 
          </div>
          <div
            className={cx('btn', 'mt30')}
            onClick={() => {
              console.log('11')
              this.setState({
                showShare: false
              })
            }}
          >
            查看活动
          </div>
        </div>
      </div>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    user: common.user
  }
})(Main)