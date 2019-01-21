import { handleActions } from 'redux-actions'
import actions from '../actions'
const initialState = {
  registry: {},
  customer: {}
};
export default handleActions(
  {
    '@@init': (state) => ({
      ...state,
      initialState,
    }),
    [actions.form.registry]: (state, { payload }) => {
      return ({
        ...state,
        registry: payload
      })
    },
    [actions.form.customer]: (state, { payload }) => {
      return ({
        ...state,
        customer: payload
      })
    }
  },
  initialState
)