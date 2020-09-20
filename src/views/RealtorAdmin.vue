<template>
<div>
  <div class="admin-info-bar">
    <div>
      <p>Active Listings: <span>{{realtorListings.length}}</span></p>
    </div>
    <div class="admin-info-bar-functions">
      <p>Create New Listing</p>
      <p>Sort by: Newest</p>
    </div>
  </div>
  <Gridgallery 
  @singleListingInfo="passSingleListingInfo($event)"
  v-bind:houseData="realtorListings" />

</div>
</template>


<script>
import Gridgallery from '../components/Gridgallery.vue'

export default{
  name: "RealtorAdmin",

  components: {
    Gridgallery,
  },
  props: ['loggedIn', 'isAdminPanel', 'realtorListings'],
  data: function (){
    return {
      houseData: this.checkRealtorListings()
    }
  },
  methods:{
    checkRealtorListings: function(){
      if(this.realtorListings){
        this.houseData = this.realtorListings
      }
    },
    // onChange function watches for change in select field 
    onChange(event) {
      console.log(event.target.value)
      this.newListing.type = event.target.value
    },
    getAdminListings: function(){
      console.log('******************** running get admin listings')
      fetch(`${this.$URL}/api/realtor/${this.user.id}/listings/`, {
        method: 'GET',
        headers:{
          "Content-Type": "application/json",
          "Authorization" : `JWT ${this.user.token}`
        }
      })
      .then(response => response.json())
      .then(data => {
          this.realtorListings = data.results 
          console.log('this is the realtors listings!', this.realtorListings)
      })
    },
    passSingleListingInfo: function(event){
      console.log('passing single listing info from house info now in grid gallery', event)
      this.$emit('singleListingInfo', event)
    }
  }
}
</script>

<style>
.admin-info-bar{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 200px;
  padding-bottom: 10px;
  width: 80%;
  margin: 0 auto;
}
.admin-info-bar p span{
  font-weight: bold;
}
.admin-info-bar-functions{
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
.admin-info-bar-functions p{
  padding-left: 10px;
}
</style>