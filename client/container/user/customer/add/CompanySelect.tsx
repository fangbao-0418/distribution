import React from 'react'
import classnames from 'classnames/bind'
import * as Service from 'client/utils/service'
const cx = classnames.bind(require('./style.module.sass'))
interface Props {
  style?: React.CSSProperties
  className?: string
  onChange?: (value: {name: string}) => void
  value?: string
}
class Main extends React.Component<Props> {
  state = {
    showPanel: false,
    data: [],
    value: this.props.value
  }
  componentWillReceiveProps (props: Props) {
    this.setState({
      value: props.value
    })
  }
  componentDidMount () {
    window.addEventListener('click', (e) => {
      const el: any = this.refs.el
      if (el && !el.contains(e.target)) {
        this.setState({
          showPanel: false
        })
      }
    })
  }
  fetchData (name) {
    Service.fetchTyCompanyList(name).then((res) => {
      let showPanel = false
      if (res.length > 0) {
        showPanel = true
      }
      if (name === this.state.value) {
        this.setState({
          showPanel,
          data: res
        })
      }
    })
  }
  render () {
    return (
      <div
        ref='el'
        className={cx('company-select')}
      >
        <input
          {...this.props}
          value={this.state.value}
          onClick={() => {
            this.setState({
              showPanel: this.state.data.length > 0 && !this.state.showPanel
            })
          }}
          onChange={(e) => {
            const value = e.target.value
            this.setState({
              value
            })
            if (this.props.onChange) {
              this.props.onChange({
                name: value
              })
            }
            this.fetchData(e.target.value)
          }}
        />
        {this.state.showPanel && <div
          className={cx('company-select-panel')}
        >
          <ul>
            {
              this.state.data.map((item) => {
                return (
                  <li
                    onClick={() => {
                      this.setState({
                        showPanel: false,
                        value: item.name
                      })
                      if (this.props.onChange) {
                        this.props.onChange(item)
                      }
                    }}
                  >
                    {item.name}
                  </li>
                )
              })
            }
          </ul>
        </div>}
      </div>
    )
  }
}
export default Main
