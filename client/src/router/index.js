import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')

  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')

  },

  {
    path: '/message/',
    name: 'Message',
    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')

  },
  
  {
    path: '/profil',
    name: 'profil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue')

  },

   
  {
    path: '/detailsMessage',
    name: 'detailsmessage',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailsMessage.vue')

  },

 


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!['Login', 'Register', 'PostMessage'].includes(to.name) && !store.getters.isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
