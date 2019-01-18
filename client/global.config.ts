let __DEV__: any;
let __CLIENT__: any;
let FastClick: any;
declare const APP: APP.Props;
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any,
  __INITIAL_STATE__: any
  fullpage: (id: string, options: FullPageJsOptions) => void
}

/** 城市属性 */
interface CityProps {
  /** 城市名 */
  name: string
  /** 城市code */
  code: string
}