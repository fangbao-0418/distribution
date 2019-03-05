declare namespace APP {
  export interface Action<T = any> {
    type: T
  }
  export interface AnyAction extends Action {
    [extraProps: string]: any
  }
  interface Dispatch<A extends Action = AnyAction> {
    <T extends A>(action: T): T
  }
  export interface CookiesOptionProps {
    domain?: string
    expires?: number
    path?: string
  }
  export interface CookiesProps {
    set: (field: string, value: string | number, options?: CookiesOptionProps) => void
    get: <T = any>(field: string, options?: CookiesOptionProps) => T
  }
  export interface Props {
    dispatch: Dispatch
    history: {
      push: (path: string) => void
      goBack: any
    }
    /** 提示信息 */
    toast: (message: string, duration?: number) => void
    token: string
    Cookies: CookiesProps
    ctx: any
    getEnv: () => 'browser' | 'wechat'
  }
}