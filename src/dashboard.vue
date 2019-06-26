<template>
    <div>

            <div class="top-right links">
                <h6  class= "logout" @click="logout" >Logout</h6>
            </div>

    </div>
</template>
<script>
export default {
  computed: {
    email () {
      return !this.$store.getters.user ? false : this.$store.getters.user.email
    }
  },
  methods: {
    logout: function () {
      this.$router.push('/signin')
     this.$store.dispatch('logout')
     }
  },
  created () {
    this.$store.dispatch('fetchUser')
  }
}
</script>
<style scoped>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Raleway', sans-serif;
        font-weight: 100;
        height: 100vh;
        margin: 0;
    }
    .full-height {
        height: 100vh;
    }
    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .position-ref {
        position: relative;
    }
    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }
    .content {
        text-align: center;
    }
    .title {
        font-size: 84px;
    }
    .logout {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
    }
    .m-b-md {
        margin-bottom: 30px;
    }
    .header{
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;

    }
</style>

