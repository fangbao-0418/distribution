import http from './http'

/** 获取城市列表 */
export const fetchCities = () => {
  return http('/product/v1/api/region/cities?wapOpen=true', 'GET')
}
/** 获取当前城市 */
export const fetchLocation = () => {
  return http('/shop-user/v1/api/cities/location', 'GET')
}
/** 获取手机号验证码 */
export const getMobileCode = (mobile) => {
  return http(`/shop-user/v1/api/user/short-message/${mobile}`, 'GET')
}
/** 账号密码登录 */
export const loginAccount = (payload) => {
  return http('/shop-user/v1/api/distribute/login', 'POST', payload)
}
/** 手机号验证码登录 */
export const loginPhone = (payload) => {
  return http('/shop-user/v1/api/distribute/check_code', 'POST', payload)
}
/** 注册 */
export const registry = (payload: RegistryFormProps) => {
  return http('/shop-user/v1/api/distribute/add_distributor', 'POST', payload)
}
