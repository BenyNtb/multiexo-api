<template>
<div
class="flex items-center justify-center w-full h-screen bg-gray-100 bg-opacity-25 max-w-screen z-20 absolute top-0 left-0"
@click="$emit('toggleRegisterOverlay', false)"
>

<div class="w-full max-w-3xl overflow-hidden rounded-lg shadow-lg sm:flex z-50" @click.stop>
    <div class="w-full bg-white sm:w-3/5">
    <div class="p-8">
        <h1 class="text-3xl font-black">REGISTER</h1>
        <p class="mt-2 mb-5 text-base leading-tight text-gray-600">
        Create an account to join our awesome
        community
        </p>
        <form @submit="submit">
        <label for="email" class="text-xs text-gray-500">email</label>
        <input
            id="email"
            name="email"
            class="block rounded-md w-full pb-1 m-auto mb-6 text-gray-700 bg-transparent border-b border-gray-500"
            type="text"
            placeholder
            v-model="email"
        />
        <label id="passowrd" class="text-xs text-gray-500">Password</label>
        <input
            id="password"
            name="password"
            class="block rounded-md w-full pb-1 m-auto mb-6 bg-transparent border-b border-gray-500 text-grey-700"
            type="password"
            placeholder
            v-model="password"
        />
        <label id="firstName" class="text-xs text-gray-500">first name</label>
        <input
            id="firstName"
            name="firstName"
            class="block rounded-md w-full pb-1 m-auto mb-6 bg-transparent border-b border-gray-500 text-grey-700"
            type="text"
            placeholder
            v-model="firstName"
        />
        <label id="lastName" class="text-xs text-gray-500">Last name</label>
        <input
            id="lastName"
            name="lastName"
            class="block rounded-md w-full pb-1 m-auto mb-6 bg-transparent border-b border-gray-500 text-grey-700"
            type="text"
            placeholder
            v-model="lastName"
        />
        <label id="picture" class="text-xs text-gray-500">Picture</label>
        <input
            id="picture"
            @change="handleInputFile"
            name="picture"
            class="block rounded-md w-full pb-1 m-auto mb-6 bg-transparent border-b border-gray-500 text-grey-700"
            type="file"
            placeholder
            accept=".png, .jpeg, .jpg"
            
        />
        <input
            class="w-full rounded-md pt-3 pb-3 text-white bg-indigo-500 shadow-lg cursor-pointer hover:bg-indigo-400"
            type="submit"
            value="Create account"
        />
        </form>
        <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">
            Already have an account?
            <span
            href="#"
            class="font-bold text-indigo-500 no-underline hover:text-indigo-400 cursor-pointer"
            @click="$emit('registerPopup', false)"
            >Sign in</span>
        </p>
        </div>
    </div>
    </div>
</div>
</div>
<!-- <div class="login-box">
        <h4>Register</h4>
        <hr/>
        <div class="alert alert-warning" v-if="error != null"><span class="white-text">{{ error.message }}</span></div>
        <p>Don't have an account? Register for one now</p>
         <form class="form-group">
            <div class="input-field">
                <label for="email">Email</label>
                <input id="email" type="text" class="form-control" v-model="email" required>
            </div>
            <div class="input-field">
                <label for="password">Password</label>
                <input id="password" type="password" class="form-control" v-model="pass" required>
            </div>
            <div class="center-align">
                <hr/>
                <button v-on:click="authenticate()" class="btn btn-primary btn-large">Register</button>
                <hr/>
                <p>Already have an account? - <router-link to="Login">Login Now</router-link></p> 
            </div>
        </form>
    </div> -->
</template>

<script>
import axios from "axios"
export default {
data () {
return {
    email: 'test@molengeek.com',
    password: 'test@moshop',
    firstName: 'Test',
    lastName: 'De Molengeek',
    picture: null,
}
},
methods: {
submit (e) {
e.preventDefault();
console.log(this.picture);
    let dataForm = new FormData();
    dataForm.append('email', this.email);
    dataForm.append('password', this.password);
    dataForm.append('firstname', this.firstName);
    dataForm.append('lastname', this.lastName);
    dataForm.append('picture', this.picture);
    console.log(dataForm)
    axios.post('https://api-moshop.molengeek.pro/api/v1/register', dataForm)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
},
handleInputFile (e) {
    this.picture = e.target.files[0];
    console.log(e.target.files)
}
}
}
</script>

<style >

</style>