import { createActions } from 'redux-actions';

export default createActions({
  CITY: {
    FILTER: undefined,
    FETCH: undefined,
    FILTER_RESULT: data => data,
    FETCH_SUCCESS: data => data,
    SELECT: data => data
  }
});
