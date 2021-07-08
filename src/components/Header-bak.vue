<template>
  <el-menu router
           :default-active="$route.path"
           class="el-menu-style"
           mode="horizontal"
           @select="handleSelect"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b">
    <el-menu-item index="/home"><i class="el-icon-menu"></i>首页</el-menu-item>
    <el-submenu index="/manage">
      <template #title><i class="el-icon-menu"></i>管理中心</template>
      <el-menu-item index="/manage/user">用户管理</el-menu-item>
      <el-menu-item index="/manage/authority">权限管理</el-menu-item>
    </el-submenu>

  </el-menu>
</template>


<script scoped>

export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '/home',
      activeIndex2: '/home'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }

}
</script>

<style scoped>
.el-menu-style {
  /* background-color: #563d7c; */
  /* background-color: white; */
}
</style>
