<template>
  <div>
    <div class="home-body-container">
      <div class="home-body">
        <Featureimage/>
      </div>
      <p id="brand-subtitle">Ha•ven /ˈhāvən/ (noun) a place of safety or refuge.</p>
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

export default {
  name: 'Home',
  components: {
    Gridgallery,
    Featureimage
  }
}
</script>

<style>
  .home-body-container{
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }
  #brand-subtitle{
    color: #a59494;
    font-style: italic;
    padding: 50px;
    width: 100%;
    text-align: center;
  }
</style>
