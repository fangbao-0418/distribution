import { hot } from 'react-hot-loader';
import React from 'react'
import Router from './router'
import { withRouter, RouteComponentProps } from 'react-router'
class Main extends React.Component<RouteComponentProps> {
  componentWillMount () {
    if (__CLIENT__) {
      APP.history = this.props.history
    }
  }
  render () {
    return (
      <div style={{height: '100%'}}>
        <Router />
      </div>
    )
  }
}
export default hot(module)(withRouter(Main))
