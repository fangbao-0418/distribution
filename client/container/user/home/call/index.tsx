import React from 'react'
import Layout from 'client/layout/fix-top'
import FormItem from 'client/component/form/FormItem'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  render () {
    return (
      <Layout
        goBack={() => {
          APP.history.push('/user')
        }}
        title={(
          <span>联系客服</span>
        )}
        contentStyle={{
          padding: 0
        }}
      >
        <div className={cx('con')}>
          <FormItem
            className={cx('con-label')}
            label='联系电话'
            right={(
              <a
                className={cx('color')}
                href='tel:4001070110'
              >
                400-107-0110
              </a>
            )}
            noForm={true}
          >
          </FormItem>
        </div>
      </Layout>
    )
  }
}
export default Main