import { handleActions } from 'redux-actions'
import actions from '../actions'
const initialState = {
  sourceCities: [],
  cities: [],
  selectCity: {},
  user: {},
  loading: false
};
export default handleActions(
  {
    '@@init': (state) => ({
      ...state,
      initialState,
    }),
    [actions.loading]: (state, { payload }) => {
      return ({
        ...state,
        loading: payload
      })
    },
    [actions.city.fetchSuccess]: (state, { payload }) => {
      return ({
        ...state,
        sourceCities: payload
      })
    },
    [actions.city.filterResult]: (state, { payload }) => {
      return ({
        ...state,
        cities: payload
      })
    },
    [actions.city.select]: (state, { payload }) => {
      return ({
        ...state,
        selectCity: payload
      })
    },
    [actions.user.info]: (state, { payload }) => {
      return ({
        ...state,
        user: payload
      })
    }
  },
  initialState
)