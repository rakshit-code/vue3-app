import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  getters: {
    getCount:state=> state.count
  },
  mutations: {
    increment(state){
      state.count +=1
    },
    decrement(state){
      state.count -=1
    }
  },
  actions: {
    increment({commit}){
      commit('increment')
    },
    decrement({commit}){
      commit('decrement')
    },
  },
  modules: {
  }
})
