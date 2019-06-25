<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
import welcome from './welcome.vue'
import store from './store.js'
export default {
  components: {
    'welcome': welcome
  },
  beforeRouteLeave (to, form, next) {
    if (store.state.idToken !== null) {
      next('/dashboard')
    }
  }
}
</script>
