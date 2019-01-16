import React from 'react'
import Transition from 'react-transition-group/Transition'
import './style.sass'
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
}
const contentTransitionStyles = {
  entering: { maxHeight: '0%' },
  entered: { maxHeight: '100%' },
  exiting: { maxHeight: '100%' },
  exited: { maxHeight: '0%' }
}
interface Props {
  maskStyle?: React.CSSProperties
  wrapStyle?: React.CSSProperties
  overlay: React.ReactNode
  visibled?: boolean
  /** 退出 */
  onExited?: () => void
}
class Main extends React.Component<Props> {
  state = {
    in: false
  }
  componentDidMount () {
    this.setState({
      in: true
    })
  }
  destroy () {
    this.setState({
      in: false
    })
  }
  render () {
    return (
      <div>
        <Transition
          in={this.state.in}
          timeout={{
            enter: 50,
            exit: 100
          }}
          onEnter={() => {
            this.setState({
              in: true
            })
          }}
          onExited={() => {
            setTimeout(() => {
              if (this.props.onExited) {
                this.props.onExited()
              }
            }, 100)
          }}
        >
          {(status) => {
            return (
            <div
              onClick={() => {
                this.setState({
                  in: !this.state.in
                })
              }}
              style={{
                top: '100px',
                ...this.props.maskStyle,
                ...transitionStyles[status]
              }}
              className={`custom-action-sheet-mask fade-${status}`}
            >
            </div>
          )}}
        </Transition>
        <Transition
          in={this.state.in}
          timeout={{
            enter: 50,
            exit: 50
          }}
        >
          {(status) => {
            return (
            <div
              onClick={() => {
                // this.setState({
                //   in: !this.state.in
                // })
              }}
              style={this.props.wrapStyle}
              className={`custom-action-sheet-wrap fade-${status}`}
            >
              <div
                className={`custom-action-sheet-content`}
                style={{
                  ...contentTransitionStyles[status]
                }}
              >
                {this.props.overlay}
              </div>
            </div>
          )}}
        </Transition>
      </div>
    )
  }
}
export default Main