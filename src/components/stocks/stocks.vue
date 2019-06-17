<template>
    <div class="row">
       <Stock v-for="stock in stocks" :stocks="stock"></Stock><br>

    </div>
</template>
<script>
import Stock from './stock.vue'
export default {
  components: {
    Stock: Stock
  },
  computed: {
    stocks () {
      return this.$store.getters.getstocks
    }
  }
}
</script>
