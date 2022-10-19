<template>
  <link rel="stylesheet" type="text/css" :href=cssPath>
  <NavbarView/>
  <router-view/>
</template>

<script>
  import NavbarView from './components/Navbar'
  import HelloI18n from "./components/HelloI18n.vue";

  export default {
    name: 'App',
    props: {
      msg: String
    },
    components: {
      NavbarView,
      HelloI18n
    },
    data() {
      return {
      cssPath: ''
      }
    },
    methods: {
      setTheme1() {
        console.log("SET THEME 1");
        this.cssPath = "css/theme1.css";
      },
      setTheme2() {
        console.log("SET THEME 2");
        this.cssPath = "css/theme2.css";
      },
      getMediaPreference() {
        const hasDarkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (hasDarkPreference) {
          return "dark-theme";
        } else {
          return "light-theme";
        }
      },
      setTheme(theme) {
        localStorage.setItem("user-theme", theme);
        this.userTheme = theme;
        document.documentElement.className = theme;
      },
      toggleTheme() {
        const activeTheme = localStorage.getItem("user-theme");
        if (activeTheme === "light-theme") {
          this.setTheme("dark-theme");
        } else {
          this.setTheme("light-theme");
        }
      },
      getTheme() {
        return localStorage.getItem("user-theme");
      }
    },
    mounted() {
      console.log("MOUNTED APP");

      console.log(this.getMediaPreference());

      const initUserTheme = this.getTheme() || this.getMediaPreference();
      this.setTheme(initUserTheme);

      if (localStorage.cssPath) {
        this.cssPath = localStorage.cssPath;
      }
      else {
        let date_ob = new Date();

        if(date_ob.getHours() > 0 && date_ob.getHours() < 7 || date_ob.getHours() >= 21)
        {
          this.setTheme2();
        }
        else
        {
          this.setTheme1();
        }
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