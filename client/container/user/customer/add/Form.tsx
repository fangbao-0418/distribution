import React from 'react'
import { createForm } from 'rc-form'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
import { Toast } from 'antd-mobile'
import Select from 'client/component/form/select'
import { connect } from 'react-redux'
import actions from 'client/actions'
import CitySelect from 'client/component/form/CitySelect'
import * as Services from 'client/utils/service'
import _ from 'lodash'
interface Props {
  form: any
  selectCity: CityProps
  customer: CustomerFormProps
}
const companyNature = [{
  label: '小规模',
  value: '1'
}, {
  label: '一般人',
  value: '2'
}]
const needsStatus = [{
  label: '记账服务',
  value: 'AGENT'
}, {
  label: '注册变更',
  value: 'REGISTE_CHANGE'
}, {
  label: '社保个税',
  value: 'TAX'
}, {
  label: '地址服务',
  value: 'ADDRESS_SERVICE'
}]
class Main extends React.Component<Props> {
  payload: CustomerFormProps = {}
  selectCity () {
    APP.history.push('/city')
  }
  handleForm (field, value) {
    this.payload[field] = value
    APP.dispatch(actions.form.customer(Object.assign({}, this.payload)))
  }
  render () {
    const { selectCity, customer } = this.props
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <div>
        <FormItem
          required
          label='联系人'
        >
          <input
            {...getFieldProps('contactPerson')}
            value={customer.contactPerson}
            onChange={(e) => {
              this.handleForm('contactPerson', e.target.value)
            }}
          />
        </FormItem>
        <FormItem
          required
          label='联系电话'
        >
          <input
            {...getFieldProps('contactPhone')}
            value={customer.contactPhone}
            onChange={(e) => {
              this.handleForm('contactPhone', e.target.value)
            }}
          />
        </FormItem>
        <CitySelect />
        <FormItem
          label='公司名称'
        >
          <input
            {...getFieldProps('customerName')}
            value={customer.customerName}
            onChange={(e) => {
              this.handleForm('customerName', e.target.value)
            }}
          />
        </FormItem>
        <FormItem
          style={{
            border: 'none'
          }}
          label='公司性质'
        >
          <Select
            itemClassName='inline-block'
            itemStyle={{
              width: '100px'
            }}
            type='radio'
            option={companyNature}
            value={customer.payTaxesNature}
            onChange={(value) => {
              this.handleForm('payTaxesNature', value)
            }}
          >
          </Select>
        </FormItem>
        <FormItem
          style={{
            lineHeight: '36px',
            border: 'none'
          }}
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
            value={customer.demandType}
            onChange={(value) => {
              this.handleForm('demandType', value)
            }}
          />
        </FormItem>
        <Button
          className='mt40'
          onClick={() => {
            console.log(this.props.customer)
            if (!this.props.customer.contactPerson) {
              Toast.info('请填写联系人')
              return
            }
            if (!this.props.customer.contactPhone) {
              Toast.info('请填写联系人电话')
              return
            }
            const params: any = _.cloneDeep(this.props.customer)
            params.demandType = params.demandType && params.demandType.length > 0 ? params.demandType.join(',') : ''
            params.cityCode = this.props.selectCity.code
            params.cityName = this.props.selectCity.name
            Services.addCustomer(params).then((res) => {
              if (res && res.status === 200) {
                APP.history.push('/user/customer')
              }
            })
            // this.props.form.validateFields((error, value) => {
            //   console.log(error, value) 
            // })
          }}
        >
          提交
        </Button>
      </div>
    )
  }
}
export default connect(
  ({common, form}: State.Props) => {
    return {
      selectCity: common.selectCity,
      customer: form.customer
    }
  }
)(createForm()(Main))
