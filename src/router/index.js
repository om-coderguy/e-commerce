import Vue from 'vue'
import Router from 'vue-router'
import HeaderComponent from '../components/Header'
import LogIn from '../components/Login'
import RegisterForm from '../components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeaderComponent
    },
    {
      path: '/login',
      name: 'LogIN',
      component: LogIn
    },
    {
      path: '/register',
      name: 'Register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ '../components/Register.vue')
      component: RegisterForm
    }
  ]
})
