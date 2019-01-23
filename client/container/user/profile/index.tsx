import React from 'react'
import classnames from 'classnames/bind'
import html2canvas from 'html2canvas'
const cx = classnames.bind(require('./style.module.sass'))
class Main extends React.Component {
  componentDidMount () {
    console.log('didmount')
    html2canvas(this.refs.el).then(canvas => {
      console.dir(canvas, 'canvas')
      document.querySelector('#app').appendChild(canvas)
    });
  }
  render () {
    return (
      <div
        style={{
          // display: 'none'
        }}
        className={cx('bg')}
       
      >
        <div
          ref='el'
        >
          <img
            className={cx('or-code')} src='https://pilipa-ml.oss-cn-beijing.aliyuncs.com/pilipa/distributor/qr/201901/1087260110466682882.png'
          />
        </div>
      </div>
    )
  }
}
export default Main