import { createRouter, createWebHistory } from 'vue-router'
//菜单
import MenuIndex from '../views/MenuIndex.vue'
//首页
import Home from '../views/Home.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'




const routes = [
  //登录
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: '登录',
    },
  },
  //注册
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: '注册',
    },
  },

  //首页
  {
    path: '/home',
    name: 'home',
    component: MenuIndex,
    redirect: '/home',
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/home',
        component: Home,
        meta: {
          title: '任务中心'
        }
      },

    ]
  },

  //管理中心
  {
    path: '/manage',
    name: 'manageUser',
    component: MenuIndex,
    redirect: '/manage/user',
    meta: {
      title: '管理中心',
    },
    children: [
      //用户管理
      {
        path: '/manage/user',
        name: 'userManage',
        component: () => import('../views/user/UserManage.vue'),
        meta: {
          title: '用户管理'
        }
      },
      //角色管理
      {
        path: '/manage/role',
        name: 'roleManage',
        component: () => import('../views/user/RoleManage.vue'),
        meta: {
          title: '用户管理'
        }
      },
    ]
  },



]





const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
