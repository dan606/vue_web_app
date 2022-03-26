<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br>
    <p>{{ globData }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  created() {
    //document.body.style.backgroundColor = "#0000FF";
  },
  methods : {
  },
  data() {
    return
    {
      globData: this.$root.globalData
    }
  }
}
</script>