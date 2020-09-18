<template>

  <div class="gallery-container">
    <!-- For each house in house listings, print all properties/values! -->
    <div class="gallery-item" v-bind:key="house.id" v-for="house in houseData">
      <!-- {{house}} -->
      <!-- <img v-bind:src="house.image1">
      <p>{{house.street}}</p>
      <p>{{house.city}}, {{house.state}} {{house.zip}}</p> -->
      <Houseinfo v-bind:house="house"/>
      </div>
  </div>

</template>




<script>
// Import info for the houses from the House Info component
import Houseinfo from './Houseinfo.vue';

export default {
  name: "Gridgallery",
  // houseData: null,
  components: {
    Houseinfo
  },
  data: function() {
    return {
      houseData: null
    }
  },
  beforeMount: function(){
    fetch('http://127.0.0.1:8000/api/listings/')
        .then(response => response.json())
        .then(data => {
            this.houseData = data.results
            console.log(data.results)
        })
  }
};
</script>

<style >
  .gallery-container{
    background-color: #fafafa;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 auto;
    justify-content: space-around;
    align-content: center;
  }
  .gallery-container p{
    font-size: .7fem;
  }

  .gallery-item{
    flex-basis: 25%;
    max-width: 400px;
    flex-grow: 1;
    height: auto;
    padding: 10px;
  }


</style>
