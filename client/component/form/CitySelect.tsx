import React from 'react'
import FormItem from 'client/component/form/FormItem'
import { connect } from 'react-redux'
interface Props {
  selectCity: CityProps
}
class Main extends React.Component<Props> {
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
        <img
          style={{
            verticalAlign: 'middle',
            marginRight: '6px'
          }}
          src={require('client/assets/icon_diz@3x.png')} width='12px' height='14.6px'
        />
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
