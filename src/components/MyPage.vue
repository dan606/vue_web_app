<template>
  <div class="page">
     <h1>{{ msg }}</h1>
      <h1>{{ lama }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  props: {
    msg: String
  },
  data() {
    return {
    lama: 'ale čau'
    }
  }
}
</script>

<style>
body {background-color: #222222;}
</style>