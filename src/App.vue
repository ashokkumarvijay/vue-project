<template>
    <div class="container">
        <Header></Header>
        <div class="row">
            <div class="col-lg-12">
                <br>
        <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header'
export default {
  components: {
    'Header': Header
  },
  created () {
    this.$store.dispatch('setStockAction')
  }
}
</script>
