<template>
<div>
    
    <div class="create-listing-container">

        <div class="create-edit-header-msg">
            <p v-if="$attrs.isCreateListing">
                Enter details to publish a new listing. 
            </p>
            <p  v-if="$attrs.isEditListing">
                Enter details to update your listing. 
            </p>
        </div>

        <!-- Total beds -->
        <div class="edit-create-cols-container">
            <div class="edit-create-col-l-web">

                <!-- Home details label -->
                <p class="edit-create-field-labels"> 
                    Home description
                </p>

                <div class="beds-baths-container">
                    <b-field  class="create-edit-fields has-addons">  
                        <p class="control beds-baths">
                            <b-input :placeholder="placeholder.bed" v-model="newListing.bed" type="text"></b-input>
                        <p class="control beds-baths">
                            <a class="button is-static">
                            bedrooms
                            </a>
                        </p>
                    </b-field>

                    <!-- Total baths -->
                    <b-field  class="create-edit-fields has-addons">  
                        <p class="control">
                            <b-input :placeholder="placeholder.bath" v-model="newListing.bath" type="text"></b-input>
                        </p>
                        <p class="control">
                            <a class="button is-static">
                            bathrooms
                            </a>
                        </p>
                    </b-field>
                </div>
                <!-- Home Size  -->
                <b-field  class="create-edit-fields has-addons">  
                    <p class="control">
                        <b-input :placeholder="placeholder.home_size" v-model="newListing.home_size" type="text"></b-input>
                    </p>
                    <p class="control">
                        <a class="button is-static">
                        sq ft
                        </a>
                    </p>
                </b-field>  
                
                <!-- House type (Select Menu)-->
                <b-field  class="create-edit-fields">
                    <select class="input" name="housetype" @change="selectType($event)">
                        <option class="input">{{placeholder.type}}</option>
                        <option value="Single Family">Single Family</option>
                        <option value="Condominium">Condominium</option>
                        <option value="Multi-family">Multi-family</option>
                        <option value="Land">Land</option>
                        <option value="Apartment">Apartment</option>
                    </select>
                </b-field>

                <!-- Year Built -->
                <b-field  class="create-edit-fields">  
                    <b-input :placeholder="placeholder.year_built" v-model="newListing.year_built" type="text"></b-input>
                </b-field>

                <p class="edit-create-field-labels"> 
                    Price (USD)
                </p>
                <!-- Home Price -->
                <b-field  class="create-edit-fields">  
                    <b-input :placeholder="placeholder.price" v-model="newListing.price" type="text"></b-input>
                </b-field>
            </div>
            




            <div class="edit-create-col-r-web">
                
                <!-- Property information label -->
                <p class="edit-create-field-labels"> 
                    Property information
                </p>

                <!-- Lot Size -->
                <b-field  class="create-edit-fields has-addons">  
                    <p class="control">
                        <b-input :placeholder="placeholder.lot_size" v-model="newListing.lot_size" type="text"></b-input>
                    </p>
                    <p class="control">
                        <a class="button is-static">
                        acres
                        </a>
                    </p>
                </b-field>

                <!-- Street address -->
                <b-field  class="create-edit-fields">
                    <b-input :placeholder="placeholder.street" v-model="newListing.street" type="text"></b-input>
                </b-field>

                <!-- County -->
                <b-field class="create-edit-fields">
                    <b-input :placeholder="placeholder.county" v-model="newListing.county" type="text"></b-input>
                </b-field>

                <!-- State (Select Menu)-->
                <b-field  class="create-edit-fields">
                    <select class="input" name="state" @change="selectState($event)">
                        <option class="input">{{placeholder.state}}</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </b-field>

                <!-- Zip code -->
                <b-field  class="create-edit-fields">
                    <b-input :placeholder="placeholder.zip" v-model="newListing.zip" type="text"></b-input>
                </b-field>


                <!-- Image URL -->
                <!-- Description label -->
                <p class="edit-create-field-labels"> 
                    Image URL:
                </p>
                <b-field  class="create-edit-fields">  
                    <b-input :placeholder="placeholder.image1" v-model="newListing.image1" type="text"></b-input>
                </b-field>

            </div>
        </div>

            <div class="create-edit-description">
                <!-- Description label -->
                <p class="edit-create-field-labels"> 
                    Description:
                </p>
                <!-- Home Description -->
                <b-field  class="create-edit-fields">  
                    <!-- <b-input :placeholder="placeholder.description" v-model="newListing.description" type="text"></b-input> -->
                    <textarea class="textarea" :placeholder="placeholder.description" v-model="newListing.description" type="text" rows="10"></textarea>
                </b-field>
            </div>


            <!-- Edit button -->
            <div class="form-button-container" v-if="$attrs.isCreateListing">
                <b-button @click="createNewListing">Publish listing</b-button>
            </div>

            <!-- Create button -->
            <div class="form-button-container" v-if="$attrs.isEditListing">
                <b-button @click="editListing">Publish changes</b-button>
            </div>
            <p class="privacy-policy">
                By publishing you agree to <br/>
                Haven's Privacy Policy and Terms of Use.
            </p>

    </div>
