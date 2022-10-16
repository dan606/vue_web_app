<template>
      <p class="LAMA">{{ msg }}</p>
      <br>
      <p>{{ users }}</p>
      <p>{{ $t("description") }}</p>
      <br>
      <h1 :style="{ color: infoColor}">{{ info }}</h1>
      <p>{{ cssPath }}</p>
      <br>
      <button id="btn" type="button" class="btn btn-primary" v-on:click="sendPost">Send post</button> 
</template>


<script>
import { useI18n } from 'vue-i18n'
import axios from 'axios'

export default {
  name: 'MyPage',
  props: {
    msg: String
  },
  data() {
    return {
    info: this.foo,
    users: {},
    infoColor: 'red',
    }
  },
  methods: {
    loadUsers() {
      console.log("get users")
      axios.get("http://localhost:3000/users")
      .then(
          response => {this.users = response}
      )
      .catch(
          error => console.log(error)
      )
    },
    sendPost() {
      this.$i18n.locale = "en";
      console.log("send post")
      this.infoColor = 'blue';
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          name: 'Finn',
          password: 'Williams'
        }
      });
    }
  },
  mounted() {
      this.loadUsers();
      console.log("MOUNTED MY PAGE");
  },
  created() {
    //document.body.style.backgroundColor = "#FF0000";
    //document.body.style = ".LAMA { backgroundColor: #FF0000; }";
    console.log("CREATED")
  }
}

</script>