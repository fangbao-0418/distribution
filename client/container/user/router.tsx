import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login'
import User from './index'
import AddCustomer from './add-customer'
class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/user' exact component={User} />
        <Route path='/user/addcustomer' component={AddCustomer} />
        <Route path='/login' exact component={Login} />
      </Switch>
    )
  }
}
export default Main
