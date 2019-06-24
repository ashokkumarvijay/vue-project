<template>
    <div>
        <p>you have to login Successfully</p>
        <p>email : {{email}}</p>
    </div>
</template>
<script>
export default {
  computed: {
    email () {
      return this.$store.getters.getUser.email
    }
  },
  created () {
    this.$store.dispatch('fetchUser')
  }
}
</script>
