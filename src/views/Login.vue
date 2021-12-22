<template>
  <div>
    <h1>Login</h1>
    <div class="login">
      <form @submit="submit">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>  
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    submit (e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append('email', this.email);
      formData.append('password', this.password);
      axios
        .post('https://api-moshop.molengeek.pro/api/v1/login', formData)
        .then(res => { console.log(res); })
        .catch(err => { console.log(err); })
    }
  }
}
</script>
