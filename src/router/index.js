import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import Help from '../views/Help.vue';
import Page2 from '../views/Page2.vue';

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
    component:About
  },
  {
    path: '/help',
    name: 'Help', 
    component: Help
  },
  {
    path: '/page2',
    name: 'Page2', 
    component: Page2
  },
]

const router = new VueRouter({
  routes
})

export default router
