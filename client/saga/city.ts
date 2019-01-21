import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import actions from 'client/actions'
import * as Services from 'client/utils/service'
export function sorter (cities) {
  const mapper = {}
  const result = []
  cities.map((item) => {
    const initial = item.shortName[0]
    if (mapper[initial]) {
      mapper[initial].push(item)
    } else {
      mapper[initial] = [item]
    }
  })
  Object.keys(mapper).sort().map((key) => {
    result.push({
      key,
      list: mapper[key]
    })
  })
  return result
}
function* filterData ({payload}) {
  const { sourceCities } = payload
  const text = (payload.text || '').toUpperCase()
  console.log(text, 'text')
  if (!text) {
    yield put(actions.city.filterResult(sorter(sourceCities)))
    return
  }
  const data = []
  sourceCities.map((item) => {
    if ([item.name, item.shortName].join('').indexOf(text) > -1) {
      data.push(item)
    }
  })
  const result = sorter(data)
  yield put(actions.city.filterResult(result))
}
function* fetchCityList () {
  try {
    const cities = (yield call(Services.fetchCities) || {data: []}).data
    const data = sorter(cities)
    yield put(actions.city.fetchSuccess(cities))
    yield put(actions.city.filterResult(data))
  } catch (e) {
  }
}
function* fetchLocation () {
  try {
    const data = yield call(Services.fetchLocation) || {}
    yield put(actions.city.select(data))
  } catch (e) {
  }
}
export default function* () {
  yield takeLatest(actions.city.fetch, fetchCityList)
  yield takeLatest(actions.city.filter, filterData)
  yield takeLatest(actions.city.fetchLocation, fetchLocation)
}
