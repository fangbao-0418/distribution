import React from 'react'
import { createForm } from 'rc-form'
import FormItem from 'client/component/form/FormItem'
import Button from 'client/component/button'
import { Toast } from 'antd-mobile'
interface Props {
  form: any
}
class Main extends React.Component<Props> {
  render () {
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
        <Button
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
export default createForm()(Main)
