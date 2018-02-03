import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import user from './user'
import home from './home'
import productDetail from './productDetail'
import car from './car'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    home,
    productDetail,
    car
  },
  state,
  actions,
  getters,
  mutations,
})

store.subscribe((mutation, state) => {
  switch(mutation.type) {
    case "ADD_TO_CAR":
    case "REMOVE_OUT_CAR":
      window.localStorage.setItem('cart_list', JSON.stringify(state.car.list))
      break
  }
})

export default store
