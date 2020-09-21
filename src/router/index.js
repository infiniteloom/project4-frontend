import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import RealtorAdmin from '../views/RealtorAdmin.vue'
import EditCreateListing from '../views/EditCreateListing.vue'
import SingleListing from '../views/SingleListing.vue'



Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props:true
  },
  {
    path: '/admin',
    name: 'RealtorAdmin',
    component: RealtorAdmin,
    props:true
  },
  {
    path: '/newlisting',
    name: 'EditCreateListing',
    component: EditCreateListing,
    props:true
  },
  {
    path: '/singlelisting',
    name: 'SingleListing',
    component: SingleListing,
    props:true
  }
]

const router = new VueRouter({
  routes
})

export default router
