import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
    },
    logout (state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    setLogoutTimer ({commit}, expiretime) {
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
          dispatch('setLogoutTimer', res.data.expiresIn)
          const now = new Date()
          const expirationDate = new Date (now.getMilliseconds()+ res.data.expiresIn * 1000)
            localStorage.setItem('token', res.data.idToken)
            localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
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
          dispatch('setLogoutTimer', res.data.expiresIn)
          const now = new Date()
          const expirationDate = new Date (now.getMilliseconds()+ res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
        })
    },
    tryAuthLogin({commit}) {
      const token = localStorage.getItem('token')
      if(!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
       const  now = new Date()
      const userId = localStorage.getItem('userId')
      if(now >= expirationDate){
        return
      }
      commit('authUser', {
        token: token,
        userId: userId
      })
    },
    logout ({commit}) {
      commit('logout')
      localStorage.removeItem('token')
       localStorage.removeItem('userId')
        localStorage.removeItem('expirationDate')

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
    },
      isAuthenticated (state) {
        return state.idToken !== null
      }
  }
})
