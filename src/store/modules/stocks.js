import stocks from '../../data/stocks.js'
const state = {
  stocks: []
}
const mutations = {
  'setStock' (state, stocks) {
    state.stocks = stocks
  }
}
const actions = {
  setStockAction: ({commit}) => {
    commit('setStock', stocks)
  },
  buyStock: ({commit}, order) => {
    commit('Buy_STOCK', order)
  },
  sellstock: ({commit}, order) => {
    commit('Sell_Stock', order)
  }
}

const getters = {
  getstocks: function (state) {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
