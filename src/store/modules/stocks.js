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
