<template>
    <nav class= "items-center">
        <router-link to="/">
            <span
                class="text-gray-300 transition duration-500 uppercase font-bold cursor-pointer hover:text-white">Home</span>
        </router-link>
        <div class="flex items-center space-x-6" v-if="authToken == null">
            <button>Login</button>
            <button>Register</button>
        </div>
        <div class="flex items-center space-x-6" v-if="authToken != null">
            <Profile />
        </div>
        <Login  />
    </nav>
</template>

<script>
    // import Login from './Navbar/Login.vue';

    import {
        mapState
    } from 'vuex'
    import Profile from './Navbar/Profile.vue';
    export default {
        components: {
            // Login,
            Profile,
        },
        
        computed: {
            ...mapState([
                'authToken',
            ])
        }
    }
</script>

<style>
</style>