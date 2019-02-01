import React from 'react'
import classnames from 'classnames/bind'
import FormItem from 'client/component/form/FormItem'
import * as Services from 'client/utils/service'
const cx = classnames.bind(require('./style.module.sass'))
import { withRouter, RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from 'client/actions'
interface Props extends RouteComponentProps {
  selectCity: CityProps
}
class Main extends React.Component<Props> {
  state = {
    phone: '',
    haveReceived: false
  }
  componentWillMount () {
    if (__CLIENT__) {
      APP.dispatch(actions.city.fetchLocation())
    }
  }
  getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
  } 
  render () {
    const { phone } = this.state
    return (
      <div className={cx('activity')}>
        <img src={require('client/assets/activity-bg2.png')}>
        </img>
        <div className={cx('con')}>
          <div className={cx('form-card')}>
            <FormItem
              className={cx('item')}
            >
              <input
                maxLength={11}
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
              if (this.state.haveReceived) {
                return
              }
              if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.state.phone)) {
                APP.toast('手机号格式不正确')
                return
              }
              const params = {
                distributorPhone: this.getQueryString('u'),
                contactPhone: this.state.phone,
                cityCode: this.props.selectCity.code,
                cityName: this.props.selectCity.name
              }
              Services.addCustomerbyGift(params).then((res) => {
                if (res.status === 200) {
                  APP.toast('已为您安排专业顾问，会尽快与您联系', 3)
                  this.setState({
                    haveReceived: true
                  })
                } else {
                  APP.toast(res.message)
                }
              })
            }}
          >
            {this.state.haveReceived ? '已领取' : '点击领取'}
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  ({common}: State.Props) => {
    return {
      selectCity: common.selectCity
    }
  }
)(withRouter(Main))