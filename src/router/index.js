import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Man',
    name: 'Manage',
    component: () => import( '../views/Manage.vue'),
    redirect:"/Man/Manhome",
    children: [
      {path: 'ManUser', name: 'ManUser', component: () => import( '../views/ManUser.vue'),},
      {path: 'ManHome', name: 'ManHome', component: () => import( '../views/ManHome.vue'),}
    ]
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
    path: '/',
    name: 'login',
    component: () => import( '../views/Login'),
    children: [
      {path: 'ManLogin', name: 'ManLogin', component: () => import( '../views/ManLogin.vue'),},
      {path: 'UserLogin', name: 'UserLogin', component: () => import( '../views/UserLogin.vue'),},
      {path: 'LawyerLogin', name: 'LawyerLogin', component: () => import( '../views/LawyerLogin.vue'),}
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
