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
  componentWillReceiveProps (props: Props) {
    this.setState({
      checked: props.checked
    })
  }
  render () {
    const { checked } = this.state
    console.log(checked, 'checked')
    return (
      <span
        className={cx('checkbox', {
          checked
        }, this.props.className)}
        onClick={() => {
          this.setState({
            checked: !checked
          })
          if (this.props.onClick) {
            this.props.onClick(!checked)
          }
        }}
      >
        <i></i>
        <span>{this.props.children}</span>
      </span>
    )
  }
}
export default Main
