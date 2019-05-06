import React from 'react'
import Layout from 'client/layout'
export default class View extends Layout {
  static getStore() {
    const store = this.configureStore()
    return store
  }
}
