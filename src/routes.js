import Welocme from './welcome'
import Signup from './signup.vue'
import signin from './singin'
import dashboard from './dashboard.vue'
import store from './store.js'

export default [
  {path: '', component: Welocme},
  {path: '/signup', component: Signup},
  {
    path: '/signin',
    component: signin
  },
  {
    path: '/dashboard',
    component: dashboard,
    name: 'dashboard',
    beforeEnter (to, from, next) {
      if (store.state.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  }
]
