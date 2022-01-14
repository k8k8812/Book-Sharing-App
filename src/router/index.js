import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OneNote from '../views/OneNote.vue'
import addnotebook from '../components/addnotebook.vue'
import updatenote from '../components/updatenote.vue'
import searchbygenre from '../components/searchbygenre.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/onenote/:title',
    name: 'OneNote',
    component: OneNote, 
    props: true,
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
    path:'/addbook', 
    name: 'addnotebook',
    component: addnotebook
  }, 
  {
    path: '/updatebook/:id',
    name: 'updatenote',
    component: updatenote 
  }, 
  {
    path: '/genre/:genre',
    name: 'searchbygenre',
    component: searchbygenre,
    props: true
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
