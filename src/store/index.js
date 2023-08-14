import { createStore } from 'vuex'
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'
import search from './modules/search'
import app from './modules/app'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'
const store = createStore({
  getters,
  modules: {
    category,
    theme,
    app,
    user,
    search
  },
  plugins: [
    createPersistedState({
      key: 'imooc-front',
      paths: ['category', 'theme', 'search', 'user']
    })
  ]
})
export default store
