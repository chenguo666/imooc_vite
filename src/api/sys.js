import request from '@/utils/request'
export const getCaptcha = (data) => {
  return request({
    url: '/pexelss/captcha',
    methods: 'GET',
    params: data
  })
}
export const loginUser = (data) => {
  return request({
    url: '/sys/login',
    methods: 'GET',
    params: data
  })
}
export const getProfile = (data) => {
  return request({
    url: '/user/profile',
    methods: 'GET',
    params: data
  })
}
export const putProfile = (data) => {
  return request({
    url: '/user/profile',
    methods: 'PUT',
    data: data
  })
}
export const registerUser = (data) => {
  return request({
    url: '/sys/register',
    methods: 'POST',
    data
  })
}
/**
 * 获取 OSS 上传凭证
 */
export const getSts = () => {
  return request({
    url: '/user/sts'
  })
}
