<template>
  <div class="home">
    <Gridgallery  v-bind:houseData="houseData" />
  </div>
</template>

<script>
// @ is an alias to /src
import Gridgallery from '../components/Gridgallery.vue'


export default{
  name: "RealtorAdmin",
  components: {
    Gridgallery
  },
  data: function(){
    return{
      houseData: null
    }
  },
  beforeMount: function(){
    fetch('http://127.0.0.1:8000/api/realtor/2/listings/')
        .then(response => response.json())
        .then(data => {
            this.houseData = data.results
            console.log(data.results)
        })
  }
}
</script>
