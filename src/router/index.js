import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import RealtorAdmin from '../views/RealtorAdmin.vue'




Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  }
]

const router = new VueRouter({
  routes
})

export default router
