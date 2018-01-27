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
  },
  getters: {
    offerSale: state => {
      let offerSale = state.products.map( (product) => {
        return {
          name: '<b>' + product.name + '</b>',
          prize: product.prize / 2
        }
      })
      return offerSale
    }
  },
  mutations: {
    reducePrize: (state, payload) => {
      state.products.forEach( product => product.prize -= payload )
    }
  },
  actions: {
    reducePrize: (context, payload) => {
      setTimeout (() => {
        context.commit('reducePrize', payload)
      }, 2000)
    }
  }
})
