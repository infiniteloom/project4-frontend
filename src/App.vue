<template>
  <div id="app">

    <div id="nav">
      <Header v-bind:URL="URL" />
    </div>
    <!-- {{houseData}} -->

    <div class="body-container">
      <router-view  @loggedIn="login($event)" />
    </div>
    <!-- <div v-bind:key="house.id" v-for="house in houseData">
        {{house}}
    </div> -->
      <Footer/>

  </div>
</template>



<script>
// Import the components from the corresponding .vue files 
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// Export this combination of components to be a vue parent component called 'App'
// Creates a full page view containing all designated components. 
// Helpful for repetitive components such as header, footer, etc. 
export default {
  name: 'App',
  URL: 'http://127.0.0.1:8000',
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      msg:'hello',
      loggedIn: false,
      tokens: {},
      houseData: null,
      URL: 'http://127.0.0.1:8000'
    }
  },
  methods:{
    login: function(event){
      this.loggedIn = true
      this.tokens = event
      this.$router.push('/')
    }
  },
  beforeMount: function(){
    // this.houseData = this.$getHouseData()
    // fetch(`http://127.0.0.1:8000/api/listings/`)
    // // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(data => {
    //       this.houseData = data
    //       console.log(data)
    //   })
  }  
  // beforeMount: function (){
  //   this.$axios.get('http://127.0.0.1:8000/api/listings/')
  //   .then(res => {
  //     this.houseData = res.data
  //     // this.$globalHouseData = res.data
  //     console.log(res.data)
  //   })
  //   // .then(console.log(` this is global hosue data: ${this.$globalHouseData}`))
  // }
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
  /* ********************* */
  margin: -70px auto; 
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;     
  width: 100%;
  max-width: 1200px;
}
</style>
