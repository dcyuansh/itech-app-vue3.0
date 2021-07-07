import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'


const routes = [
  //登录
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  //注册
  {
    path: '/register',
    name: 'Register',
    component: Register,
    //component: () => import('../views/Register.vue')
  },
  //首页
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [//二级路由
      {
        path: '/manage/user',
        name: 'user',
        component: () => import('../views/user/UserManage.vue')
      },
    ]
  },


]





const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
