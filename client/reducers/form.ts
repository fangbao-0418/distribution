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
      return ({
        ...state,
        registry: payload
      })
    }
  },
  initialState
)