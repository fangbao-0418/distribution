import React from 'react'
import { Switch } from 'react-router-dom'
class Main extends React.Component {
  render () {
    return (
      <Switch>
        {this.props.children}
      </Switch>
    )
  }
}
export default Main
