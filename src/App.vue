<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/mypage">MyPage</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->

  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
              <router-link @click="homeClick" :class="homeLinkClass" to="/">Home</router-link> 
          </li>
          <li class="nav-item">
              <router-link @click="mypageClick" :class="mypageLinkClass" to="/mypage">MyPage</router-link>
          </li>
          <li class="nav-item">
              <router-link @click="aboutClick" :class="aboutLinkClass" to="/about">About</router-link>
          </li>  
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Link</a></li>
              <li><a class="dropdown-item" href="#">Another link</a></li>
              <li><a class="dropdown-item" href="#">A third link</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>


export default {
  name: 'TST',
  props: {
    msg: String
  },
  data() {
    return {
    homeLinkClass: 'nav-link',
    mypageLinkClass: 'nav-link',
    aboutLinkClass: 'nav-link'
    }
  },
  created: function(){

    var currentUrl = window.location.pathname;

    console.log(currentUrl);

  },
  changed: function(){

    var currentUrl = window.location.pathname;

    console.log(currentUrl);

  },
  methods: {
    homeClick()
    {
      this.homeLinkClass = 'nav-link active'
      this.mypageLinkClass = 'nav-link'
      this.aboutLinkClass = 'nav-link'
    },
    mypageClick()
    {
      this.homeLinkClass = 'nav-link'
      this.mypageLinkClass = 'nav-link active'
      this.aboutLinkClass = 'nav-link'
    },
    aboutClick()
    {
      this.homeLinkClass = 'nav-link'
      this.mypageLinkClass = 'nav-link'
      this.aboutLinkClass = 'nav-link active'
    }
  },
    watch:{
    $route (to, from){
        this.show = false;
        console.log(to);
        if(to.name === 'about')
        {
          console.log("IS ABOUT");
        }
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
  
  color: #2c3e50;
}

nav {

  padding: 30px;
  background: #000000;
  text: #FFFFFF;
  }

nav a {
  font-weight: bold;
  color: #999999;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>