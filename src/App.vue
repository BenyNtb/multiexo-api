<template>
  <div id="app">
    <div id="nav">
    <Accueil />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> -->
      
    </div>
    <router-view/>
  </div>
</template>

<script>
import Accueil from './components/Accueil.vue'
export default {
  components: {
    Accueil
  },
  mounted () {
    if (JSON.parse(localStorage.getItem('authToken')) != null) {
      if (Date.now() - JSON.parse(localStorage.getItem('authToken'))){ localStorage.removeItem('authToken') }
      else { this.$store.commit('handleAuthToken', JSON.parse(localStorage.getItem('authToken')).token) }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #dfac2e;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
