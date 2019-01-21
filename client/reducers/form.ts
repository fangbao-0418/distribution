import { handleActions } from 'redux-actions'
import actions from '../actions'
const initialState = {
  registry: {}
};
export default handleActions(
  {
    '@@init': (state) => ({
      ...state,
      initialState,
    }),
    [actions.form.registry]: (state, { payload }) => {
      // console.log(payload, 'reducer')
      return ({
        ...state,
        registry: payload
      })
    }
  },
  initialState
)