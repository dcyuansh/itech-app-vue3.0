<template>
  <el-menu router
           :default-active="$route.path"
           class="el-menu-style"
           mode="horizontal">

    <el-menu-item index="/home">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-submenu index="task">
      <template slot="title">
        <i class="el-icon-help"></i>
        <span slot="title">我的工作台</span>
      </template>
      <el-menu-item index="/task">我的任务</el-menu-item>
      <el-menu-item index="/task/created">新建任务</el-menu-item>
      <el-menu-item index="/task/timesheet">工时管理</el-menu-item>
      <el-submenu index="tool">
        <template slot="title">工具</template>
        <el-menu-item index="/verify/idCard">身份证验证</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-menu-item index="3">
      <i class="el-icon-video-camera"></i>
      <span slot="title">监控中心</span>
    </el-menu-item>

    <el-submenu index="manage">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">管理中心</span>
      </template>
      <el-menu-item index="/manage/user">用户管理</el-menu-item>
      <el-menu-item index="/manage/authority">权限管理</el-menu-item>
      <el-menu-item index="/manage/realNameAuthentication">实名认证</el-menu-item>
    </el-submenu>

    <el-submenu index="logout"
                style="float: right;">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span slot="title">{{showlogin}}</span>
      </template>
      <el-menu-item @click="handleLogout()">注销登陆</el-menu-item>
    </el-submenu>

  </el-menu>
</template>


<script scoped>
import router from '../router'

export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      showlogin: sessionStorage.getItem("username"),
    };
  },

  methods: {
    //切换多语言
    handleChangeLanguage (val) {
      this.$i18n.locale = val;
    },

    // 注销登陆
    handleLogout () {
      //1.清除标记的    
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("token");
      //2.怎么同步呢？         
      this.showlogin = null;
      router.push({ path: '/login', querry: { redirect: router.currentRoute.fullPath } })
    },
  }
}
</script>

<style scoped>
.el-menu-style {
  /* background-color: #563d7c; */
  background-color: white;
}
</style>
