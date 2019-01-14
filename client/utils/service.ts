import http from './http'

/** 获取bi首页-订单成交量&处理凭证张数&处理票据张数 */
export const fetchHomeTotal = () => {
  http('/api/v1/home/total', 'GET')
}