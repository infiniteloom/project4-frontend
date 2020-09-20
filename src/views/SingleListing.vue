<template>
<div>
    <div class="single-listing-view-container">
        <Houseinfo 
        v-if="singleListingInfo" 
        v-bind:house="singleListingInfo" 
        />
    </div>
    <div class="single-listing-view-description">
        {{singleListingInfo.description}}
    </div>

</div>

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
    min-width: 300px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    padding-top: 200px;
}
.single-listing-view-description{
    margin: 0 auto;
    width: 60%;
    min-width: 300px;
    max-width: 600px;
}
</style>