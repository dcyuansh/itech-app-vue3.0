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
    <el-submenu index="manage">
      <template #title><i class="el-icon-s-tools"></i>管理中心</template>
      <el-menu-item index="/userManage">用户管理</el-menu-item>
      <el-menu-item index="/roleManage">角色管理</el-menu-item>
      <el-submenu index="tool">
        <template #title>工具</template>
        <el-menu-item index="/verifyIdCard">身份证校验</el-menu-item>
        <el-menu-item index="/realName">实名认证</el-menu-item>
        <el-menu-item index="/editPicture">图片编辑</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>



<script>
export default {

  data () {
    return {
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      //console.log(key, keyPath);
    }
  }
}
</script>



<style>
</style>
