import md5 from 'md5'
import { loginUser, getProfile, registerUser } from '@/api/sys'
import { message } from '@/libs/message'
export default {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async register(context, payload) {
      const { password } = payload
      return await registerUser({
        ...payload,
        password: password ? md5(password) : ''
      })
    },
    async login(context, payload) {
      const { password } = payload
      const data = await loginUser({
        ...payload,
        password: password ? md5(password) : ''
      })
      // console.log(data)
      context.commit('setToken', data.token)
      context.dispatch('profile')
    },

    async profile(context) {
      const data = await getProfile()
      // console.log(data)
      context.commit('setUserInfo', data)
      message('success', '欢迎！', 6000)
    },
    async logout(context) {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
      location.reload()
    }
  }
}
