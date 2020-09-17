<template>
  <div class="header">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://res.cloudinary.com/infiniteloom/image/upload/v1599965230/Unit%2004%20-%20Project%20-%20Haven/haven-logo-black_sysaf0.png"
            alt="Ha•ven /ˈhāvən/ (noun) a place of safety or refuge. Find your perfect home with Haven.com"
          />
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <p id="brand-subtitle">Ha•ven /ˈhāvən/ (noun) a place of safety or refuge.</p>
        </b-navbar-item>
      </template>

      <template slot="start">
        <b-navbar-item href="#">
          <router-link to="/">Search bar</router-link>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-light" href="#"><strong>Sign up</strong></a>
            <a class="button is-light" href="./login">Log in</a>
            <b-navbar-dropdown label="faUserCircle">
              <font-awesome-icon :icon="['fa', 'user-icon']" />
              <b-navbar-item href="#">
                View Listings
              </b-navbar-item>
              <b-navbar-item href="#">
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
};
</script>

<style>
.header {
    width: 90%;
    margin: 10px auto;
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
</style>
