<template>
    <div >
        <!-- Search bar appears in the center of the home page  -->
        <div class="featured-container" >

          <div v-if="$attrs.isHomeView">

            <div class="home-message">
              <p>
                {{homeMessage}}
              </p>
            </div>
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
        search: '',
        homeMessage: "Discover your perfect home",
      }
    },
    methods: {
      searching: function(){
        this.$emit('searching', this.search)
      }
    }
}
</script>

<style>
#home-wide-img{
  width: 100%;
  filter: brightness(.85);
  min-width: 700px;
  overflow: hidden;
  max-width: 1200px;
  opacity: 1;
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
}

@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-moz-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-o-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-ms-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}

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
.home-message{
  position: absolute;
  top: 40%;
  left: 50%;
  z-index: 100;
  width: 100%;
  transform: translate(-50%, -50%);
}
.home-message p{
  font-size: 2em;
  line-height: 1em;
  font-weight: bold;
  color: white;
  margin: 0 0 5% 0;
}

</style>