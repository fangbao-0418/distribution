let __DEV__: any;
let __CLIENT__: any;
let FastClick: any;
declare const APP: APP.Props;
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any,
  __INITIAL_STATE__: any
}

/** 城市属性 */
interface CityProps {
  /** 城市名 */
  name: string
  /** 城市code */
  code: string
}
/** 注册 */
interface RegistryFormProps {
  userName?: string
  phone?: string
  password?: string
  surePassword?: string
  cityCode?: string
  cityName?: string
  /** 验证码 */
  checkCode?: string
}
/** 新增客户 */
interface CustomerFormProps {
  contactPerson?: string
  contactPhone?: string
  companyName?: string
  cityCode?: string
  cityName?: string
  /** 纳税人类别 */
  payTaxesNature?: string
  /** 需求状态 */
  demandType?: any
}
/** 用户信息 */
interface UserProps {
  phone: string
  /** 二维码地址 */
  qrCodeImageUrl: string
}
