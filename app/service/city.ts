import { Service } from 'egg'
export default class extends Service {
  async getData() {
    const res = await this.ctx.fetch({
      url: '/product/v1/api/region/cities?wapOpen=true'
    }) || {data: []}
    return res.data
  }
}
