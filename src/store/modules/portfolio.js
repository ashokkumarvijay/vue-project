const state = {
  funds: 1000,
  stocks: []
}
const mutations = {
  'Buy_STOCK' (state, {stockid, stockname, price, stockquantity}) {
    const record = state.stocks.find(element => element.id === stockid)
    if (record) {
      record.quantity = record.quantity + stockquantity
      state.funds = state.funds - (price * stockquantity)
    } else {
      state.stocks.push({
        id: stockid,
        name: stockname,
        price: price,
        quantity: stockquantity
      })
      state.funds = state.funds - (price * stockquantity)
    }
  }
}
const getters = {
  Stocks: (state) => {
    return state.stocks
  },
  Funds: (state) => {
    return state.funds
  }
}
export default {
  state,
  mutations,
  getters
}
