<template>
  <div class="about">
    <h1>{{responseAxios}}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AboutView',
  created() {
    //document.body.style.backgroundColor = "#0000FF";
  },
  methods : {
    setText()
    {
      console.log("SET TEXT");
        this.responseAxios = "LAMA";
    }
  },
  data(){
    return {
      lamaMsg: 'TEST',
      responseAxios: 'LAMA'
    }
  },
  mounted() {
    this.setText()
    var requestUrl = "http://ip-api.com/json";
      axios.get(requestUrl)
      .then(response => {
        this.responseAxios = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },
}
</script>