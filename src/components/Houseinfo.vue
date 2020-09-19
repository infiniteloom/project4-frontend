<template>
    <div class="house-info">
        <!-- Inserts home data from db as captions to each listing. -->
        <div class="house-info-image-container">
            <img class="house-info-image" v-bind:src="house.image1">
        </div>
        <div class="house-info-p-container">
            <p><strong>{{house.bed}}</strong>bed  <strong>{{house.bath}}</strong>bath  <strong>{{house.home_size}}</strong>sqft  <strong>{{house.lot_size}}</strong>acre lot</p>
            <p>{{house.street}}</p>
            <p>{{house.city}}, {{house.state}} {{house.zip}}</p>
            <p>${{house.price}} </p> 
        </div>
    </div>
    <!-- If a realtor was logged in, show this div with edit/delete functions -->
    <!-- <div class="admin-edit-delete-container" v-if="isRealtor">
        <button class="admin-edit-delete">
            Edit
        </button>
        <button class="admin-edit-delete">
            Delete
        </button>
        </div> -->
</template>


<script>
export default {
  name: "Houseinfo",
  props: ["house"]
}
</script>


<style scoped>  
.house-info-image-container{
    height: 200px;
    min-height: 100px;
    overflow:hidden;
}
.house-info-image{
    width: 100%;
    max-width: 300px;
}
.house-info{
    padding-top: 5px;
    padding-bottom: 10px;
}
.house-info-p-container p{
    font-size: .8em;
    text-align: left;;
}
</style>
