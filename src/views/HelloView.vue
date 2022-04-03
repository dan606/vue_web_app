<template>
  <div class="home">
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
    //document.body.style.backgroundColor = "#FFFFFF";
  },
}
</script>
