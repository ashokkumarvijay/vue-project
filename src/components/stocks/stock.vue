<template>
    <div class="col-sm-6 col-md-4 card card-success">
            <div class="card-header text-white" style="height: 40px;background-color:#42b983;width:365px;">Name:{{stocks.name}},price:{{stocks.Price}},quantity:{{quantity}}</div>
            <div class="card-body">
                <div class="float-left col-md-9" >
                    <input type="number" placeholder="Enter Quantity" class="form-control" v-model.number="quantity">
                </div>
                <div class="float-right">
                    <button :disabled="insufficientfunds" class="btn btn-success" @click="buy">Buy</button>
                </div>
            </div>
        </div>
</template>
<script>
export default {
  props: ['stocks'],
  data: function () {
    return {
      quantity: 0,
      funds: 1000
    }
  },
  computed: {
    insufficientfunds () {
      return this.quantity * this.stocks.Price > this.Funds
    },
    Funds () {
      return this.$store.getters.Funds
    }
  },
  methods: {
    buy: function () {
      const order = {
        stockid: this.stocks.id,
        stockname: this.stocks.name,
        price: this.stocks.Price,
        stockquantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>
<style>
    .box {
        padding: 0 5px 0 5px;
    }
</style>
