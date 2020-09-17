<template>
  <div class="gallery-container">
    <!-- For each house in house listings, print all properties/values! -->
    <div class="gallery-item" v-bind:key="house.id" v-for="house in houses" >
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
    justify-content: space-around;
    align-content: center;
  }

  .gallery-item{
    flex-basis: 25%;
    max-width: 400px;
    flex-grow: 1;
    height: auto;
    /* margin: 2%; */
    padding: 10px;
  }
</style>
