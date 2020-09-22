<template>
  <div>
    <div class="home-body-container">
      <div class="home-body">

      <!-- Feature image contains search bar center and welcome message -->
        <Featureimage 
        @searching="searching($event)"
        :isHomeView="$attrs.isHomeView" />
        
      </div>
        <Brandsubtitle/>


      <!-- Grid gallery will render filtered listings if search text exists -->
      <div v-if="$attrs.searchText">
        <Gridgallery 
        :isHomeView="$attrs.isHomeView"
        :isAdminPanel="$attrs.isAdminPanel"
        @searching="searching"
        @singleListingInfo="passSingleListingInfo($event)"
        v-bind:houseData="filteredListings"/>  
      </div>

      <!-- Grid gallery will render all listings if no search text exists -->
      <div>
        <Gridgallery 
        v-if="!$attrs.searchText"
        :isHomeView="$attrs.isHomeView"
        :isAdminPanel="$attrs.isAdminPanel"
        @searching="searching"
        @singleListingInfo="passSingleListingInfo($event)"
        v-bind:houseData="houseData"/>  
      </div>

    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import Gridgallery from '@/components/Gridgallery.vue'
import Featureimage from '@/components/Featureimage.vue'
import Brandsubtitle from '@/components/Brandsubtitle.vue'

export default {
  name: 'Home',
  components: {
    Gridgallery,
    Featureimage,
    Brandsubtitle
  },
  data: function(){
    return{
      // Stores house data from local fetch to get all listings
      houseData: null,
    }
  },
  computed:{
    filteredListings: function () {
      console.log('this is ithe house data in the filterst listings', this.houseData)
      if(this.$attrs.searchText){
        return this.houseData.filter((listing) => {
          return listing.city.toLowerCase().includes(this.$attrs.searchText.toLowerCase()) 
          || listing.county.toLowerCase().includes(this.$attrs.searchText.toLowerCase()) 
          || listing.type.toLowerCase().includes(this.$attrs.searchText.toLowerCase()) 
          || listing.state.toLowerCase().includes(this.$attrs.searchText.toLowerCase())
          || listing.description.toLowerCase().includes(this.$attrs.searchText.toLowerCase())
          || listing.street.toLowerCase().includes(this.$attrs.searchText.toLowerCase())
        })
      }else{
        return ''
      }
    }
  },
  beforeMount: function(){
    fetch(`${this.$URL}/api/listings/`)
      .then(response => response.json())
      .then(data => {
        this.houseData = data.results
        console.log(this.houseData)
        this.$emit('houseData', data)
      })
  },
  methods: {
    passSingleListingInfo: function(event){
      console.log('passing single listing info from house info now in grid gallery', event)
      this.$emit('singleListingInfo', event)
    },
    searching: function(event){
      console.log('searching in home.vue ', event)
      this.$emit('searching', event)
    }
  }
}
</script>

<style>
.home-body-container{
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}

</style>
