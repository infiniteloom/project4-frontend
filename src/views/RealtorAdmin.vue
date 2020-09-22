<template>
<div>
  <div class="admin-info-bar">
    <div>
      <p 
      v-if="length">
        Active Listings: 
        <span>{{length}}</span>
      </p>
    </div>
    <div class="admin-info-bar-functions">
      <p 
      class="create-link"
      v-if="length"
      @click="isCreateListing">
        Publish new listing
      </p>
      <p  v-if="length">
        Sort by: Newest
      </p>
    </div>
  </div>


  <!-- If realtor has no active listings display message:  -->
  <div class="is-no-listings" v-if="!length">
      <p>
        You have no active listings.
      </p>
      <p 
      class="create-link"
      @click="isCreateListing">
        Publish a new listing here.
      </p>
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
  computed:{
    // If there are no realtor listings, show the no-listings messages instead.
    length: function(){
      if(this.realtorListings){
        return this.realtorListings.length
      }else{
        return false
      }
    },
  },
  methods:{
    isCreateListing: function(){
      this.$emit('isCreateListing')
    },
    passSingleListingInfo: function(event){
      this.$emit('singleListingInfo', event)
    },
    editListing: function(event){
      this.$emit('editListing', event)
    },
    deleteListing: function(event){
      this.$emit('deleteListing', event)
    }
  }
}
</script>

<style>
.admin-info-bar{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
  width: 80%;
  padding-top: 15%;
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
.is-no-listings{
  text-align: center;
  margin: 0 auto;
  padding-top: 30%;
}
.create-link:hover{
  opacity: .7;
  cursor: pointer;
}
</style>