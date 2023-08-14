import { ALL_CATEGORY_ITEM } from '@/constants/index'
export default {
  namespaced: true,
  state: () => {
    return {
      historys: []
    }
  },
  mutations: {
    addHistory(state, newHistory) {
      const isFindIndex = state.historys.findIndex(
        (item) => item === newHistory
      )
      if (isFindIndex !== -1) {
        state.historys.splice(isFindIndex, 1)
      }
      state.historys.unshift(newHistory)
    },
    deleteHistory(state, index) {
      state.historys.splice(index, 1)
    },
    deleteAllHistory(state) {
      state.historys = []
    }
  },
  actions: {}
}
