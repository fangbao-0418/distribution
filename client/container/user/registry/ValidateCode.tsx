import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  state = {
    validateCode: true,
    count: 60
  }
  public render () {
    return (
      <div
        onClick={() => {
          if (!this.state.validateCode) {
            return
          }
          this.setState({
            validateCode: false
          })
          const timeStop = setInterval(() => {
            this.setState({
              count: this.state.count - 1
            })
            if (this.state.count < 0) {
              this.setState({
                validateCode: true,
                count: 60
              })
              clearInterval(timeStop)
            }
          }, 1000)
        }}
      >
        {
          this.state.validateCode ?
          <span className={cx('validate-code')}>获取验证码</span> :
          <span className={cx('count-down')}>{this.state.count} s</span>
        }
      </div>
    )
  }
}
export default Main