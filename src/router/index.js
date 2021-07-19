import { createRouter, createWebHistory } from 'vue-router'
//索引菜单
import MenuIndex from '../views/MenuIndex.vue'
//import AsideMenuIndex from '../views/AsideMenuIndex.vue'

//首页
import Home from '../views/Home.vue'
//登录
import Login from '../views/user/Login.vue'
//注册
const Register = () => import(/* webpackChunkName: "user" */ '../views/user/Register.vue')
//个人中心
const PersonCenter = () => import(/* webpackChunkName: "user" */ '../views/user/PersonCenter.vue')
//404错误页面
const Page404 = () => import(/* webpackChunkName: "404" */ '../views/Page404.vue')


//用户管理
const UserManage = () => import(/* webpackChunkName: "manage" */ '../views/user/UserManage.vue')
//角色管理
const RoleManage = () => import(/* webpackChunkName: "manage" */ '../views/user/RoleManage.vue')

//我的任务中心
const MyTask = () => import(/* webpackChunkName: "task" */ '../views/task/MyTask.vue')
//新建任务
const CreateTask = () => import(/* webpackChunkName: "task" */ '../views/task/CreateTask.vue')
//任务历史信息
const TaskHisDetail = () => import(/* webpackChunkName: "task" */ '../views/task/TaskHisDetail.vue')






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

  //任务中心
  {
    path: '/task',
    name: 'task',
    component: MenuIndex,
    redirect: '/myTask',
    meta: { title: '管理中心', },
    children: [
      //我的任务
      {
        path: '/myTask',
        name: 'myTask',
        component: MyTask,
        meta: { title: '我的任务' }
      },
      //新建任务
      {
        path: '/createTask',
        name: 'createTask',
        component: CreateTask,
        meta: { title: '新建任务' }
      },
      //任务历史记录
      {
        path: '/taskHisDetail',
        name: 'taskHisDetail',
        component: TaskHisDetail,
        meta: { title: '任务历史记录' }
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

  //个人中心
  {
    path: '/personCenter',
    name: 'personCenter',
    component: MenuIndex,
    redirect: '/personCenter',
    children: [
      {
        path: '/personCenter',
        component: PersonCenter,
        meta: { title: '个人中心' }
      },
    ]
  },

  //错误页面
  {
    path: '/404',
    component: Page404,
    meta: { title: '404，没有对应该路由页面' },
  },


]





const router = createRouter({
  history: createWebHistory(),
  routes
})



// 使用导航守卫 router.beforeEach 注册一个全局前置守卫，判断用户是否登录成功
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/register') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === 'null' || token === '') {
      next('/');
    } else {
      next();
    }
  }
});




export default router
