<template>
    <div>
        <div class="col-sm-6 col-md-4 card card-success">
            <div class="card-header text-white" style="height: 40px;background-color:#42b000;width:365px;">Name:{{stocks.name}},price:{{stocks.price}},quantity:{{stocks.quantity}}</div>
            <div class="card-body">
                <div class="float-left col-md-9">
                    <input type="text" v-model="quantity" class="form-control">
                </div>
               <div class="float-right">
                   <button  class="btn btn-success" @click="sell">SELL</button>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['stocks'],
  data: function () {
    return {
      quantity: this.stocks.quantity
    }
  },
  methods: {
    sell: function () {
      const order = {
        stockid: this.stocks.id,
        stockname: this.stocks.name,
        price: this.stocks.price,
        stockquantity: this.quantity
      }
      console.log(order)
      this.$store.dispatch('sellstock', order)
    }
  }

}
</script>
