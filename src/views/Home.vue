<template>
<div>

    <div class="body-container">
      <Gridgallery v-bind:houses="housedata"/>  
            <!-- Binds to the 'data' values in the script section below. 
            prop name 'testblock' is user created here? Value must equal name of data.  -->
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
  }
}
</script>
