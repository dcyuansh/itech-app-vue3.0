<template>
  <el-menu router
           :default-active="$route.path"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
           style="border-right:0!important;">

    <el-menu-item index="/home">
      <i class="el-icon-menu"></i>
      <template #title>首页</template>
    </el-menu-item>

    <el-submenu index="manage">
      <template #title>
        <i class="el-icon-location"></i>
        <span>管理中心</span>
      </template>
      <el-menu-item index="/userManage">用户管理</el-menu-item>
      <el-menu-item index="/roleManage">角色管理</el-menu-item>
    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
</style>
