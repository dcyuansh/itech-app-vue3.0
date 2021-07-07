<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <!-- 导航栏 -->
        <v-header></v-header>
      </el-header>
      <el-main>
        <!-- 渲染组件 -->
        <router-view></router-view>
      </el-main>
      <el-footer>
        <!-- 页脚 -->
        <v-footer></v-footer>
      </el-footer>
    </el-container>
  </div>
</template>


<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    'v-header': Header,
    'v-footer': Footer,
  },
}
</script>






<style scoped>
</style>
