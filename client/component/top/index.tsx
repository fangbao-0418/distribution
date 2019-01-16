import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  title?: React.ReactNode
  goBack?: () => void
}
class Main extends React.Component<Props> {
  render () {
    return (
      <div
        className={cx('top')}
      >
        <div className={cx('left')}>
          <div
            className={cx('goback')}
            onClick={() => {
              if (this.props.goBack) {
                this.props.goBack()
              } else {
                APP.history.goBack()
              }
            }}
          />
        </div>
        <div className={cx('center')}>
          {this.props.title}
        </div>
        <div className={cx('right')}></div>
      </div>
    )
  }
}
export default Main
