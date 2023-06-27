import { CATEGORY_NOMAR_DATA, ALL_CATEGORY_ITEM } from '@/constants/index'
import { getCategory } from '@/api/category'

export default {
  namespaced: true,
  state: () => {
    return {
      categorys: CATEGORY_NOMAR_DATA
    }
  },
  mutations: {
    setCategorys(state, newCategorys) {
      state.categorys = [ALL_CATEGORY_ITEM, ...newCategorys]
    }
  },
  actions: {
    async useCategoryData(context) {
      const { categorys } = await getCategory()
      context.commit('setCategorys', categorys)
    }
  }
}
