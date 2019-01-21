declare namespace State {
  export interface Common {
    cities: Array<{key: string, list: CityProps[]}>
    sourceCities: CityProps[]
    selectCity: CityProps
  }
  export interface Form {
    registry: RegistryFormProps,
    customer: CustomerFormProps
  }
  export interface Props {
    common: Common,
    form: Form
  }
}