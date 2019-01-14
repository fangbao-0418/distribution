import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserRouter from '../user/router'
import Active from '../activities/bookkeeping'
class Main extends React.Component {
  render () {
    return (
      <Switch>
        <UserRouter />
        <Route path='/bookkeeping' component={Active} />
      </Switch>
    )
  }
}
export default Main
