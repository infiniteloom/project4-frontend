<template>
  <div>
    <div class="home-body-container">
      <div class="home-body">
        <Featureimage/>
      </div>
        <Brandsubtitle/>
      <div>
        <Gridgallery v-bind:houseData="houseData"/>  
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Gridgallery from '@/components/Gridgallery.vue'
import Featureimage from '@/components/Featureimage.vue'
import Brandsubtitle from '@/components/Brandsubtitle.vue'


export default {
  name: 'Home',
  components: {
    Gridgallery,
    Featureimage,
    Brandsubtitle
  },
  data: function(){
    return{
      houseData: null
    }
  },
  beforeMount: function(){
    fetch(`${this.$URL}/api/listings/`)
        .then(response => response.json())
        .then(data => {
            this.houseData = data.results
            console.log(data.results)
        })
  }
}
</script>

<style>
  .home-body-container{
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }

</style>
