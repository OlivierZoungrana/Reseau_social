import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './module/auth'
Vue.use(Vuex)


const store = new Vuex.Store({
  state:{
    auth: authModule
  }
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
