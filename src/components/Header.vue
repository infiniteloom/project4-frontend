<template>
  <div class="header">
    <b-navbar class="navbar-transp">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://res.cloudinary.com/infiniteloom/image/upload/v1599965230/Unit%2004%20-%20Project%20-%20Haven/haven-logo-black_sysaf0.png"
            alt="Ha•ven /ˈhāvən/ (noun) a place of safety or refuge. Find your perfect home with Haven.com"
          />
        </b-navbar-item>

        <!-- Search bar -->
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-field>
            <b-input placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable>
            </b-input>
            <!-- <b-input placeholder="Search..."
              type="search"
              icon="magnify"
              icon-clickable
              @icon-click="searchIconClick">
            </b-input> -->
        </b-field>
        </b-navbar-item>

      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons nav-right">
            <router-link to="/signup"><a class="button login-reg" href="#"><strong>Sign up</strong></a></router-link>
            <router-link to="/login"><a class="button login-reg"  v-bind:URL="URL">Log in</a></router-link>
            <!-- <router-link to="/login"><a class="button login-reg"="URL">Log in</a></router-link> -->

           </div>
        </b-navbar-item>
        <b-navbar-item>
           <div>
            <b-navbar-dropdown class="user-drop" label="User">     
              <b-navbar-item class="user-drop" href="#">
                View Listings
              </b-navbar-item>
              <b-navbar-item class="user-drop" href="#">
                Logout
              </b-navbar-item>
            </b-navbar-dropdown>
          </div>
        </b-navbar-item>


      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["URL"]
};
</script>

<style>
.header {
  width: 100%;
  margin: 0px auto;
}
.navbar{
  background-color: rgba(255, 255, 255, 0);
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
.button.login-reg, .user-drop{
  border: none;
  background-color: white;
}

</style>
