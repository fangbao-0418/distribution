import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  state = {
    showShare: true
  }
  render () {
    return (
      <div className={cx('outer')} style={{display: this.state.showShare ? '' : 'none'}}>
        <div className={cx('box')}></div>
        <div className={cx('con')}>
          <div className={cx('code')}>
            <div className={cx('share')}></div>
            <img
              src={require('client/assets/icon_erweima@3x.png')}
            /> 
          </div>
          <div
            className={cx('btn', 'mt30')}
            onClick={() => {
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
export default Main