<template>
    <div>
        <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email"  @blur="$v.email.$touch()" v-model.lazy="email"  name="email" required>
                <p class="invalid" v-if="$v.email.unique && $v.email.required && $v.email.email">The Email Already Exists</p>
                <p class="invalid" v-if="$v.email.required && !$v.email.email">The Email Is Invalid</p>
             <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" v-model.lazy="password" @blur="$v.password.$touch()" name="psw"  required>
                 <p class="invalid" v-if="!$v.password.minlen && $v.password.$invalid ">The Password Minimum 6 Characters</p>
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password"   @blur="$v.confirmpassword.$touch()" v-model.lazy="confirmpassword" name="psw-repeat"   required>
            <p class="invalid" v-if="!$v.confirmpassword.sameAs && $v.confirmpassword.required">The Password Do Not Match</p>
            <hr>
            <button   :disabled="$v.$invalid" @click="submit" class="registerbtn" >Register</button>
        </div>
        <div class="container signin">
            <p>Already have an account? <router-link to="/signin">Sign_In</router-link>.</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
export default {
  data: function () {
    return {
      email: '',
      password: '',
      confirmpassword: '',
      value: []
    }
  },
  validations: {
    email: {
      required,
      email,
      unique: val => {
        if (val === ' ') return false
        return axios.get('https://ashok-38e5f.firebaseio.com/data.json?orderBy="email"&equalTo="' + val + '"')
          .then(res => {
              console.log(res.data)
            if(Object.keys(res.data).length === 1) {
                return true
            }
        else {
            return false
            }

          })
      }
    },
    password: {
      required,
      minlen: minLength(6)
    },
    confirmpassword: {
        required,
      sameAs: sameAs('password')
    }
  },
  methods: {
    submit: function () {
      this.$store.dispatch('signup', {email: this.email, password: this.password})
        this.email = ''
        this.password = ''
        this.confirmpassword = ''
    }
  }
}
</script>
<style scoped>
    * {box-sizing: border-box}

    /* Add padding to containers */
    .container {
        padding: 16px;
    }

    /* Full-width input fields */
    input[type=text], input[type=password] {
        width: 100%;
        padding: 10px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: none;
        background: #f1f1f1;
    }

    input[type=text]:focus, input[type=password]:focus {
        background-color: #ddd;
        outline: none;
    }

    /* Overwrite default styles of hr */
    hr {
        border: 1px solid #f1f1f1;
        margin-bottom: 25px;
    }

    /* Set a style for the submit/register button */
    .registerbtn {
        background-color: #4CAF50;
        color: white;
        padding: 16px 20px;
        margin: 8px 0;
        border: none;
        width: 100%;
        opacity: 0.9;
    }
    /* Add a blue text color to links */
    a {
        color: dodgerblue;
    }

    /* Set a grey background color and center the text of the "sign in" section */
    .signin {
        background-color: #f1f1f1;
        text-align: center;
    }
    .invalid {
        color: red;
    }
</style>
