import React from 'react'
import FormItem from 'client/component/form/FormItem'
import ValidateCode from 'client/container/user/registry/ValidateCode'
import Button from 'client/component/button'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('../style.module.sass'))
interface Props {
  goInfo?: () => void
}
class Main extends React.Component<Props> {
  state = {
    phone: '',
    checkCode: ''
  }
  render () {
    const { phone, checkCode } = this.state
    return (
      <div>
        <FormItem
          // right={(
          //   <img
          //     onClick={() => {
          //       this.setState({
          //         phone: ''
          //       })
          //     }}
          //     hidden={!phone}
          //     src={require('client/assets/icon_dele@3x.png')} width='15.4px' height='15.4px'
          //   />
          // )}
        >
          <input
            maxLength={11}
            placeholder='请输入新手机号码'
            value={phone}
            onChange={(e) => {
              this.setState({
                phone: e.target.value
              })
            }}
            onBlur={(e) => {
              if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(e.target.value)) {
                APP.toast('手机号格式不正确')
              }
            }}
          />
        </FormItem>
        <FormItem
          right={(
            <ValidateCode
              mobile={phone}
            />
          )}
        >
          <input
            placeholder='请输入验证码'
            maxLength={6}
            value={checkCode}
            onChange={(e) => {
              this.setState({
                checkCode: e.target.value
              })
            }}
          />
        </FormItem>
        <Button
          className='mt30'
          onClick={() => {
            console.log(phone, checkCode)
            this.props.goInfo()
          }}
        >
          确定更换
        </Button>
        <div className={cx('tip')}>
          说明：更换手机号，账号一同变更，再次登录请用新手机号登录
        </div>
      </div>
    )
  }
}
export default Main