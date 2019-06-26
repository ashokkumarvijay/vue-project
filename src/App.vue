<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
import welcome from './welcome.vue'

export default {
  components: {
    'welcome': welcome
  },
  created () {
      this.$store.dispatch('tryAuthLogin')
  }
}
</script>
