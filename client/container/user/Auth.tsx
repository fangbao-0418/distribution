import React from 'react'
import { Switch } from 'react-router-dom'
import actions from 'client/actions'
class Main extends React.Component {
  componentWillMount () {
    if (__CLIENT__) {
      console.log('auth2')
      APP.dispatch(actions.user.fetch())
    }
  }
  render () {
    return (
      <Switch>
        {this.props.children}
      </Switch>
    )
  }
}
export default Main
