import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  title?: string
}
class Main extends React.Component<Props> {
  render () {
    return (
      <div className={cx('tips')}>{this.props.title}</div>
    )
  }
}
export default Main
