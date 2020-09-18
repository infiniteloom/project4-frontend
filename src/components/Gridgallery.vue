<template>

  <div class="gallery-container">
    <!-- {{$globalHouseData()}} -->
    {{houseData}}
    <!-- For each house in house listings, print all properties/values! -->
    <!-- <div class="gallery-item" v-bind:key="house.results.id" v-for="house in houseData">
      </div> -->
      <div>
      <!-- {{house}} -->
      <!-- <img v-bind:src="house.image1"> -->
      <!-- <Houseinfo/>> -->
      <!-- <Houseinfo v-bind:house="house"/>   -->
    </div>
  </div>

</template>




<script>
// Import info for the houses from the House Info component
// import Houseinfo from './Houseinfo.vue';

export default {
  name: "Gridgallery",
  houseData: null,
  components: {
    // Houseinfo
  },
  beforeMount: function(){
    this.houseData = this.$getHouseData()
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
