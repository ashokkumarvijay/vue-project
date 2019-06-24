import Welocme from './welcome'
import Signup from './signup.vue'
import signin from './singin'
import dashboard from './dashboard.vue'

export const routes = [
  {path: '', component: Welocme},
  {path: '/signup', component: Signup},
  {path: '/signin', component: signin},
  {path: '/dashboard', component: dashboard}
]
