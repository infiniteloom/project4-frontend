<template>
  <div>
    <div class="create-listing-container">
        <select class="input" name="category_id" @change="onChange($event)">
          <option class="input">--- Select House Type ---</option>
          <option value="Single Family">Single Family</option>
          <option value="Condominium">Condominium</option>
          <option value="Multi-family">Multi-family</option>
          <option value="Land">Land</option>
          <option value="Apartment">Apartment</option>
        </select>
        <b-field>
          <b-input placeholder="City" v-model="newListing.city" type="text"></b-input>
        </b-field>
        <b-field>
          <b-input placeholder="County" v-model="newListing.county" type="text"></b-input>
        </b-field>
        <b-field>
          <b-input placeholder="State" v-model="newListing.state" type="text"></b-input>
        </b-field>
        <b-field>
          <b-input placeholder="Zip" v-model="newListing.zip" type="text"></b-input>
        </b-field>
        <b-field>
          <b-input placeholder="Street" v-model="newListing.street" type="text"></b-input>
        </b-field>
        <b-field>  
          <b-input placeholder="Year built" v-model="newListing.year_built" type="text"></b-input>
        </b-field>
        <b-field>  
          <b-input placeholder="Bed" v-model="newListing.bed" type="text"></b-input>
        </b-field>
        <b-field>  
          <b-input placeholder="Bath" v-model="newListing.bath" type="text"></b-input>
        </b-field>
        <b-field>  
          <b-input placeholder="Home size (sq ft)" v-model="newListing.home_size" type="text"></b-input>
        </b-field>  
        <b-field>  
          <b-input placeholder="Lot size (acres)" v-model="newListing.lot_size" type="text"></b-input>
        </b-field>
        <b-field>  
          <b-input placeholder="Price" v-model="newListing.price" type="text"></b-input>
        </b-field>
        <b-field>  
          <b-input placeholder="Home Description" v-model="newListing.description" type="text"></b-input>
        </b-field>
        <b-field>  
          <b-input placeholder="Image URL: (http://www.cloudinary..." v-model="newListing.image1" type="text"></b-input>
        </b-field>
            <div class="form-button-container">
        <b-button @click="createNewListing">Publish Listing</b-button>
      </div>
    </div>

    <Gridgallery v-if="loggedIn" v-bind:houseData="realtorListings" />
  </div>



</template>


<script>
import Gridgallery from '../components/Gridgallery.vue'


export default{
  name: "RealtorAdmin",
  components: {
    Gridgallery
  },
  props: ['loggedIn', 'realtorListings'],
  data: function (){
    return {
      newListing: {
        type: '', 
        city: '',
        county: '',
        state: '',
        zip : '',
        street : null,
        year_built : '',
        bed: '',
        bath: '',
        home_size: '',
        lot_size : '',
        price: '',
        description: '',
        image1 : '',
        realtor : 2,
      }
    }
  },
  methods:{
    onChange(event) {
      console.log(event.target.value)
      this.newListing.type = event.target.value
    },
    createNewListing: function(){
      console.log(this.$route.query.tokens.token)
      fetch(`${this.$URL}/api/listings/`, {
            method: 'POST',
            headers:{
              "Content-Type": "application/json",
              "Authorization" : `JWT ${this.$route.query.tokens.token}`
            },
            body: JSON.stringify({
              type: this.newListing.type,
              city: this.newListing.city,
              county: this.newListing.county,
              state: this.newListing.state,
              zip: Number(this.newListing.zip),
              street: this.newListing.street,
              year_built: Number(this.newListing.year_built),
              bed: Number(this.newListing.bed),
              bath: Number(this.newListing.bath),
              home_size: Number(this.newListing.home_size),
              lot_size: parseFloat(this.newListing.lot_size),
              price: parseFloat(this.newListing.price),
              description: this.newListing.description,
              image1: this.newListing.image1,
              interested_buyers: [],
              realtor: this.$route.query.tokens.id
            })
          })
          .then(response => response.json())
          .then(data => {
              let createdListing = data
              console.log('this is what the fetch is returning from the create new listing', createdListing)
          })
          // .then(()=> {
          //   this.getListings()
          // })
    }
  }
}
</script>

<style>
.create-listing-msg{
    padding: 30px;
}
.create-listing-msg p{
    text-align: center;
}
.create-listing-container{
    width: 50%;
    min-width: 350px;
    margin: 0 auto; 
    padding: 100px 20px 100px 20px;
}
.form-button-container button{
  width: 100%;
  margin: 0 auto;
  color: white;
  background-color: rgb(73, 73, 73);
}
</style>