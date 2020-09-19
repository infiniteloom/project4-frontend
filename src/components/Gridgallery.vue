<template>

  <div class="gallery-container">
    <!-- For each house in house listings, print all properties/values! -->
    <div class="gallery-item" v-bind:key="house.id" v-for="house in houseData">
      <Houseinfo v-bind:house="house"/>
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
  props: ['houseData']
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
  max-width: 400px;
  min-width: 300px;
  height: auto;
  padding: 10px;
}
@media (max-width: 600px){
  .gallery-item{
    /* flex-basis: 35%; */
}

}

</style>
