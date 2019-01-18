import React from 'react'
import { createForm } from 'rc-form'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
import { Toast } from 'antd-mobile'
import Select from 'client/component/form/select'
import { connect } from 'react-redux'
interface Props {
  form: any
  selectCity: CityProps
}
const companyNature = [{
  label: '小规模',
  value: 'samll'
}, {
  label: '一般人',
  value: 'normal'
}]
const needsStatus = [{
  label: '记账服务',
  value: '1'
}, {
  label: '注册变更',
  value: '2'
}, {
  label: '社保个税',
  value: '3'
}, {
  label: '地址服务',
  value: '4'
}]
class Main extends React.Component<Props> {
  selectCity () {
    APP.history.push('/city')
  }
  render () {
    const { selectCity } = this.props
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div>
        <FormItem
          required
          label='联系人'
        >
          <input {...getFieldProps('name')}/>
        </FormItem>
        <FormItem
          required
          label='联系电话'
        >
          <input {...getFieldProps('telphone')}/>
        </FormItem>
        <FormItem
          required
          label='所在城市'
          right={(
            <img
              onClick={this.selectCity.bind(this)}
              src={require('client/assets/icon_left@3x.png')} width='5px' height='9px'
            />
          )}
        >
          <div
            onClick={this.selectCity.bind(this)}
          >
          <img
            style={{
              verticalAlign: 'middle',
              marginRight: '6px'
            }}
            src={require('client/assets/icon_diz@3x.png')} width='12px' height='14.6px'
          />
            {selectCity.name}
          </div>
        </FormItem>
        <FormItem
          style={{
            border: 'none'
          }}
          required
          label='公司性质'
        >
          <Select
            itemClassName='inline-block'
            itemStyle={{
              width: '100px'
            }}
            type='radio'
            option={companyNature}
          >
          </Select>
        </FormItem>
        <FormItem
          style={{
            lineHeight: '36px',
            border: 'none'
          }}
          required
          label='需求状态'
        >
          <Select
            flex={2}
            itemClassName='inline-block'
            itemStyle={{
              width: '100px'
            }}
            type='checkbox'
            option={needsStatus}
          />
        </FormItem>
        <Button
          className='mt40'
          onClick={() => {
            console.log('res')
            Toast.info('xxxx')
            this.props.form.validateFields((error, value) => {
              console.log(error, value)
            })
          }}
        >
          提交
        </Button>
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
)(createForm()(Main))
