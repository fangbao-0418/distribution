import http from './http'

/** 获取城市列表 */
export const fetchCities = () => {
  return http('/product/v1/api/region/cities?wapOpen=true', 'GET')
}
/** 获取当前城市 */
export const fetchLocation = () => {
  return http('/shop-user/v1/api/cities/location', 'GET')
}