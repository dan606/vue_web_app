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
          <button id="btn4" type="button" class="btn btn-primary" v-on:click="this.$root.setTheme1();">Switch theme1</button>      
          <button id="btn5" type="button" class="btn btn-primary" v-on:click="this.$root.setTheme2();">Switch theme2</button>    
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Projects</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Link</a></li>
              <li><router-link class="dropdown-item" to="/mypage">MyPage</router-link></li>
              <li><router-link class="dropdown-item" to="/hello">hello</router-link></li>
              <li><a class="dropdown-item" href="#">A third link</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <LocaleSwitcher/>
  </nav>
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher.vue";
export default {
  name: 'Navbar',
  components: {
    LocaleSwitcher
  },
    data() {
    return {
    homeLinkClass: 'nav-link',
    mypageLinkClass: 'nav-link',
    aboutLinkClass: 'nav-link'
    }
  },
  watch: {
    $route (to, from) {
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
nav {
  padding: 100px;
  background: #FF0000;
  /* text: #FF0000; */
}

nav a {
  font-weight: bold;
  color: #999999;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>