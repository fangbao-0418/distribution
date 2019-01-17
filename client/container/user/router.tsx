import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login'
import Registry from './registry'
import User from './index'
import AddCustomer from './add-customer'
import RegistrySuccess from './registry/RegistrySuccess'
class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/user' exact component={User} />
        <Route path='/user/addcustomer' component={AddCustomer} />
        <Route path='/login' exact component={Login} />
        <Route path='/registry' exact component={Registry} />
        <Route path='/registry/success' exact component={RegistrySuccess} />
      </Switch>
    )
  }
}
export default Main
