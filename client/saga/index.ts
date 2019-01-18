import createSagaMiddleware from 'redux-saga'
export const sagaMiddleware = createSagaMiddleware()
import city from './city'
// entry point
export const run = () => {
  sagaMiddleware.run(
    city
  )
}
