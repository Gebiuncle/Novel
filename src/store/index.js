import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    historyList: [{title: '20181226'},{title: '20181225'}]
  },
  getters: {
    historyList: state => {
      return state.historyList
    }
  },
  mutations: {
    setHistoryList (state, history) {
      let obj = {title: history}
      state.historyList.push(obj)
    }
  }
})