<template>
  <div id="app">

    <div id="nav">
      <Header v-bind:loggedIn="loggedIn"  @logout="logout"  />
    </div>
    <!-- {{tokens.id}}
    {{tokens.token}} -->
    <div class="body-container">
      <router-view :realtorListings="realtorListings" :loggedIn="loggedIn" @loggedIn="login($event)"/>
    </div>

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
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      loggedIn: false,
      tokens: {},
      houseData: null,
      realtorListings: [],
    }
  },
  methods:{
    login: function(event){
      this.tokens = event
      // console.log(`thisis the event login tokens before condition: ${this.tokens}`)

      if(this.tokens.token){
        this.loggedIn = true
        console.log('these are the tokens passed from the log in ${this.tokens}', this.tokens)
        // console.log(`${this.$URL}/api/realtor/${this.tokens.id}/listings/`)
      // If user logs in successfully, fetch the listings associated with the realtor 
      // and pass along to child as a prop through routerview.
        fetch(`${this.$URL}/api/realtor/${this.tokens.id}/listings/`, {
          method: 'GET',
          headers:{
            "Content-Type": "application/json",
            "Authorization" : `JWT ${this.tokens.token}`
          }
        })
        .then(response => response.json())
        .then(data => {
            this.realtorListings = data.results 
            console.log(`this is what the fetch is returning in app.vue ${data.results[0].city}`)
        })
        this.$router.push({ path: 'Admin', query: { tokens: this.tokens, loggedIn: 'this.loggedIn' }})
      }
    },
    logout: function() {
      this.loggedIn = false
      this.tokens = {}
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
  margin: -70px auto; 
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;     
  width: 100%;
  max-width: 1200px;
  min-height: 78vh;
  min-height: -webkit-calc(100% - 186px);
  min-height: -moz-calc(100% - 186px);
}
</style>
