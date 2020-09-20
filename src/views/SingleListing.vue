<template>
<div>
    <div class="single-listing-view-container">
        <Houseinfo 
        v-if="singleListingInfo" 
        v-bind:house="singleListingInfo" 
        />
    </div>
    

</div>
<!-- 
// <div class="gallery-item" 
//       v-bind:key="house.id" 
//       v-for="house in houseData">
//       <Houseinfo 
//       v-bind:house="house"/> -->

</template>


<script>

import Houseinfo from '../components/Houseinfo.vue'

export default {
    name: 'SingleListing',
    components: {
        Houseinfo
    },
    props:["singleListingInfo"]
}
</script>

<style>
.single-listing-view-container{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    padding-top: 200px;
}
</style>