<template>
<div>
  <div class="admin-info-bar">
    <div>
      <p>Active Listings: <span>{{realtorListings.length}}</span></p>
    </div>
    <div class="admin-info-bar-functions">
      <p 
        @click="isCreateListing">
        New listing
      </p>
      <p>
        Sort by: Newest
      </p>
    </div>
  </div>
  <Gridgallery 
  :isAdminPanel="isAdminPanel"
  @editListing="editListing($event)"
  @deletingListing="deleteListing($event)"
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
    isCreateListing: function(){
      console.log('this is the create new listing trigger in editcreatelisting page')
      this.$emit('isCreateListing')
    },
    passSingleListingInfo: function(event){
      console.log('passing single listing info from house info now in grid gallery', event)
      this.$emit('singleListingInfo', event)
    },
    editListing: function(event){
      console.log('this is the edit listing buttons event: ', event)
      this.$emit('editListing', event)
    },
    deleteListing: function(event){
      console.log('reaching realtor admin delete function', event)
      console.log(`the url is deleting ${this.$URL}/api/listings/${event}/`)
      fetch(`${this.$URL}/api/listings/${event}/`, {
          method: "DELETE",
          headers:{
              "Content-Type": "application/json",
              "Authorization" : `JWT ${this.$route.query.user.token}`
          }
      })
      // Emit to app.vue that a listing has been deleted to trigger a refresh of this.realtorListings prop.
      this.$emit('refreshRealtorListings', event)
    }
  }
}
</script>

<style>
.admin-info-bar{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 100px;
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
  background-color: transparent;
  border-style: none;

  line-height: 1.5;
  padding: 0 10px 0 10px;
  font-size: 1em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.admin-info-bar-functions p:hover{
  opacity: .4;
  cursor: pointer;
}
</style>