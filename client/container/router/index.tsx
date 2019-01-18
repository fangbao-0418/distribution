import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserRouter from '../user/router'
import Active from '../activities/bookkeeping'
import City from './city'
class Main extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/city' component={City} />
        <Route path='/bookkeeping' component={Active} />
        <UserRouter />
      </Switch>
    )
  }
}
export default Main
