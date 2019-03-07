import { Service } from 'egg'
export default class extends Service {
  async getData() {
    const res = await this.ctx.fetch({
      url: '/shop-user/v1/api/distribute/city'
    }) || {data: []}
    return res.data
  }
}
