import React from 'react'
import Top from 'client/component/top'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  title: React.ReactNode
}
class Main extends React.Component<Props> {
  render () {
    return (
      <div
        className={cx('layout')}
      >
        <Top
          title={this.props.title}
        />
        <div className={cx('content')}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Main
