let __DEV__: any;
let __CLIENT__: any;
let FastClick: any;
interface FullPageJsOptions {
  licenseKey?: string
}
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any,
  __INITIAL_STATE__: any
  fullpage: (id: string, options: FullPageJsOptions) => void
}
