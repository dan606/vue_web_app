<template>
  <link rel="stylesheet" type="text/css" :href=cssPath>
  <NavbarView/>
  <router-view/>
</template>

<script>
  import NavbarView from './components/Navbar'

  export default {
    name: 'App',
    props: {
      msg: String
    },
    components: {
      NavbarView
    },
    data() {
      return {
      cssPath: '',
      globalData: 'GLOBAL TEXT'
      }
    },
    methods: {
      lamaCall()
      {
        console.log("LAMA CALL");
      },
      setTheme1() {
        console.log("SET THEME 1");
        this.cssPath = "css/theme1.css";
      },
      setTheme2() {
        console.log("SET THEME 2");
        this.cssPath = "css/theme2.css";
      }
    },
    mounted() {
      console.log("MOUNTED APP");

      if (localStorage.cssPath) {
        this.cssPath = localStorage.cssPath;
      }
      else {
        this.setTheme1();
      }
    },
    watch: {
      cssPath(newCssPath) {
        localStorage.cssPath = newCssPath;
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
    /*color: #2c3e50;*/
  }
</style>