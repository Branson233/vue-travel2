import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }, {
    path: '/',
    name :'Login',
    component: Login
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})



//导航守卫
//next:允许放行

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.path !== '/') {
    if(store.state.isLogin=="true"){
      next()
    }else{
      next("/")
    }
  }else{
    next()
  }
})


export default router
