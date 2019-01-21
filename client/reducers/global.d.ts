declare namespace State {
  export interface Common {
    cities: Array<{key: string, list: CityProps[]}>
    sourceCities: CityProps[]
    selectCity: CityProps
  }
  export interface Form {
    registry: any
  }
  export interface Props {
    common: Common,
    form: Form
  }
}