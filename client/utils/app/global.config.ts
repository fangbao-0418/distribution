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
  export interface Props {
    dispatch: Dispatch
    history: {
      push: (path: string) => void
      goBack: any
    }
    /** 提示信息 */
    toast: (message: string, duration?: number) => void
    token: string
  }
}