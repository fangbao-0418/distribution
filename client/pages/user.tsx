import React from 'react'
import Layout from 'client/layout'
import actions from 'client/actions'
export default class View extends Layout {
  static async getStore({ctx}) {
    const store = this.configureStore()
    const data = await ctx.service.user.getUserInfo()
    console.log(data, 'server user')
    store.dispatch(actions.user.info(data))
    return store
  }
}
