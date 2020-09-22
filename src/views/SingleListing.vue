<template>
<div>
    <div v-bind:class="{'single-listing-view-container-grid':!$attrs.isSelectListing}">
        <Houseinfo 
        :isSelectListing="$attrs.isSelectListing"
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
.single-listing-view-container-grid{
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    padding-top: 200px;
}
.single-listing-view-description{
    margin: 0 auto;
    min-width: 300px;
    max-width: 600px;
    padding: 10px;
    font-size: .9em;
}

</style>