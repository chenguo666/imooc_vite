import { isMobileTerminal } from '@/utils/flexible'
export default {
  categorys: (state) => state.category.categorys,
  themeType: (state) => state.theme.themeType,
  currentCategory: (state) => state.app.currentCategory,
  currentCategoryIndex: (state, getters) => {
    return getters.categorys.findIndex((item) => {
      return item.id === getters.currentCategory.id
    })
  },
  historys: (state) => state.search.historys,
  searchText: (state) => state.app.searchText,
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  routerType: (state) => {
    // pc下没有跳转动画
    if (!isMobileTerminal.value) {
      return 'none'
    }
    return state.app.routerType
  }
}
