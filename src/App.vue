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

    var requestUrl = "http://ip-api.com/json";

    $.ajax({
      url: requestUrl,
      type: 'GET',
      success: function(json)
      {
        console.log("My country is: " + json.country);
      },
      error: function(err)
      {
        console.log("Request failed, error= " + err);
      }
    });


      axios.get('http://ip-api.com/json')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })


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