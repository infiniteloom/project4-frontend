<template>
  <div >
    <b-navbar v-bind:class="{'nav-bar-home': $attrs.isHomeView, 'nav-bar-white': !$attrs.isHomeView, 'is-transparent': $attrs.isHomeView}">

      <template slot="brand">
        <!-- Brand Logo -->
        <b-navbar-item href="#">
            <img
            class="brand"
            @click="returnHome"
            src="https://res.cloudinary.com/infiniteloom/image/upload/v1599965230/Unit%2004%20-%20Project%20-%20Haven/haven-logo-black_sysaf0.png"
            alt="Ha•ven /ˈhāvən/ (noun) a place of safety or refuge. Find your perfect home with Haven.com"
          />
        </b-navbar-item>


        <!-- Search bar for non-home views, pushes router back to main and loads filtered listings -->
        <!-- <b-navbar-item v-if="!$attrs.isHomeView">
          <b-field>
            <input 
            class="input search-bar"
            v-model="search"
            @keyup.enter="searching"
            placeholder="Search county, zip, state..."
            type="search">
          </b-field>
        </b-navbar-item> -->
      </template>


      <template slot="end">
        <b-navbar-item tag="div">

          <!-- Login/Register buttons container -->
          <div class="buttons">
            <!-- Login link -->
            <button 
            v-if="!loggedIn" 
            class="button drop-down-button" 
            @click="handleIsLogin">
              Log in
            </button>

            <!-- Sign up link -->
            <button 
            v-if="!loggedIn" 
            class="button drop-down-button" 
            @click="handleIsRegister">
              Sign up
            </button>

          </div>
        </b-navbar-item>


        <!-- Manage listings -->
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
      search: '',
      isLogin: false,
      isRegister: false
    }
  },
  methods: {
    logout: function(){
      this.$emit('logout')
    },
    isAdminPanel: function(){
      this.$emit('isAdminPanel')
    },
    isCreateListing: function(){
      this.$emit('isCreateListing')
    },
    handleIsLogin: function(){
      this.$emit('loginRegister', 'login')
    },
    handleIsRegister: function(){
      this.$emit('loginRegister', 'register')
    },
    returnHome: function(){
      if(!this.$attrs.isHomeView){
        this.$emit('returnHome')
      }
    },
    searching: function(){
      this.$emit('searching', this.search)
    }
  }
}
</script>

<style>
.navbar-home{
  background-color: rgb(255,255,255, .9);
  background-image: none;
  max-width: 900px;
}
.navbar-white{
  background-color: rgb(255,255,255, .9);
  max-width: 900px;
}
.header {
  width: 100%;
  margin: 0px auto;
}

.brand{
  padding-left: 10px;
  margin: 0;
}
.brand-subtitle{
  width: 90%;
  margin: 10px auto;
  font-size: .7em;
  font-weight: normal;
  text-decoration: none;
}
.button.login-reg, .button.drop-down-button{
  border: none;
  background-color: transparent;
}
.button.login-reg:hover, .button.drop-down-button:hover{
  border: none;
  background-color: transparent;
  opacity: .8;
}
.navbar-dropdown{
  left: -60px;
}
.input.search-bar{
  width: 300px;
}

</style>
