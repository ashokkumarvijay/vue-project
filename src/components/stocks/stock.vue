<template>
    <div class= "card card-success col-sm-6 col-md-4 ">
            <div class="card-header text-white" style="height: 40px;background-color:#42b983;width:365px;">Name:{{stocks.name}},price:{{stocks.Price}},quantity:{{quantity}}</div>
            <div class="card-body">
                <div class="float-left col-md-9" >
                    <input type="text" placeholder="Enter Quantity" class="form-control" v-model.lazy="quantity">
                </div>
                <div class="float-right">
                    <button class="btn btn-success" @click="buy">Buy</button>
                </div>
            </div>
        </div>
</template>
<script>
export default {
  props: ['stocks'],
  data: function () {
    return {
      quantity: 0
    }
  },
  methods: {
    buy: function () {
      const order = {
        stockid: this.stocks.id,
        stockname: this.stocks.name,
        price: this.stocks.price,
        stockquantity: this.quantity
      }
      console.log(order)
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
