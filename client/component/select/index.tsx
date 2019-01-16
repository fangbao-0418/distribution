import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  clicked?: boolean
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}
class Main extends React.Component<Props> {
  state = {
    clicked: false
  }
  componentWillReceiveProps (props) {
    this.setState({
      clicked: props.clicked
    })
  }
  render () {
    const { clicked } = this.state 
    console.log(clicked, 'clicked')
    return (
      <span
        style={this.props.style}
        className={cx('select', {
          clicked: clicked
        }, this.props.className)}
        onClick={() => {
          this.setState({
            clicked: !clicked
          })
          if (this.props.onClick) {
            this.props.onClick()
          }
        }}
      >
        <span>{this.props.children}</span>
        <span className={cx('icon')}></span>
      </span>
    )
  }
}
export default Main

