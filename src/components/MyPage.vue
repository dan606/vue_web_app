<template>
     <h1>{{ msg }}</h1>
      <h1>{{ lama }}</h1>
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