import { ALL_CATEGORY_ITEM } from '@/constants/index'
export default {
  namespaced: true,
  state: () => {
    return {
      currentCategory: ALL_CATEGORY_ITEM,
      searchText: '',
      routerType: 'none'
    }
  },
  mutations: {
    changeCurrentCategory(state, newCategory) {
      state.currentCategory = newCategory
    },
    changeRouterType(state, routerType) {
      state.routerType = routerType
    },
    changeSearchText(state, searchText) {
      state.searchText = searchText
    }
  },
  actions: {}
}
