<template>
  <div>
    <div class="home-body-container">
      <div class="home-body">
        <Featureimage/>
      </div>
        <Brandsubtitle/>


      <!-- If search text exists: -->
      <div v-if="$attrs.searchText">
        <Gridgallery 
        :isAdminPanel="$attrs.isAdminPanel"
        @singleListingInfo="passSingleListingInfo($event)"
        v-bind:houseData="filteredListings"/>  
      </div>

      <div>
        <Gridgallery 
        v-if="!$attrs.searchText"
        :isAdminPanel="$attrs.isAdminPanel"
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
      console.log('this is the search text in the home vue in filtered listings', this.$attrs.searchText)
      return this.houseData.filter((listing) => {
          return listing.city.toLowerCase().includes(this.$attrs.searchText.toLowerCase()) 
          || listing.county.toLowerCase().includes(this.$attrs.searchText.toLowerCase()) 
          || listing.type.toLowerCase().includes(this.$attrs.searchText.toLowerCase()) 
          || listing.state.toLowerCase().includes(this.$attrs.searchText.toLowerCase())
          || listing.description.toLowerCase().includes(this.$attrs.searchText.toLowerCase())
          || listing.street.toLowerCase().includes(this.$attrs.searchText.toLowerCase())
      })
    }
  },
  beforeMount: function(){
    this.$attrs.isHomeView = true
    this.$attrs.isAdminPanel= false
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
