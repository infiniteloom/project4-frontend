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
    // Filter listings on home page based on search bar input 
    filteredListings: function () {
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
    // Fetches all house listings in database, emits to app.vue to distribute
    fetch(`${this.$URL}/api/listings/`)
      .then(response => response.json())
      .then(data => {
        this.houseData = data.results
        this.$emit('houseData', data)
      })
  },
  methods: {
    passSingleListingInfo: function(event){
      this.$emit('singleListingInfo', event)
    },
    searching: function(event){
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
