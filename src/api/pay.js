import request from '@/utils/request'
export const getPayList = () => {
  return request({
    url: '/user/vip/pay/list'
  })
}
