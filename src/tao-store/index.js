import Vue from 'vue'
import Vuex from './tao-vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    add(state) {
      // state 哪来的
      state.counter++
    }
  },
  actions: {
    add({commit}) {
      // ctx 哪来的
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  },
  modules: {
  }
})
