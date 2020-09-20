<template>
<div>
    <div class="create-listing-container">
        <select class="input" v-if="$attrs.isCreateListing" $name="category_id" @change="onChange($event)">
            <option class="input">{{placeholder.type}}</option>
            <option value="Single Family">Single Family</option>
            <option value="Condominium">Condominium</option>
            <option value="Multi-family">Multi-family</option>
            <option value="Land">Land</option>
            <option value="Apartment">Apartment</option>
        </select>
        <b-field>
            <b-input :placeholder="placeholder.type" v-model="newListing.type" type="text"></b-input>
        </b-field>
        <b-field>
            <b-input :placeholder="placeholder.county" v-model="newListing.county" type="text"></b-input>
        </b-field>
        <b-field>
            <b-input :placeholder="placeholder.state" v-model="newListing.state" type="text"></b-input>
        </b-field>
        <b-field>
            <b-input :placeholder="placeholder.zip" v-model="newListing.zip" type="text"></b-input>
        </b-field>
        <b-field>
            <b-input :placeholder="placeholder.street" v-model="newListing.street" type="text"></b-input>
        </b-field>
        <b-field>  
            <b-input :placeholder="placeholder.year_built" v-model="newListing.year_built" type="text"></b-input>
        </b-field>
        <b-field>  
            <b-input :placeholder="placeholder.bed" v-model="newListing.bed" type="text"></b-input>
        </b-field>
        <b-field>  
            <b-input :placeholder="placeholder.bath" v-model="newListing.bath" type="text"></b-input>
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
            <b-input placeholder="Image URL: (http://www.hudsonvalleyrealtors..." v-model="newListing.image1" type="text"></b-input>
        </b-field>
        <div class="form-button-container">
             <b-button @click="createNewListing">Publish Listing</b-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'CreateListing',
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
            },
            placeholder: { 
                type: '-- Select House Type --',
                city: 'City ',
                county: 'County ',
                state: 'State ',
                zip : 'Zip ',
                street : 'Street address',
                year_built : 'Year built',
                bed: 'Total bed',
                bath: 'Total bath',
                home_size: 'Home size (sq ft)',
                lot_size : 'Lot size (acres)',
                price: 'Price',
                description: 'Description',
                image1 : 'Image URL ',
                realtor : 2,
            }
        }
    },
    mounted: function() {
        if(this.$attrs.isEditListing){
            console.log('this is the listing we want to edit: ', this.$attrs.singleListingInfo.lot_size)

            let singleListing = this.$attrs.singleListingInfo
            console.log('this is single listing stuff', singleListing.lot_size.toString())
            this.placeholder.type= 'House type: ' + singleListing.type, 
            this.placeholder.city += ': ' + singleListing.city,
            this.placeholder.county += ': ' + singleListing.county,
            this.placeholder.state += ': ' + singleListing.state,
            this.placeholder.zip += ': ' + singleListing.zip,
            this.placeholder.street += ': ' + singleListing.street,
            this.placeholder.year_built += ': ' + singleListing.year_built,
            this.placeholder.bed += ': ' +  singleListing.bed.toString()
            this.placeholder.bath += ': ' +  singleListing.bath.toString()
            this.placeholder.home_size = ': ' + singleListing.home_size.toString() + 'sq ft',
            this.placeholder.lot_size = singleListing.lot_size.toString(),
            this.placeholder.price += ': $' + singleListing.price.toString(),
            this.placeholder.description =  singleListing.description,
            this.placeholder.image1 = singleListing.image1
        }
    },
    methods:{
        onChange(event) {
            console.log(event.target.value)
            this.newListing.type = event.target.value
        },
        handleLogin: function(){
            fetch(`${this.$URL}/auth/users/login/`, {
                method: 'post',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.username,
                    email: this.username,
                    password: this.password
                })
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.$emit("loggedIn", data)
            })
        },
        createNewListing: function(){
            // console.log('this is the url in create new listing ', this.$URL)
            // console.log('this is the token in create new listing ', this.$route.query.user.token)
            
            fetch(`${this.$URL}/api/listings/`, {
                method: 'POST',
                headers:{
                "Content-Type": "application/json",
                "Authorization" : `JWT ${this.$route.query.user.token}`
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
                realtor: this.$route.query.user.id
                })
            })
            .then(response => response.json())
            .then(data => {
                let createdListing = data
                console.log('Successfully created a new listing: ', createdListing)
                this.$emit("createdNewListing")
            })
        },
        editListing: function(){
            fetch(`${this.$URL}/api/listings/`, {
                method: 'PUT',
                headers:{
                "Content-Type": "application/json",
                "Authorization" : `JWT ${this.$route.query.user.token}`
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
                realtor: this.$route.query.user.id
                })
            })
            .then(response => response.json())
            .then(data => {
                let editedListing = data
                console.log('Successfully edited a listing: ', editedListing)
                this.$emit("editedNewListing")
            })
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