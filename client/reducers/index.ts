import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions';

const initialState = {
  home: {
    orderTotal: 0,
    voucherTotal: 0,
    billTotal: 0
  },
};
const demo = handleActions(
  {
    'demo data': (state, { payload: { home } }) => ({
      ...state,
      home,
    }),
  },
  initialState,
);

const reducers = combineReducers({
  demo
})
export default reducers