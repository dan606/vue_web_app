<template>
  <div class="home">
    <TrPage/>
  </div>
  <HelloI18n/>
</template>

<script>
// @ is an alias to /src
import TrPage from '@/components/HelloI18nOld.vue'
import HelloI18n from "@/components/HelloI18n.vue";

export default {
  name: 'TrPageView',
  components: {
    TrPage,
    HelloI18n
  //  SwitchLocalePage
  },
  created() {
    //document.body.style.backgroundColor = "#FFFFFF";
  },
}
</script>
