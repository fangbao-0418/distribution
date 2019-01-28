import React from 'react'
import classnames from 'classnames/bind'
import FormItem from 'client/component/form/FormItem'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  state = {
    phone: ''
  }
  render () {
    const { phone } = this.state
    return (
      <div className={cx('activity')}>
        <div className={cx('con')}></div>
        <div className={cx('form-card')}>
          <FormItem
            className={cx('item')}
          >
            <input
              type='text'
              value={phone}
              placeholder='请输入手机号码'
              onChange={(e) => {
                this.setState({
                  phone: e.target.value
                })
              }}
            />
          </FormItem>
        </div>
        <div 
          className={cx('btn')}
          onClick={() => {
            if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.state.phone)) {
              APP.toast('手机号格式不正确')
              return
            }
          }}
        >
          点击领取
        </div>
      </div>
    )
  }
}
export default Main