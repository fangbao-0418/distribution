import { hot } from 'react-hot-loader';
import React from 'react'
import Router from './router'
import { withRouter, RouteComponentProps } from 'react-router'
import { ActivityIndicator }  from 'antd-mobile'
import { connect } from 'react-redux'
interface Props extends RouteComponentProps {
  loading: boolean
}
class Main extends React.Component<Props> {
  componentWillMount () {
    if (__CLIENT__) {
      APP.history = this.props.history
    }
  }
  render () {
    return (
      <div style={{height: '100%'}}>
        <Router />
        <ActivityIndicator
          animating={this.props.loading}
          toast={true}
          text="正在加载"
        />
      </div>
    )
  }
}
export default hot(module)(
  withRouter(connect(({common}: State.Props) => {
    return {
      loading: common.loading
    }
  })(Main))
)