</div>
</template>

<script>
export default {
    name: 'EditCreateListing',
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
                type: '-- Select Property Type --',
                city: 'City ',
                county: 'County ',
                state: '-- Select State --',
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
            // console.log('this is the listing we want to edit: ', this.$attrs.singleListingInfo.lot_size)
            let singleListing = this.$attrs.singleListingInfo
            // console.log('this is single listing stuff', singleListing.lot_size.toString())
            this.newListing.type= singleListing.type, 
            this.newListing.city = singleListing.city,
            this.newListing.county = singleListing.county,
            this.newListing.state = singleListing.state,
            this.newListing.zip = singleListing.zip,
            this.newListing.street = singleListing.street,
            this.newListing.year_built = singleListing.year_built,
            this.newListing.bed = singleListing.bed.toString()
            this.newListing.bath = singleListing.bath.toString()
            this.newListing.home_size = singleListing.home_size.toString(),
            this.newListing.lot_size = singleListing.lot_size.toString(),
            this.newListing.price = singleListing.price.toString(),
            this.newListing.description = singleListing.description,
            this.newListing.image1 = singleListing.image1
        }
    },
    methods:{
        selectType(event) {
            // console.log(event.target.value)
            this.newListing.type = event.target.value
        },
        selectState: function(event){
            // console.log(event.target.value)
            this.newListing.state = event.target.value
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
            .then(() => {
                // let createdListing = data
                // console.log('Successfully created a new listing: ', createdListing)
                this.$emit("createdNewListing")
            })
        },
        editListing: function(){         
            const id = this.$attrs.singleListingInfo.id
            
            fetch(`${this.$URL}/api/listings/${id}/`, {
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
                console.log('Successfully edited the listing: ', editedListing)
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
    width: 70%;
    min-width: 350px;
    max-width: 700px;
    margin: 0 auto; 
    padding: 100px 20px 100px 20px;
}
.create-edit-header-msg{
    text-align: center;
    padding: 10% 0px 50px 0;
    opacity: .6;
}
.create-edit-fields label{
    font-size: .8em;
}
.form-button-container button{
    width: 100%;
    margin: 0 auto;
    color: white;
    background-color: rgb(73, 73, 73);
}
.edit-create-cols-container{
    display: flex;
    flex-direction: column;
}
.create-edit-description{
    padding-top: 30px;
}
.edit-create-field-labels{
    padding-bottom: 5px;
    padding-top: 20px;
    font-size: .8em;
    font-weight: bold;
}
@media only screen and (max-width: 700px){
    .beds-baths-container{
        display: flex;
        justify-content: space-between;
    }
    /* .beds-baths{
        width: 45%;
    } */
}
@media only screen and (min-width: 700px){
    .edit-create-cols-container{
        display: flex;
        flex-direction: row;
    }
    .edit-create-col-l-web{
        padding-right: 40px;
    }
    .edit-create-col-r-web{
        padding-left:40px;
        border-left: solid 1px lightgrey;
    }
}
.privacy-policy{
    padding-top: 20px;
    text-align: center;
    font-size: .8em;
}
</style>