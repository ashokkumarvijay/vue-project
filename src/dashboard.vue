<template>
    <div>
    <div class="content">
        <div class="flex-center position-ref full-height">
            <div class="top-right links">
                <h6 @click="logout" cursor="pointer">Logout</h6>
            </div>
        </div>
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
    // logout: function () {
    //  this.$store.dispatch('logout')
    //  }
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
    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
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
        cursor: pointer;
    }
</style>

