<template>
    <div >
        <!-- Search bar appears in the center of the home page  -->
        <div class="featured-container" >

          <div>
            <b-field class="centered">
              <input 
              class="input search-bar"
              v-model="search"
              @keyup="searching"
              placeholder="Search county, zip, state..."
              type="search">
            </b-field>
          </div>

          <!-- Featured Image -->
          <img id="home-wide-img" src="https://res.cloudinary.com/infiniteloom/image/upload/v1600093976/Unit%2004%20-%20Project%20-%20Haven/houses/wooden-wall-decor_dfkdfs.jpg">
        </div>  
    </div>
</template>

<script>

export default {
    name: 'Featuredimage',
    data:function(){
      return{
        search: ''
      }
    },
    methods: {
      searching: function(){
        console.log('this is search text in feature image', this.search)
        this.$emit('searching', this.search)
      }
    }
}
</script>

<style>
#home-wide-img{
  width: 100%;
  /* max-width: 1200px; */
}
.featured-container {
  position: relative;
  text-align: center;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
}
</style>