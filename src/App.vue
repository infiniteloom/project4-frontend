<template>
  <div id="app">
    <div id="nav">
      <Header v-bind:URL="URL" />
    </div>

    <div class="body-container">
      <router-view  @loggedIn="login($event)" />
      <Gridgallery v-bind:housedata="housedata" />  
      <!-- Passes the housedata down to the child Gridgallery component as "houses" prop  -->
    </div>
      <Footer/>
  </div>
</template>

<script>
// Import the components from the corresponding .vue files 
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Gridgallery from './components/Gridgallery.vue'

// Export this combination of components to be a vue parent component called 'App'
// Creates a full page view containing all designated components. 
// Helpful for repetitive components such as header, footer, etc. 
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // Home
    Gridgallery
  },
  data: function() {
    return {
      msg:'hello',
      loggedIn: false,
      tokens: {},
      URL: 'http://127.0.0.1:8000',
      housedata: [
        {
          id:1,
          street: "222 Main Street",
          price: "$340,000", 
          bed: 3,
          bath: 2,
          home_size: 2300,
          lot_size: 2.4,
          city: 'Neversink',
          state: 'NY', 
          zip:'12991',
          image: 'https://res.cloudinary.com/infiniteloom/image/upload/v1600093976/Unit%2004%20-%20Project%20-%20Haven/houses/one_kings_lane_livingroom_vowmen.jpg'
        },
        {
          id:2,
          street: "33 Hawk Mountain Drive",
          price: "$970,000", 
          bed: 8,
          bath: 6,
          home_size: 3900,
          lot_size: .4,
          city: 'Plymouth',
          state: 'VT', 
          zip:'05060',
          image:'https://res.cloudinary.com/infiniteloom/image/upload/v1600093976/Unit%2004%20-%20Project%20-%20Haven/houses/b57cb3fe060b4e365f4756e99b2b4287w-c256612xd-w685_h860_q80_gg7dvw.jpg'
        },
        {
          id:3,
          street: "66 Hawk Mountain Drive",
          price: "$290,000", 
          bed: 2,
          bath: 2,
          home_size: 1900,
          lot_size: 3,
          city: 'Burlington',
          state: 'VT', 
          zip:'44331',
          image:'https://res.cloudinary.com/infiniteloom/image/upload/v1600093976/Unit%2004%20-%20Project%20-%20Haven/houses/b57cb3fe060b4e365f4756e99b2b4287w-c256612xd-w685_h860_q80_gg7dvw.jpg'
        },
      ]
    }
  },
  methods: {
    login: function(event){
      this.loggedIn = true
      this.tokens = event
      this.$router.push('/')
    }
  }

}
</script>

//  Global Styling
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

#nav {
  background-color: transparent;
  width: 100%;
  padding: 0;
  margin: 0 auto;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: rgb(34, 34, 34);
}

.body-container{
  margin: 0 auto;

}
</style>
