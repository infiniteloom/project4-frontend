<template>
<div>
    <Houseinfo/>
    <p> testing </p>
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
    }
}
</script>

<style>

</style>