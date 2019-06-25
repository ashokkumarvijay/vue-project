import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './routes.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser (state, Userdata) {
      state.idToken = Userdata.token
      state.userId = Userdata.userId
    },
    storeUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setLogoutTimer ({commit, expiretime}) {
      setTimeout(() => {
        commit('logout')

      }, expiretime * 1000)

    },
    signup ({commit, dispatch}, authData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDPFy5TNZYkiIMGJQBpabdAVUS5-Gbn0-s', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          dispatch('storeUser', authData)
        })
    },
    login ({commit, dispatch,state}, authData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDPFy5TNZYkiIMGJQBpabdAVUS5-Gbn0-s', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          if (state.idToken !== null) {
            console.log(authData.router.path)
          }
        })
    },
    storeUser ({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      axios.post('https://ashok-38e5f.firebaseio.com/data.json' + '?auth=' + state.idToken, userData)
        .then(res => { console.log(res) })
    },
    fetchUser ({commit, state}) {
      if (!state.idToken) {
        return
      }
      axios.get('https://ashok-38e5f.firebaseio.com/data.json' + '?auth=' + state.idToken)
        .then(res => {
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          commit('storeUser', users[0])
        })
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
})
