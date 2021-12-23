import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authToken: null,
    profile: null,
  },
  mutations: {
    handleAuthToken (state, token) {
      state.authToken = token
    },
    handleProfile (state, profile) {
      state.profile = profile
    },
  },
  actions: {
    editProfil({
      dispatch,
      state
    }, value) {
      axios.put('https://api-moshop.molengeek.pro/api/v1/user', value, {
        headers: {
          Authorization: "Bearer" + state.token
        }
      }).then((response) => {
        console.log(response);
        dispatch('getUser')
      })
    },
  },
  modules: {
  }
})
