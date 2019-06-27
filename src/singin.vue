<template>
    <div>
        <div v-if="auth" class="top-right links">
            <router-link to="/dashboard">Dashboard</router-link>
        </div><br><br>
        <p v-if ="!ans" class="invalid" style="text-align: center"> The Email And Password Doe Not Match</p>
        <div class="container title m-b-md">
            <label for="email"><b>Email</b></label><br>
            <input type="text" placeholder="Enter Username" name="email" v-model.lazy="email" @blur="$v.email.$touch()" required><br>
            <p class="invalid" v-if="$v.email.required && !$v.email.email">The Email Is Invalid</p>
            <label for="psw"><b>Password</b></label><br>
            <input type="password" placeholder="Enter Password" name="psw" v-model.lazy="password" @blur="$v.password.$touch()" required>
            <button  @click="login(email,password)"  :disabled="$v.$invalid" type="submit">Login</button><br>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </div>

    </div>
</template>
<script>
import {required, email} from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
    data: function () {
        return {
            email: '',
            password: '',
            value: '<p>The Password Does Not match</p>',
            ans: true

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
                        const data = res.data
                        const users = []
                        for (let key in data) {
                            const user = data[key]
                            user.id = key
                            users.push(user)

                        }
                        //this.value = Object.keys(res.data).length
                        return Object.keys(res.data).length === 1

                    })
            }
        },
        password: {
            required
        }
    },
        methods: {
            login: function (email,password) {
                axios.get('https://ashok-38e5f.firebaseio.com/data.json?orderBy="email"&equalTo="' + email + '"')
                    .then(res => {
                        const data = res.data
                        const users = []
                        const user = ''
                        for (let key in data) {
                            const user = data[key]
                            if(user.password == password){
                                this.$store.dispatch('login', {email: this.email, password: this.password, router: this.$route})
                                this.email = ''
                                this.password = ''
                                this.ans = true
                                console.log(user.email)
                                return this.ans

                            }
                            else {
                                console.log(user.email)
                             this.ans = false
                                return this.ans

                            }
                        }


                    })


            }
        },
        computed: {
            auth() {
                return this.$store.getters.isAuthenticated
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
    .title1 {
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
    .m-b-md1 {
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
    .invalid {
        color:red;
    }

</style>
