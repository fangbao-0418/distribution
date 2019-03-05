import React from 'react'
import Top from 'client/component/top'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  title?: React.ReactNode
  contentStyle?: React.CSSProperties
  goBack?: () => void
}
class Main extends React.Component<Props> {
  env = APP.getEnv()
  render () {
    return (
      <div
        className={cx('layout')}
      >
        {this.env === 'browser' && <Top
          goBack={this.props.goBack}
          title={this.props.title}
        />}
        <div
          style={this.props.contentStyle}
          className={cx('content')}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Main
