import React from 'react'
import { render, findDOMNode } from 'react-dom'
import Dalog from './Dialog'
import './style.sass'
interface Props {
  style?: React.CSSProperties
  overlay: React.ReactNode
  visibled?: boolean
  onExited?: () => void
}
class Main extends React.Component<Props> {
  dalog: any
  el: any
  dalogEl: any
  createDalogElement () {
    const el = document.createElement('div')
    render(
      <Dalog
        visibled={this.props.visibled}
        maskStyle={this.props.style}
        wrapStyle={this.props.style}
        ref={(ref) => {
          this.dalog = ref
        }}
        onExited={() => {
          if (this.props.onExited) {
            this.props.onExited()
          }
          document.body.removeChild(el)
        }}
        overlay={this.props.overlay}
      />,
      el
    )
    return el
  }
  componentDidMount () {
    this.el = findDOMNode(this)
    this.dalogEl = this.createDalogElement()
    this.el.onclick = () => {
      if (!document.body.contains(this.dalogEl)) {
        this.dalogEl = this.createDalogElement()
        document.body.append(this.dalogEl)
      } else {
        this.dalog.destroy()
      }
    }
  }
  hide (time?: number) {
    if (time === 0 && document.body.contains(this.dalogEl)) {
      document.body.removeChild(this.dalogEl)
    } else {
      if (this.dalog && document.body.contains(this.dalogEl)) {
        this.dalog.destroy()
      }
    }
  }
  render () {
    return this.props.children
  }
}
export default Main

