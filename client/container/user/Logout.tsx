import React from 'react'
class Main extends React.Component {
  componentWillMount () {
    if (__CLIENT__) {
      APP.token = ''
      APP.history.push('/login')
    }
  }
  render () {
    return (
      <div></div>
    )
  }
}
export default Main