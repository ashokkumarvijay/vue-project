<template>
    <div>
        <div class="container title m-b-md">
                <label for="email"><b>Email</b></label><br>
                <input type="text" placeholder="Enter Username" name="email" v-model="email" required><br>

                <label for="psw"><b>Password</b></label><br>
                <input type="password" placeholder="Enter Password" name="psw" v-model="password" required>

                <button  @click="login" type="submit">Login</button><br>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>
            <div class="container1" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>

    </div>
</template>
<script>
export default {
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', {email: this.email, password: this.password, router: this.$route})
    }
  }
}
</script>
<style scoped>
    /* Full-width inputs */
    input[type=text], input[type=password] {
        width: 50%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    /* Set a style for all buttons */
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 50%;
    }

    /* Add a hover effect for buttons */
    button:hover {
        opacity: 0.8;
    }

    /* Extra style for the cancel button (red) */
    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
    }

    /* Center the avatar image inside this container */
    .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
    }

    /* Avatar image */
    img.avatar {
        width: 40%;
        border-radius: 50%;
    }

    /* Add padding to containers */
    .container {
        padding: 16px;

    }
    .container1 {
        padding: 16px;
        width: 35%;
        margin-left: 520px;
    }

    /* The "Forgot password" text */
    span.psw {
        float: right;
        padding-top: 16px;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 150px) {
        span.psw {
            display: block;
            float: none;
        }
        .cancelbtn {
            width: 50%;
        }
    }
    * {box-sizing: border-box}
    .m-b-md {
        margin-bottom: 30px;
        text-align: center;
    }
</style>
