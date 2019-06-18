<template>
    <div>
    <div v-for="stock in stocks">
        <div class=" row col-sm-6 col-md-4 card card-success ">
            <div class="card-header text-white" style="height: 40px;background-color:#42b983;width:365px;">Name:{{stock.name}},quantity:{{stock.quantity}}</div>
            <div class="card-body">
                <div class="float-left col-md-9" >
                    <input type="number" placeholder="Enter Sell" :value="stock.quantity" disabled class="form-control">
                </div>
                <div class="float-right">
                    <button class="btn btn-success" >Sell</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Stock from '../stocks/stock.vue'
export default {
  data: function () {
    return {
      quantity1: 0
    }
  },
  computed: {
    stocks () {
      return this.$store.getters.Stocks
    }
  },
  components: {
    'stock': Stock
  }
}
</script>
<style>
</style>
