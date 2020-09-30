<template>
<div>
    <div v-bind:class="{'house-info':true, 'single-listing-view-container': $attrs.isSelectListing}">
        <!-- Inserts home data from db as captions to each listing. -->
        <div @click="handleSelectingListing" v-bind:class="{'house-info-image-container': !$attrs.isSelectListing, 'is-single-house-hover': ($attrs.isAdminPanel || $attrs.isHomeView)}">
            <img v-bind:class="{'house-info-image': !$attrs.isSelectListing}" v-bind:src="house.image1">
        </div>

        <!-- If in single listing view, image becomes a background image for sake of scale -->
        <!-- <div v-if="$attrs.isSelectListing" class="house-info-image-container-select" v-bind:style="{ backgroundImage: 'url(' + house.image1 + ')' }">
        </div> -->


        <div v-bind:class="{'house-info-p-container': !$attrs.isSelectListing}">
            <div v-if="!$attrs.isSelectListing" @click="handleSelectingListing" v-bind:class="{'house-info-p': !$attrs.isSelectListing, 'house-info-p-select': $attrs.isSelectListing}">
                <p><strong>{{house.bed}}</strong>bed  <strong>{{house.bath}}</strong>bath  <strong>{{house.home_size}}</strong>sqft  <strong>{{house.lot_size}}</strong>acre lot</p>
                <p>{{house.street}}</p>
                <p>{{house.city}}, {{house.state}} {{house.zip}}</p>
                <p>${{house.price}} </p> 
            </div>
            <div v-if="$attrs.isSelectListing" class="house-info-p-select">
                <p><strong>{{house.bed}}</strong>bed  <strong>{{house.bath}}</strong>bath  <strong>{{house.home_size}}</strong>sqft  <strong>{{house.lot_size}}</strong>acre lot</p>
                <p>{{house.street}}, {{house.city}}, {{house.state}} {{house.zip}}</p>
                <p>{{house.county}}, {{house.year_built}}</p>
                <p>${{house.price}} </p> 
            </div>
            <!-- If a realtor was logged in, show this div with edit/delete functions -->
            <div class="admin-edit-delete-container" v-if="this.$route.query.loggedIn && this.$attrs.isAdminPanel || this.$attrs.loggedIn && this.$attrs.isSelectListing">
                <button @click="handleEditListing" class="admin-edit-delete">
                    Edit
                </button>
                <button @click="handleDeleteListing" class="admin-edit-delete">
                    Delete
                </button>
            </div>
        </div>
    </div>
</div>
</template>


<script>
export default {
  name: "Houseinfo",
  props: ["house"],
  methods: {
        handleSelectingListing: function(){
            this.$emit("singleListingInfo", this.house)
        },
        handleEditListing: function(){
            this.$emit("editListing", this.house)
        },
        handleDeleteListing: function(){
            this.$emit("deletingListing", this.house.id)
        },
  }
}
</script>


<style>  
.house-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 10px;
    /* width: 90%; */
}
.house-info-container{
    display: flex;
}
.house-info-image-container{
    height: 200px;
    min-height: 100px;
    overflow:hidden;
}
.house-info-image{
    width: 100%;
    max-width: 350px;
}
.single-listing-view-container{
    width: 90%;
    max-width: 600px;
    overflow: hidden;
    margin: 0 auto;
}
.single-listing-view-image{
    width: 90%
}
.is-single-house-hover:hover{
    opacity: .9;
    cursor: pointer;
}
.house-info-p-container{
    display: flex;
    justify-content: space-between;
}
.house-info-p-select{
    font-size: .9em;
    text-align: left;
    padding: 10px;
}
.house-info-p{
    font-size: .8em;
    text-align: left;
}
.admin-edit-delete-container{
    display: flex;
    align-items: flex-start;
}
.admin-edit-delete{
    border-style: none;
    background-color: transparent;
    margin: 0;
}
.admin-edit-delete:hover{
    opacity: .6;
    cursor: pointer;
}
</style>
