<template>

  <div class="gallery-container">
    <!-- For each house in house listings, print all properties/values! -->
    <div class="gallery-item" 


    v-bind:key="`${i}-${house.id}`" 
    v-for="(house, i) in houseData">
      <Houseinfo 
      :isHomeView="$attrs.isHomeView"
      :isAdminPanel="$attrs.isAdminPanel"
      @searching="searching($event)"
      @editListing="passEditListing($event)"
      @deletingListing="passDeletingListing($event)"
      @singleListingInfo="passSingleListingInfo($event)"
      v-bind:house="house"/>
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
  props: ['houseData'],
  methods: {
    selectSingleListing: function (event){
      this.$attrs.house = this.houseData[event.target.id] 
    },
    passSingleListingInfo: function(event){
      this.$emit('singleListingInfo', event)
    },
    passDeletingListing: function(event){
      this.$emit('deletingListing', event)
    },
    passEditListing: function(event){
      this.$emit('editListing', event)
    },
    searching: function(event){
      this.$emit('searching', event)
    }
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
  max-width: 400px;
  min-width: 300px;
  height: auto;
  padding: 10px;
}
</style>
