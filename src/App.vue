<template>
  <div id="app">

    <div id="nav">
      <Header 
      v-bind:loggedIn="loggedIn" 
      v-bind:user="user" 
      @isAdminPanel="handleAdminPanel($event)" 
      @isCreateListing="handleCreateListing($event)"
      @logout="handleLogout"  />
    </div>

    <div class="body-container">
      <router-view 
        :realtorListings="realtorListings" 
        :isAdminPanel="isAdminPanel" 
        :isCreateListing="isCreateListing"
        :isEditListing="isEditListing"
        :isSelectListing="isSelectListing"
        :loggedIn="loggedIn" 
        @createdNewListing="createdNewListing($event)"
        @loggedIn="handleLogin($event)"/>
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
      user: {},
      houseData: null,
      realtorListings: [],
      isAdminPanel: false,
      isCreateListing: false,
      isEditListing: false,
      isSelectListing: false
    }
  },
  methods:{
    handleLogin: function(event){
      this.user = event

      if(this.user.token){
        this.loggedIn = true
        this.getAdminListings()
        this.$router.push({ path: '/', query: { user: this.user, loggedIn: 'this.loggedIn', realtorListings: 'this.realtorListings' }})
        
      // If user logs in successfully, fetch the listings associated with the realtor 
      // and pass along to child as a prop through routerview.
        // fetch(`${this.$URL}/api/realtor/${this.user.id}/listings/`, {
        //   method: 'GET',
        //   headers:{
        //     "Content-Type": "application/json",
        //     "Authorization" : `JWT ${this.user.token}`
        //   }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     this.realtorListings = data.results 
        // })
        // this.$router.push({ path: 'Admin', query: { user: this.user, loggedIn: 'this.loggedIn' }})
      }
    },
    handleLogout: function() {
      this.loggedIn = false
      this.user = {}
      this.$router.push('/')
    },
    handleAdminPanel: function(){
      console.log('handle admin panel in app.vue is being called ')
      this.isAdminPanel = true
      this.isCreateListing = false
      this.isEditListing = false
      this.getAdminListings()

      console.log('realtor listings in handle admin panel : ', this.realtorListings)
      this.$router.push({ path: 'Admin', query: { user: this.user, realtorListings: this.realtorListings, isAdminPanel: this.isAdminPanel, loggedIn: 'this.loggedIn' }})
    },
    handleCreateListing: function(){
      this.isCreateListing = true
      this.isEditListing = false
      this.$router.push({ path: 'Newlisting', query: { user: this.user, isAdminPanel: this.isAdminPanel, loggedIn: 'this.loggedIn'  }})
    },
    createdNewListing: function(){
      this.isCreateListing = false
      this.getAdminListings()
      this.$router.push({ path: 'Admin', query: { user: this.user, isAdminPanel: this.isAdminPanel, loggedIn: 'this.loggedIn' }})
    },
    getAdminListings: function(){
      fetch(`${this.$URL}/api/realtor/${this.user.id}/listings/`, {
        method: 'GET',
        headers:{
          "Content-Type": "application/json",
          "Authorization" : `JWT ${this.user.token}`
        }
      })
      .then(response => response.json())
      .then(data => {
          this.realtorListings = data.results 
      })
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
