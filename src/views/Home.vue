<template>
  <div>
    <div class="home-body-container">
      <div class="home-body">
        <Featureimage/>
      </div>
        <Brandsubtitle/>
      <div>
        <Gridgallery/>  
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
