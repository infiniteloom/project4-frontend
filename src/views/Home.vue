<template>
  <div class="home">
    <img alt="Mockup of grid gallery" src="https://res.cloudinary.com/infiniteloom/image/upload/v1600367647/Unit%2004%20-%20Project%20-%20Haven/Web_Listings_List_copy_nur1as.png">
    <HelloWorld msg="All listings here in grid gallery view "/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
