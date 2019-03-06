import React from 'react'
import classnames from 'classnames/bind'
import FormItem from 'client/component/form/FormItem'
import { connect } from 'react-redux'
import actions from 'client/actions'
import { findDOMNode } from 'react-dom'
import { withRouter, RouteComponentProps } from 'react-router'
const cx = classnames.bind(require('./style.module.sass'))
interface Props extends State.Common, RouteComponentProps<any> {}
class Main extends React.Component<Props> {
  area = {}
  env = APP.getEnv()
  componentWillMount () {
    if (__CLIENT__) {
      APP.dispatch(actions.city.fetch())
    }
  }
  getFromUrl () {
    const { search } = this.props.location
    const result = search.match(/from=(.*)&?/)
    const from = result ? result[1] : '/'
    return from
  }
  getInitials () {
    const { cities } = this.props
    return cities.map((item) => {
      return item.key
    })
  }
  toFixed (key) {
    const el = findDOMNode(this.area[key])
    const parent = document.querySelector(`.${cx('city')}`).parentElement
    parent.scrollTop = el.offsetTop - (this.env === 'browser' ? 53 : 0)
  }
  render () {
    const { cities } = this.props
    return (
      <div className={cx('sort')}>
        {
          cities.map((item) => {
            const nodes = [(
              <FormItem
                ref={(ref) => {
                  this.area[item.key] = ref
                }}
                className={cx('initials')}
              >
                {item.key}
              </FormItem>
            )]
            item.list.map((item2) => {
              nodes.push(
                <FormItem
                  onClick={() => {
                    APP.dispatch(actions.city.select(item2))
                    console.log(item2, '选择的城市')
                    APP.history.goBack()
                  }}
                  style={{
                    height: '45px',
                    lineHeight: '45px',
                    marginRight: 10
                  }}
                >
                  {item2.name.replace('市', '')}
                </FormItem>
              )
            })
            return nodes
          })
        }
        <div className={cx('retrieval')}>
          {
            this.getInitials().map((key) => {
              return (
                <li
                  onClick={this.toFixed.bind(this, key)}
                >
                  {key}
                </li>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default connect(({common}: State.Props) => {
  return {
    cities: common.cities
  }
})(withRouter(Main))

