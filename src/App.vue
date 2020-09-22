<template>
  <div id="app">

    <div id="nav">
      <Header 
      v-bind:loggedIn="loggedIn" 
      v-bind:user="user" 
      :isHomeView="isHomeView"
      :isAdminPanel="isAdminPanel" 
      :allListings="houseData"
      @searching="handleSearching($event)"
      @returnHome="returnHome"
      @isAdminPanel="handleAdminPanel($event)" 
      @isCreateListing="handleCreateListing($event)"
      @logout="handleLogout"  />
    </div>

    <div class="body-container">
      <router-view 
        :key="componentKey"
        :singleListingInfo="singleListingInfo"
        :realtorListings="realtorListings" 
        :isAdminPanel="isAdminPanel" 
        :isHomeView="isHomeView"
        :isCreateListing="isCreateListing"
        :isEditListing="isEditListing"
        :isSelectListing="isSelectListing"
        :house="singleListingInfo"
        :loggedIn="loggedIn" 
        :error="error"
        :searchText="searchText"
        @editListing="editListing($event)"
        @deleteListing="deleteListing($event)"
        @houseData="handleHouseData($event)"
        @singleListingInfo="handleSingleListing($event)"
        @isCreateListing="handleCreateListing($event)"
        @createdNewListing="createdNewListing($event)"
        @editedNewListing="editedNewListing($event)"
        @loggedIn="handleLogin($event)"/>
    </div>

      <Footer/>

  </div>
</template>



<script>
// Import the components from the corresponding .vue files 
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

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
      error: false,
      searchText: '',
      componentKey: 0 // to force re-render of child component when listings refresh
    }
  },
  beforeMount: function () {
    this.isHomeView = true
    // Not best practice but using local storage to save user info to stay logged in on refresh of page. 
    this.user.id = localStorage.getItem('userid')
    this.user.token = localStorage.getItem('token')
    this.user.user_type = localStorage.getItem('user_type')
    this.user.email = localStorage.getItem('email')
    this.user.username = localStorage.getItem('username')

    // If user values are present, remain logged in.
    if(this.user){
      this.loggedIn = true
    }
  },
  methods:{
    handleSearching: function(event){
      console.log('searching text reaching app.vue: ', event)
      this.searchText = event
    },
    forceRerender: function() {
      this.componentKey += 1;
    },
    handleLogin: function(event){
      this.user = event
      // If this user returns with a token, loggedIn = true. 
      if(this.user.token){
        this.loggedIn = true
        localStorage.setItem('userid', (this.user.id))
        localStorage.setItem('token', this.user.token)
        localStorage.setItem('user_type', this.user.user_type)
        localStorage.setItem('email', this.user.email)
        localStorage.setItem('username', this.user.username)
        this.$router.push({ path: '/', query: { user: this.user, loggedIn: 'this.loggedIn' }})
      }else{
        this.error = true
      }
    },
    handleLogout: function() {
      this.loggedIn = false
      this.user = {}
      localStorage.clear()
      this.$router.push('/')
    },
    handleHouseData: function(event){
      this.houseData = event.results
    },
    handleAdminPanel: function(){
      this.isAdminPanel = true
      this.isHomeView = false
      this.isCreateListing = false
      this.isEditListing = false
      this.isSelectListing= false,
      this.singleListingInfo= false,
      this.getAdminListings()
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
    editedNewListing: function(){
      this.isAdminPanel = true
      this.isEditListing = false
      this.getAdminListings()
      this.$router.push({ path: '/admin', query: { user: this.user, isAdminPanel: this.isAdminPanel, loggedIn: 'this.loggedIn' }})
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
          this.forceRerender()
      })
    },
    editListing: function(event){
      this.isEditListing = true
      this.isAdminPanel = false
      this.singleListingInfo = event
      this.$router.push({ path: '/newlisting', query: { user: this.user, isAdminPanel: this.isAdminPanel, loggedIn: 'this.loggedIn' }})
    },
    deleteListing: function(event){
      fetch(`${this.$URL}/api/listings/${event}/`, {
          method: "DELETE",
          headers:{
              "Content-Type": "application/json",
              "Authorization" : `JWT ${this.$route.query.user.token}`
          }
      })
      .then(() => {
        this.getAdminListings()
      })
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
      this.resetAll()
      this.isHomeView = true
      this.$router.push({ path: '/', query: { user: this.user, loggedIn: 'this.loggedIn' }})
    },
    resetAll: function(){
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
  background-color: #ffffff;
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
