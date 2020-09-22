<template>
  <div class="header">
    <b-navbar>

      <template slot="brand">
        <!-- Brand Logo -->
        <b-navbar-item href="#">
            <img
            @click="returnHome"
            src="https://res.cloudinary.com/infiniteloom/image/upload/v1599965230/Unit%2004%20-%20Project%20-%20Haven/haven-logo-black_sysaf0.png"
            alt="Ha•ven /ˈhāvən/ (noun) a place of safety or refuge. Find your perfect home with Haven.com"
          />
        </b-navbar-item>

        <!-- Search bar -->
        <b-navbar-item>
          <b-field>
            <input 
            class="input search-bar"
            v-model="search"
            @keyup="searching"
            placeholder="Search county, zip, state..."
            type="search">
          </b-field>
        </b-navbar-item>
      </template>


      <template slot="end">
        <b-navbar-item tag="div">
          <!-- Sign up -->
          <div class="buttons nav-right">
            <router-link to="/signup" v-if="!loggedIn">
              <a v-if="!loggedIn" class="button login-reg" href="#">
                <strong>
                Sign up
                </strong>
              </a>
            </router-link>

            <!-- Log in -->
            <router-link to="/login" v-if="!loggedIn">
              <a v-if="!loggedIn" class="button login-reg">
                Log in
              </a>
            </router-link>
          </div>

        <!-- Manage listings -->
        </b-navbar-item>
        <b-navbar-item v-if="loggedIn" href="#">
          <button class="button drop-down-button" 
            :isAdminPanel="$attrs.isAdminPanel" 
            @click="isAdminPanel">
            Manage listings</button>
        </b-navbar-item>

        <!-- Create new listing -->
        <b-navbar-item v-if="loggedIn" href="#">
          <button class="button drop-down-button" 
            @click="isCreateListing">
            New listing</button>
        </b-navbar-item>

        <!-- Log out  -->
        <b-navbar-item v-if="loggedIn" href="#">
          <button class="button drop-down-button" 
            @click="logout">
            Log out</button>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:['loggedIn'],
  data:function(){
    return{
      search: ''
    }
  },
  methods: {
    logout: function(){
      this.$emit('logout')
    },
    isAdminPanel: function(){
      console.log('this is admin panel trigger in header ')
      this.$emit('isAdminPanel')
    },
    isCreateListing: function(){
      console.log('this is the create new listing trigger in header')
      this.$emit('isCreateListing')
    },
    returnHome: function(){
      if(!this.$attrs.isHomeView){
        this.$emit('returnHome')
      }
    },
    searching: function(){
      console.log('this is search text in header', this.search)
      this.$emit('searching', this.search)
    }
  }
}
</script>

<style>
.header {
  width: 100%;
  margin: 0px auto;
}
.navbar{
  background-color: rgba(255, 255, 255, 0);
}
.nav-bar-menu{
  background-color: #ffffff;
}
.brand{
  padding: 0;
  margin: 0;
}
.brand-subtitle{
  width: 90%;
  margin: 10px auto;
  font-size: .7em;
  font-weight: normal;
  text-decoration: none;
}
.user-icon:after{
  font-family: 'Font Awesome\ 5 Brands' , 'arial';
  content: '\f007';
  font-weight: normal;
  font-style: normal;
  margin:0px 0px 0px 10px;
  text-decoration:none;

}
.button.login-reg, .button.drop-down-button{
  border: none;
  background-color: white;
}
.navbar-dropdown{
  left: -60px;
}
.input.search-bar{
  width: 300px;
}

</style>
