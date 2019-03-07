import React from 'react'
import FormItem from 'client/component/form/FormItem'
import { connect } from 'react-redux'
import actions from 'client/actions'
interface Props {
  selectCity: CityProps
}
class Main extends React.Component<Props> {
  componentWillMount () {
    if (__CLIENT__) {
      if (!this.props.selectCity.code) {
        APP.dispatch(actions.city.fetchLocation())
      }
    }
  }
  selectCity () {
    APP.history.push('/city')
  }
  render () {
    const { selectCity } = this.props
    return (
      <FormItem
        required
        label='所在城市'
        right={(
          <img
            onClick={this.selectCity.bind(this)}
            src={require('client/assets/icon_left@3x.png')} width='5px' height='9px'
          />
        )}
      >
        <div
          onClick={this.selectCity.bind(this)}
        >
          {selectCity.code && <img
            style={{
              verticalAlign: 'middle',
              margin: '0 6px 2px 0'
            }}
            src={require('client/assets/icon_diz@3x.png')}
            width='12px'
            height='14.6px'
          />}
          {selectCity.name}
        </div>
      </FormItem>
    )
  }
}
export default connect(
  ({common}: State.Props) => {
    return {
      selectCity: common.selectCity
    }
  }
)(Main)
