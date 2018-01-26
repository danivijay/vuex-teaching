import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store ({
  state: {
    products: [
      { name: 'hyundai', prize: '24' },
      { name: 'audi', prize: '28' },
      { name: 'bmw', prize: '29' }
    ]
  }
})
