<template>
  <div class="home">
    <Gridgallery v-bind:houseData="realtorListings" />
  </div>
</template>

‹‹
<script>
import Gridgallery from '../components/Gridgallery.vue'


export default{
  name: "RealtorAdmin",
  components: {
    Gridgallery
  },
  props: ['loggedIn', 'realtorListings']
  // methods: {
  //   getListings: function(){
  //     console.log(this.$URL)
  //     // console.log(`this is the route query tokens: ${this.$route.query.tokens.id}`)
  //     fetch(`${this.$URL}/api/realtor/${this.$route.query.tokens.id}/listings/`, {
  //       method: 'GET',
  //       headers:{
  //           authorization : `JWT ${this.$route.query.tokens.token}`
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //         this.houseData = data.results 
  //         console.log(`this is what the fetch is returning in realtor admin: ${data.results}`)
  //     })

  //   }
  // }
}
</script>
