import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import RealtorAdmin from '../views/RealtorAdmin.vue'
import CreateListing from '../views/CreateListing.vue'
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
    name: 'CreateListing',
    component: CreateListing,
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
