import { combineReducers } from 'redux'
import common from './common'
import form from './form'
const reducers = combineReducers({
  common,
  form
})
export default reducers