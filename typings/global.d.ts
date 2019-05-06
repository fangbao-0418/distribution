declare namespace NodeJS {
  interface Global {
    APP: any
  }
}
declare module 'beidou-view-react' {
  export interface ReactViewProps<C, H> {
    ctx: C;
    helper: H;
    [key: string]: any;
  }
}
