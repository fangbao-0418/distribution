import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  checked?: boolean
  className?: string
}
class Main extends React.Component<Props> {
  state = {
    checked: false
  }
  render () {
    const { checked } = this.state
    return (
      <span
        className={cx('checkbox', {
          checked
        }, this.props.className)}
        onClick={() => {
          this.setState({
            checked: !checked
          })
        }}
      >
        <i></i>
        <span>{this.props.children}</span>
      </span>
    )
  }
}
export default Main
