<template>
  <NavbarView/>
  <p>{{ global }}</p>
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
    methods: {
      lamaCall()
      {
        console.log("LAMA CALL")
      }
    },
    data() {
      return
      {
        globalData: "GLOBAL TEXT"
      }
    },
    mounted() {
      //this.loadUsers();
      //appendFile();
      console.log("MOUNTED APP")
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