import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login'
import Registry from './registry'
import User from './index'
import AddCustomer from './add-customer'
import Customer from './customer'
class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/user' exact component={User} />
        <Route path='/user/addcustomer' component={AddCustomer} />
        <Route path='/user/customer' component={Customer} />
        <Route path='/login' exact component={Login} />
        <Route path='/registry' exact component={Registry} />
      </Switch>
    )
  }
}
export default Main
