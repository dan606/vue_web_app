<template>
        <Transition>
            <div class="alert alert-success" v-show="isLoginSuccess" role="alert">
                Login success
            </div>
        </Transition>
        <Transition>
            <div class="alert alert-danger" v-show="isLoginAttempFailed" role="alert">
                Login {{loginFailedText}}
            </div>
        </Transition>
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
            isLoginSuccess: false,
            isLoginAttempFailed: false,
            loginFailedText: ''
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
                response => {
                    console.log(response.data);
                    if(response.data === 'success')
                    {
                        this.isLoginSuccess = true;
                        this.isLoginAttempFailed = false;
                    }
                    else
                    {
                        this.isLoginSuccess = false;
                        this.isLoginAttempFailed = true;
                        this.loginFailedText = response.data
                    }
                    setTimeout(() => {
                        this.isLoginSuccess = false;
                        this.isLoginAttempFailed = false;
                    }, 5000)
                }
            )
            .catch(
                error => {
                    console.log(error)
                    this.isLoginSuccess = false;
                    this.isLoginAttempFailed = true;
                    this.loginFailedText = 'failed, login server in unrechable'
                }
            )
        }
    }
}
</script>

<style>
    /* we will explain what these classes do next! */
    .v-enter-active,
    .v-leave-active {
    transition: opacity 1s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>