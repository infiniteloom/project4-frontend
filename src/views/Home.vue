<template>
<div>

    <div class="home-body-container">
      <div class="home-body">
        <img id="home-wide-img" src="https://res.cloudinary.com/infiniteloom/image/upload/v1600093976/Unit%2004%20-%20Project%20-%20Haven/houses/wooden-wall-decor_dfkdfs.jpg">
      </div>
      <div>
        <Gridgallery/>  
      </div>
      
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Gridgallery from '@/components/Gridgallery.vue'

export default {
  name: 'Home',
  components: {
    Gridgallery
  },
  // props: ["housedata"] 
}
</script>

<style>
  .home-body-container{
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }
  #home-wide-img{
    width: 100%;
    max-width: 1200px;
  }
</style>
