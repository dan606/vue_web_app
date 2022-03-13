<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
              <router-link :class="homeLinkClass" to="/">Home</router-link> 
          </li>
          <li class="nav-item">
              <router-link :class="mypageLinkClass" to="/mypage">MyPage</router-link>
          </li>
          <li class="nav-item">
              <router-link :class="aboutLinkClass" to="/about">About</router-link>
          </li>  

<!--          
          <li class="nav-item">
            <b-nav-item class='active-class' to="/">Home</b-nav-item>
          </li>  

          <li class="nav-item">
            <b-nav-item class='active-class' to="/mypage">MyPage</b-nav-item> 
          </li>  

          <li class="nav-item">
            <b-nav-item to="/about">About</b-nav-item> 
          </li>  
-->

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Link</a></li>
              <li><router-link class="dropdown-item" to="/mypage">MyPage</router-link></li>
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

<!--
<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item class='active-class' to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item> 
     <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <b-nav-item href="/about" to="/about">Explore</b-nav-item>
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
  <router-view/>
</template>
-->

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
  },
    watch:{
    $route (to, from){
        console.log(to);
        if(to.name === 'about')
        {
          console.log("IS ABOUT");
          this.homeLinkClass = 'nav-link'
          this.mypageLinkClass = 'nav-link'
          this.aboutLinkClass = 'nav-link active'
        }

        if(to.name === 'mypage')
        {
          console.log("MY PAGE");
          this.homeLinkClass = 'nav-link'
          this.mypageLinkClass = 'nav-link active'
          this.aboutLinkClass = 'nav-link'
        }

        if(to.name === 'home')
        {
          console.log("HOME");
          this.homeLinkClass = 'nav-link active'
          this.mypageLinkClass = 'nav-link'
          this.aboutLinkClass = 'nav-link'
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