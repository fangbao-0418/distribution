let __DEV__: any;
let FastClick: any;
let _babelPolyfill: boolean;
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
  username?: string
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
  username?: string
  /** 个人二维码地址不加背景 */
  qrCodeSmallImageUrl?: string
  cityName?: string
  cityCode?: string
}
