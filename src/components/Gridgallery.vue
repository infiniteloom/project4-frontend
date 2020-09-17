<template>
  <div class="gallery-container">
    <!-- For each house in house listings, print all properties/values! -->
    <div class="gallery-item" v-bind:key="house.id" v-for="house in houses">
      <img v-bind:src="house.image">
        <Houseinfo v-bind:house="house"/>
        <br/>
    </div>
  </div>

</template>

<script>
// Import info for the houses from the House Info component
import Houseinfo from './Houseinfo.vue';


export default {
  name: "Gridgallery",
  components: {
    Houseinfo
  },
  props: ["houses"] 
};
</script>

<style>
  .gallery-container{
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .gallery-item{
    width: 200px;
    height: auto;
    margin: 10px;

  }
</style>
