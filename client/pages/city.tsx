import React from 'react'
import Layout from 'client/layout'
import actions from 'client/actions'
import { sorter } from 'client/saga/city'
export default class View extends Layout {
  static async getStore({ctx}) {
    const store = this.configureStore()
    const data = await ctx.service.city.getData()
    store.dispatch(actions.city.filterResult(sorter(data)))
    store.dispatch(actions.city.fetchSuccess(data))
    return store
  }
}
