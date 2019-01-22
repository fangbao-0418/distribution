import http from './http'

/** 获取城市列表 */
export const fetchCities = () => {
  return http('/product/v1/api/region/cities?wapOpen=true', 'GET')
}
/** 获取当前城市 */
export const fetchLocation = () => {
  return http('/shop-user/v1/api/cities/location', 'GET')
}
/** 获取个人中心查询 */
export const fetchUserInfo = () => {
  return http('/v1/api/distribute/get_distributor', 'GET')
}
/** 获取手机号验证码 */
export const getMobileCode = (mobile) => {
  return http(`/shop-user/v1/api/user/short-message/${mobile}`, 'GET')
}
/** 账号密码登录 */
export const loginAccount = (payload) => {
  return http('/shop-user/v1/api/distribute/login', 'POST', payload).then((res) => {
    if (res.token) {
      APP.token = res.token
    }
    return res
  }, (err) => {
    console.log(err, 'login error')
  })
}
/** 手机号验证码登录 */
export const loginPhone = (payload) => {
  return http('/shop-user/v1/api/distribute/check_code', 'POST', payload).then((res) => {
    if (res.token) {
      APP.token = res.token
    }
    return res
  })
}
/** 注册 */
export const registry = (payload: RegistryFormProps) => {
  return http('/shop-user/v1/api/distribute/add_distributor', 'POST', payload)
}
/** 我的客户列表 */
export const getCustomerList = (pageCurrent: number, pageSize: number) => {
  return http(`/shop-user/v1/api/distribute/customers?pageCurrent=${pageCurrent}&pageSize=${pageSize}`, 'GET')
}
/** 新增客户 */
export const addCustomer = (payload: CustomerFormProps) => {
  return http('/shop-user/v1/api/distribute/customer-entry', 'POST', payload)
}
