<template>
        <p>{{t('settings')}}</p>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email" v-model="mail">
        <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="password" v-model="password">
        <button type="button" class="btn btn-primary" @click="login">Login</button>
</template>

<script>
import { useI18n } from 'vue-i18n'
import axios from 'axios'

export default {
	name: "VueModal",
    setup() {
        const { t } = useI18n({
        inheritLocale: true,
        useScope: 'local'
        })

        // Something todo ..

        return { t }
    },
    data() 
    {
        return {
            mail: '',
            password: ''
        }
    },
    methods: {
        login() {
        console.log("send login")
        //this.infoColor = 'blue';
        axios({
            method: 'post',
            url: 'http://localhost:3000/login',
            data: {
            name: this.mail,
            password: this.password
            }
        });
      }
    }
}
</script>
