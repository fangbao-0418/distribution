import React from 'react'
import classnames from 'classnames/bind'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  onClose?: () => void
}
class Main extends React.Component<Props> {
  render () {
    return (
      <div className={cx('bg')} onClick={() => { this.props.onClose()}}>
        <img src={require('client/assets/label_erwi@3x.png')}/>
      </div>
    )
  }
}
export default Main