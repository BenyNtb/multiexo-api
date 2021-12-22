<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      firstname: null,
      lastname: null,
      picture: null,
    }
  },
  computed: {
    ...mapState([
      'profile',
    ]),
  },
  methods: {
    handleInputFile (e) {
      this.picture = e.target.files[0]
    },
    submit () {
      if (this.firstname != null && this.lastname != null) {
        axios.put('https://api-moshop.molengeek.pro/api/v1/user',
          {
            firstname: this.firstname,
            lastname: this.lastname,
          },
          {
            headers: {
              'Authorization': 'Bearer ' + this.$store.state.authToken,
            }
          })
      }
      if (this.picture != null) {
        let formData = new FormData();
        formData.append("picture", this.picture)
        axios.put('https://api-moshop.molengeek.pro/api/v1/user/picture',
          formData,
          {
            headers: {
              'Authorization': 'Bearer ' + this.$store.state.authToken,
            }
          },
        )
      }
    }
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
  margin: 10px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

input {
  width: 60%;
  margin: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}

textarea {
  width: 75%;
  resize: vertical;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  height: 150px;
  margin: 15px;
}

ul {
  list-style: none;
}

#post-div {
  border: 3px solid #000;
  width: 500px;
  margin: auto;
  margin-bottom: 5px;
}
</style>
