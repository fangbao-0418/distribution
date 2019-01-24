import React from 'react'
import { createForm } from 'rc-form'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
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
  value: '记账服务'
}, {
  label: '注册变更',
  value: '注册变更'
}, {
  label: '社保个税',
  value: '社保个税'
}, {
  label: '地址服务',
  value: '地址服务'
}]
class Main extends React.Component<Props> {
  payload: CustomerFormProps = this.props.customer
  selectCity () {
    APP.history.push('/city')
  }
  handleForm (field, value) {
    this.payload[field] = value
    APP.dispatch(actions.form.customer(Object.assign({}, this.props.customer, this.payload)))
  }
  render () {
    const { selectCity, customer } = this.props
    const { getFieldProps } = this.props.form
    const validatePhone = (rule: any, value: any, callback: any) => {
      if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value)) {
        callback('手机号码格式不正确')
        return
      }
      callback()
    }
    return (
      <div>
        <FormItem
          required
          label='联系人'
        >
          <input
            {...getFieldProps('contactPerson', {
              initialValue: customer.contactPerson,
              rules: [
                {
                  required: true,
                  message: '联系人不能为空'
                }
              ]
            })}
          />
        </FormItem>
        <FormItem
          required
          label='联系电话'
        >
          <input
            {...getFieldProps('contactPhone', {
              initialValue: customer.contactPhone,
              rules: [
                {
                  required: true,
                  message: '联系电话不能为空'
                },
                {
                  validator: validatePhone
                }
              ]
            })}
          />
        </FormItem>
        <CitySelect />
        <FormItem
          label='公司名称'
        >
          <input
            {...getFieldProps('companyName', {
              initialValue: customer.companyName
            })}
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
            this.props.form.validateFields((errors: any, values) => {
              if (errors) {
                let message = ''
                try {
                  if (Object.values(errors)[0]) {
                    const errs: any = Object.values(errors)[0] || {}
                    message = errs.errors[0].message
                  }  
                } catch (e) {
                }
                APP.toast(message)
                return
              }
              console.log(values, 'validate')
              const params = values
              params.demandType = (customer.demandType || []).join(',') || ''
              params.cityCode = selectCity.code
              params.cityName = selectCity.name
              Services.addCustomer(params).then((res) => {
                if (res.status === 200) {
                  APP.dispatch(actions.form.customer({}))
                  APP.history.push('/user/customer')
                } else {
                  APP.toast(res.message)
                }
              })
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
  ({common, form}: State.Props) => {
    return {
      selectCity: common.selectCity,
      customer: form.customer
    }
  }
)(createForm({
  onFieldsChange: (props, fields) => {
    console.log(props, 'props')
    const key = Object.keys(fields)[0]
    if (key) {
      APP.dispatch(actions.form.customer(Object.assign(props.customer, {
        [key]: fields[key].value
      })))
    }
  }
})(Main))
