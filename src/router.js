import Vue from 'vue'
import Router from 'vue-router'
// LAYOUTS
import Login from './layouts/Login.vue'
import Main from './layouts/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
        {
          path: '/',
          name: 'home',
          component: () => import('./pages/Home.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('./pages/About.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    }
  ]
})
