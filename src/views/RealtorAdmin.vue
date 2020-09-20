<template>
  <div>
    
    <div>
      <Gridgallery  v-bind:houseData="realtorListings" />
    </div>
  </div>
</template>


<script>
import Gridgallery from '../components/Gridgallery.vue'

export default{
  name: "RealtorAdmin",

  // realtorListings: [],
  components: {
    Gridgallery,
  },
  // props: ['loggedIn', 'realtorListings'],
  props: ['loggedIn', 'isAdminPanel'],
  data: function (){
    return {
  
    }
  },
  watch:{
    isAdminPanel: function(){
      if(this.isAdminPanel){
        console.log('triggering the update function based on is admin panel =true ')
        this.getAdminListings()
      }
    }
  },
  methods:{
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
    }
  }
}
</script>

<style>

</style>