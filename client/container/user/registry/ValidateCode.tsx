import React from 'react'
import classnames from 'classnames/bind'
import * as Services from 'client/utils/service'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  mobile?: string
}
class Main extends React.Component<Props> {
  state = {
    validateCode: true,
    count: 60
  }
  public render () {
    console.log(this.props.mobile, 'mobile')
    return (
      <div
        onClick={() => {
          if (!this.state.validateCode) {
            return
          }
          if (!this.props.mobile) {
            APP.toast('请输入手机号')
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
          Services.getMobileCode(this.props.mobile).then((res) => {
            console.log('发送成功提示')
          })  
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