import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default  new Vuex.Store({
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
    login ({commit}, authData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDPFy5TNZYkiIMGJQBpabdAVUS5-Gbn0-s',{
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
        })
    },
    storeUser ({commit}, userData) {
      axios.post('https://ashok-38e5f.firebaseio.com/data.json', userData)
        .then(res => { console.log(res) })
    },
    fetchUser ({commit}) {
      axios.get('https://ashok-38e5f.firebaseio.com/data.json')
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
    getUser (state) {
      return state.user
    }
  }
})
