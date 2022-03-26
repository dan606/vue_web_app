
<template>
      <link rel="stylesheet" type="text/css" :href=cssPath>
      <p class="LAMA">{{ msg }}</p>
      <br>
      <p>{{ users }}</p>
      <p>{{ t('message') }}</p>
      <br>
      <h1>{{ info }}</h1>
      <p>{{ cssPath }}</p>
      <br>
      <button id="btn" type="button" class="btn btn-primary" v-on:click="sendPost">Send post</button>
      <br>
      <button id="btn2" type="button" class="btn btn-primary" v-on:click="setTheme1">Switch theme1</button>      
      <button id="btn3" type="button" class="btn btn-primary" v-on:click="setTheme2">Switch theme2</button>      
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
    cssPath: ''
    }
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    // Something todo ..
    return { t }

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
      console.log("send post")
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          name: 'Finn',
          password: 'Williams'
        }
      });
    },
    setTheme1() {
      //console.log(cssPath);
      this.$root.lamaCall();
      // let file = document.createElement('link');
      // file.rel = 'stylesheet';
      // file.href = "assets/css/theme2.css";
      //document.head.appendChild(file)
      this.cssPath = "../assets/css/theme1.css";
    },
      setTheme2() {
      this.cssPath = "../assets/css/theme2.css";
    }
  },
  mounted() {
      this.loadUsers();
      //appendFile();
      console.log("MOUNTED MY PAGE");
      if (localStorage.cssPath) {
        this.cssPath = localStorage.cssPath;
    }
  },
  created() {
    //document.body.style.backgroundColor = "#FF0000";
    //document.body.style = ".LAMA { backgroundColor: #FF0000; }";
    console.log("CREATED")
  },
  watch: {
    cssPath(newCssPath) {
      localStorage.cssPath = newCssPath;
    }
  }
}

</script>