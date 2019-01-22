import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import actions from 'client/actions'
import * as Service from 'client/utils/service'
function* fetchUser () {
  try {
    const res = yield Service.fetchUserInfo()
    if (res.status === 200) {
      yield put(actions.user.info(res.data))
    }
  } catch (e) {

  }
}
export default function* () {
  yield takeLatest(actions.user.fetch, fetchUser)
}