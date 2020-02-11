import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    historyList: [{title: '20181226'},{title: '20181225'}],
    count: 1
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
    },
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    increment: ({commit}) => {
      commit('increment')
    },
    decrement: ({commit}) => {
      commit('decrement')
    }
  }
})