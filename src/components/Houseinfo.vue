<template>
<div>
    <div> 
        <div class="house-info">
            <!-- Inserts home data from db as captions to each listing. -->
            <div @click="handleSelectingListing"  class="house-info-image-container">
                <img class="house-info-image" v-bind:src="house.image1">
            </div>
            <div  class="house-info-p-container">
                <div @click="handleSelectingListing" class="house-info-p">
                    <p><strong>{{house.bed}}</strong>bed  <strong>{{house.bath}}</strong>bath  <strong>{{house.home_size}}</strong>sqft  <strong>{{house.lot_size}}</strong>acre lot</p>
                    <p>{{house.street}}</p>
                    <p>{{house.city}}, {{house.state}} {{house.zip}}</p>
                    <p>${{house.price}} </p> 
                </div>
                <!-- If a realtor was logged in, show this div with edit/delete functions -->
                <div class="admin-edit-delete-container" v-if="this.$route.query.loggedIn && this.$attrs.isAdminPanel">
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
</div>
</template>


<script>
export default {
  name: "Houseinfo",
  props: ["house"],
  methods: {
        handleSelectingListing: function(){
            //   console.log(this.house)
            this.$emit("singleListingInfo", this.house)
        },
        handleEditListing: function(){
            console.log('edit listing is being triggered')
            this.$emit("editListing", this.house)
        },
        handleDeleteListing: function(){
            this.$emit("deletingListing", this.house.id)
        },
  }
}
</script>


<style scoped>  
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
.house-info{
    padding-top: 5px;
    padding-bottom: 10px;
}
.house-info-p-container{
    display: flex;
    justify-content: space-between;
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
.admin-edit-delete button :hover{
    opacity: .95;
}
</style>
