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
  phone?: string
  password?: string
  surePassword?: string
  cityCode?: string
  cityName?: string
  /** 验证码 */
  checkCode?: string
}