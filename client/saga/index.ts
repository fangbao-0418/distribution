import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
export const sagaMiddleware = createSagaMiddleware()
import city from './city'
import user from './user'
export default function* rootSaga() {
  yield all([
    city(),
    user()
  ])
}
// entry point
export const run = () => {
  sagaMiddleware.run(
    rootSaga
  )
}
