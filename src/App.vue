<template>
  <div id="app">

    <div id="nav">
      <Header 
      v-bind:loggedIn="loggedIn" 
      v-bind:user="user" 
      :isAdminPanel="isAdminPanel" 
      @returnHome="returnHome"
      @isAdminPanel="handleAdminPanel($event)" 
      @isCreateListing="handleCreateListing($event)"
      @logout="handleLogout"  />
    </div>

    <div class="body-container">
      <router-view 
        :singleListingInfo="singleListingInfo"
        :realtorListings="realtorListings" 
        :isAdminPanel="isAdminPanel" 
        :isHomeView="isHomeView"
        :isCreateListing="isCreateListing"
        :isEditListing="isEditListing"
        :isSelectListing="isSelectListing"
        :house="singleListingInfo"
        :loggedIn="loggedIn" 
        @editListing="editListing($event)"
        @refreshRealtorListings="refreshRealtorListings($event)"
        @singleListingInfo="handleSingleListing($event)"
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
      isHomeView: false,
      isAdminPanel: false,
      isCreateListing: false,
      isEditListing: false,
      isSelectListing: false,
      singleListingInfo: null,
    }
  },
  methods:{
    handleLogin: function(event){
      this.user = event
      // If this user returns with a token, loggedIn = true. 
      if(this.user.token){
        this.loggedIn = true
        this.$router.push({ path: '/', query: { user: this.user, loggedIn: 'this.loggedIn' }})
      }
      // If the user does not return with a token form the log in request, 
    },
    handleLogout: function() {
      this.loggedIn = false
      this.user = {}
      this.$router.push('/')
    },
    handleAdminPanel: function(){
      console.log('handle admin panel in app.vue is being called ')
      this.isAdminPanel = true
      this.isHomeView = false
      this.isCreateListing = false
      this.isEditListing = false
      this.isSelectListing= false,
      this.singleListingInfo= false,
      this.getAdminListings()
      console.log('realtor listings in handle admin in app.vue : ', this.realtorListings)
      this.$router.push({ path: '/admin', query: { user: this.user, loggedIn: 'this.loggedIn' } , props:{realtorListings: this.realtorListings}})
    },
    handleCreateListing: function(){
      this.isCreateListing = true
      this.isAdminPanel = false
      this.isHomeView = false
      this.isEditListing = false
      this.isSelectListing= false,
      this.singleListingInfo= false,
      this.$router.push({ path: '/newlisting', query: { user: this.user, isAdminPanel: this.isAdminPanel, loggedIn: 'this.loggedIn'  }})
    },
    createdNewListing: function(){
      this.isAdminPanel = true
      this.isCreateListing = false
      this.getAdminListings()
      this.$router.push({ path: '/admin', query: { user: this.user, isAdminPanel: this.isAdminPanel, loggedIn: 'this.loggedIn' }})
    },
    getAdminListings: function(){
      console.log('getting admin listings')
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
    },
    editListing: function(event){
      console.log('reaching edit listing function in app.vue', event)
      this.isEditListing = true
      this.isAdminPanel = false
      this.singleListingInfo = event
      this.$router.push({ path: '/newlisting', query: { user: this.user, isAdminPanel: this.isAdminPanel, loggedIn: 'this.loggedIn' }})
    },
    refreshRealtorListings: function(){
      console.log('refreshing admin listings')
      this.getAdminListings()
      this.$router.push({ path: '/admin', query: { user: this.user, isAdminPanel: this.isAdminPanel, loggedIn: 'this.loggedIn' }})
    },
    handleSingleListing: function(event){
      this.isSelectListing = true
      this.isAdminPanel = false
      this.isHomeView = false
      this.isCreateListing = false
      this.isEditListing = false
      this.singleListingInfo = event
      this.$router.push({ path: '/singlelisting', query: { user: this.user, loggedIn: 'this.loggedIn' }, props: { singleListingInfo: 'this.singleListingInfo'}})
    },
    returnHome: function(){
      console.log('returning home')
      this.resetAll()
      if(!this.isHomeView){
        this.$router.push({ path: '/', query: { user: this.user, loggedIn: 'this.loggedIn' }})
      }
    },
    resetAll: function(){
      console.log('resetting all ')
      this.isCreateListing = false
      this.isAdminPanel = false
      this.isEditListing = false
      this.isSelectListing = false
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
