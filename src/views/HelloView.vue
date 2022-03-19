<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TrPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import TrPage from '@/components/HelloI18n.vue'

export default {
  name: 'TrPageView',
  components: {
    TrPage
  },
  created() {
    document.body.style.backgroundColor = "#FFFFFF";
  },
}
</script>
