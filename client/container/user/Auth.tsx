import React from 'react'
import { Switch } from 'react-router-dom'
import actions from 'client/actions'
import { connect } from 'react-redux'
interface Props {
  user: UserProps
}
class Main extends React.Component<Props> {
  componentWillMount () {
    if (__CLIENT__) {
      if (!APP.token) {
        APP.history.push('/login')
      }
      APP.dispatch(actions.user.fetch())
    }
  }
  render () {
    if (!this.props.user.phone) {
      return null
    }
    return (
      <Switch>
        {this.props.children}
      </Switch>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    user: common.user
  }
})(Main)
