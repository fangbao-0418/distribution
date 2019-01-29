import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login'
import Registry from './registry'
import User from './index'
import Customer from './customer'
import CustomerAdd from './customer/add'
import RegistrySuccess from './registry/RegistrySuccess'
import Profile from './profile'
import Auth from './Auth'
import Logout from './Logout'
import Gift from '../activities/gift'
class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/registry' exact component={Registry} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/gift' component={Gift} />
        <Auth>
          <Route path='/user' exact component={User} />
          <Route path='/user/customer' exact component={Customer} />
          <Route path='/user/customer/add' component={CustomerAdd} />
          <Route path='/registry/success' exact component={RegistrySuccess} />
        </Auth>
      </Switch>
    )
  }
}
export default Main
