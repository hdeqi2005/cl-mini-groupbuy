import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import address from './module/address'
import goods from './module/goods'
import rush from './module/rush'
import order from './module/order'
import note from './module/note'
import ad from './module/ad'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    address,
    goods,
    rush,
    order,
    app,
		note,
		ad
  }
})
