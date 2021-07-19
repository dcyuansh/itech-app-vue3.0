<template>
  <el-menu router
           :default-active="$route.path"
           class="el-menu-demo"
           mode="horizontal"
           @select="handleSelect"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b">
    <el-menu-item>iTech项目管理系统</el-menu-item>

    <el-menu-item index="/home"><i class="el-icon-menu"></i>首页</el-menu-item>

    <el-submenu index="task">
      <template #title><i class="el-icon-s-home"></i>我的工作台</template>
      <el-menu-item index="/myTask">我的任务</el-menu-item>
      <el-menu-item index="/createTask">新建任务</el-menu-item>
    </el-submenu>

    <el-submenu index="manage">
      <template #title><i class="el-icon-s-management"></i>管理中心</template>
      <el-menu-item index="/userManage">用户管理</el-menu-item>
      <el-menu-item index="/roleManage">角色管理</el-menu-item>
    </el-submenu>

    <el-submenu index="tool">
      <template #title><i class="el-icon-s-tools"></i>工具</template>
      <el-menu-item index="#">身份证校验</el-menu-item>
      <el-menu-item index="#">实名认证</el-menu-item>
      <el-menu-item index="#">图片编辑</el-menu-item>
      <el-submenu index="excel">
        <template #title>excel处理</template>
        <el-menu-item index="#">导入</el-menu-item>
        <el-menu-item index="#">导出</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="logout"
                style="float: right;">
      <template #title><i class="el-icon-user-solid"></i>{{showlogin}}</template>
      <el-menu-item index="/personCenter">个人中心</el-menu-item>
      <el-menu-item @click="exit()">退出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>



<script>
export default {
  name: 'Header',
  data () {
    return {
      showlogin: localStorage.getItem("username"),
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      //console.log(key, keyPath);
    },

    exit () {
      //1.清除标记的    
      localStorage.removeItem("username");
      localStorage.removeItem("Authorization");
      //2.怎么同步呢？         
      this.showlogin = null;
      this.$router.push({ path: '/', querry: { redirect: this.$router.currentRoute.fullPath } })
      //this.$router.replace('/');
    }


  }
}
</script>



<style>
</style>
