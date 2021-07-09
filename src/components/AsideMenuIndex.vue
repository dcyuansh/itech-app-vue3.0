<template>
  <div class="common-layout">
    <el-container>
      <el-aside style="width: 15%;padding: 0px;border: 0pc;">
        <!-- 左侧菜单栏 -->
        <v-aside></v-aside>
      </el-aside>
      <el-container>
        <!-- 导航栏 -->
        <el-header style="padding: 0px;">
          <v-header></v-header>
        </el-header>
        <el-main style="padding: 0px;">
          <!-- 渲染组件 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './Header.vue'
import Aside from './Aside.vue'

export default {
  components: {
    'v-header': Header,
    'v-aside': Aside,
  },
}

</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
