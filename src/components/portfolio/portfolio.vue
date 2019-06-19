<template>
    <div>
        <stock v-for="stock in stocks" :stocks="stock"></stock>
    </div>
</template>
<script>
import Stock from './stock'
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
