import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  checked?: boolean
  className?: string
  onClick?: (val) => void
}
class Main extends React.Component<Props> {
  state = {
    checked: this.props.checked
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
          this.props.onClick(!checked)
        }}
      >
        <i></i>
        <span>{this.props.children}</span>
      </span>
    )
  }
}
export default Main
