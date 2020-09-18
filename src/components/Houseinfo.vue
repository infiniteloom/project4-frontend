<template>
    <div class="house-info">
        <!-- Inserts home data from db as captions to each listing. -->
        <p><strong>{{house.bed}}</strong>bed  <strong>{{house.bath}}</strong>bath  <strong>{{house.home_size}}</strong>sqft  <strong>{{house.lot_size}}</strong>acre lot</p>
        <p>{{house.street}}</p>
        <p>{{house.city}}, {{house.state}} {{house.zip}}</p>
        <p>{{house.price}} </p>   
    </div>
</template>


<script>
export default {
  name: "Houseinfo",
  props: ["house"]
}
</script>


<style scoped>  
    .house-info{
        padding-top: 5px;
        padding-bottom: 10px;
    }
    .house-info p{
        font-size: .8em;
    }
</style>
