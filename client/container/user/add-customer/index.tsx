import React from 'react'
import Layout from 'client/layout/fix-top'
import Form from './Form'
class Main extends React.Component {
  render () {
    return (
      <Layout title='新增客户'>
        <Form />
      </Layout>
    )
  }
}
export default Main
