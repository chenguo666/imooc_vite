import router from '@/router'
import store from '@/store'
import { message } from '@/libs'
router.beforeEach((to, from) => {
  if (!to.meta.user) {
    return
  }
  if (store.getters.token) {
    return
  }
  message('warn', '登录失效，请重新登录！')
  return '/'
})
