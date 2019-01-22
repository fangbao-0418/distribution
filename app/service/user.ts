import { Service } from 'egg'
export default class extends Service {
  async getUserInfo() {
    const res = await this.ctx.fetch({
      url: '/shop-user/v1/api/distribute/get_distributor'
    }) || {data: {}}
    return res.data
  }
}

