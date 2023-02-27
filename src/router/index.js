import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Man',
    name: 'Manage',
    component: () => import( '../views/admin/Manage.vue'),
    redirect:"/Man/Manhome",
    children: [
      {path: 'ManUser', name: 'ManUser', component: () => import( '../views/admin/ManUser.vue'),},
      {path: 'ManHome', name: 'ManHome', component: () => import( '../views/admin/ManHome.vue'),},
      {path: 'ManAdmin', name: 'ManAdmin', component: () => import( '../views/admin/ManAdmin.vue'),},
      {path: 'ManLawyer', name: 'ManLawyer', component: () => import( '../views/admin/ManLawyer.vue'),},
      {path: 'ManPerson', name: 'ManPerson', component: () => import( '../views/admin/Person.vue'),},
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
    component: () => import( '../views/login/Login'),
    redirect:"/userLogin",
    children: [
      {path: 'ManLogin', name: 'ManLogin', component: () => import( '../views/login/ManLogin.vue'),},
      {path: 'UserLogin', name: 'UserLogin', component: () => import( '../views/login/UserLogin.vue'),},
      {path: 'LawyerLogin', name: 'LawyerLogin', component: () => import( '../views/login/LawyerLogin.vue'),}
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
