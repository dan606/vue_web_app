<template>
        <h1>{{ $t("hello") }}</h1>
        <h2>{{ text }}</h2>
        <input type="email" class="form-control" id="emailInput" placeholder="email" v-model="mail">
        <input type="password" class="form-control" id="passwordInput" placeholder="password" v-model="password">
        <button type="button" class="btn btn-primary" @click="login">Login</button>
</template>

<script>
import axios from 'axios'
export default {
	name: "VueModal",
    data() 
    {
        return {
            mail: '',
            password: '',
            text: 'LAMPA'
        }
    },
    methods: {
        loadUsers() {
            console.log("get users")
            axios.get("http://localhost:3000/users")
            .then(
                response => {this.text = response}
            )
            .catch(
                error => console.log(error)
            )
        },
        login() {

            axios.post("http://localhost:3000/login", {
                name: this.mail,
                password: this.password
            })
            .then(
                response => {this.text = response.data, console.log(response)}
            )
            .catch(
                error => console.log(error)
            )
        }
    }
}
</script>
