import { createRouter, createWebHistory } from 'vue-router'
//索引菜单
import MenuIndex from '../views/MenuIndex.vue'
//import AsideMenuIndex from '../views/AsideMenuIndex.vue'

//首页
import Home from '../views/Home.vue'
import Login from '../views/user/Login.vue'
const Register = () => import(/* webpackChunkName: "register" */ '../views/user/Register.vue')


//管理中心模块
const UserManage = () => import(/* webpackChunkName: "manage" */ '../views/user/UserManage.vue')
const RoleManage = () => import(/* webpackChunkName: "manage" */ '../views/user/RoleManage.vue')



const routes = [
  //登录
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: { title: '登录', },
  },

  //注册
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { title: '注册', },
  },

  //首页
  {
    path: '/home',
    name: 'home',
    component: MenuIndex,
    redirect: '/home',
    meta: { title: '首页', },
    children: [
      {
        path: '/home',
        component: Home,
        meta: { title: '首页' }
      },
    ]
  },

  //管理中心
  {
    path: '/manage',
    name: 'manage',
    component: MenuIndex,
    redirect: '/userManage',
    meta: { title: '管理中心', },
    children: [
      //用户管理
      {
        path: '/userManage',
        name: 'userManage',
        component: UserManage,
        meta: { title: '用户管理' }
      },
      //角色管理
      {
        path: '/roleManage',
        name: 'roleManage',
        component: RoleManage,
        meta: { title: '角色管理' }
      },
    ]
  },


]





const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
