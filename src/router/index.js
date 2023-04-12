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
      {path: 'ManMsg', name: 'ManMsg', component: () => import( '../views/admin/ManMsg.vue'),},

    ]
  },
  {
    path: '/User',
    name: 'User',
    component: () => import( '../views/user/User.vue'),
    redirect:"/User/UserHome",
    children: [
      {path: 'UserHome', name: 'UserHome', component: () => import( '../views/user/UserHome.vue'),},
      {path: 'UserPerson', name: 'UserPerson', component: () => import( '../views/user/Person.vue'),},
      {path: 'UserOrder', name: 'UserOrder', component: () => import( '../views/user/Order.vue'),},
      {path: 'UserMsg', name: 'UserMsg', component: () => import( '../views/user/Msg.vue'),},

    ]
  },
  {
    path: '/Lawyer',
    name: 'Lawyer',
    component: () => import( '../views/lawyer/Lawyer.vue'),
    redirect:"/Lawyer/LawyerHome",
    children: [
      {path: 'LawyerHome', name: 'LawyerHome', component: () => import( '../views/lawyer/LawyerHome.vue'),},
      {path: 'LawyerPerson', name: 'LawyerPerson', component: () => import( '../views/lawyer/Person.vue'),},

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
