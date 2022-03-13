<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyPage from '@/components/MyPage.vue'

export default {
  name: 'MyPageView',
  components: {
    MyPage
  },
  created() {
    document.body.style.backgroundColor = "#FF0000";
  },
}
</script>
