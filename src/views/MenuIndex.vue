<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0px;">
        <!-- 导航栏 -->
        <v-header></v-header>
      </el-header>

      <el-main :style="defaultHeight">
        <!-- 渲染组件 -->
        <router-view></router-view>
      </el-main>

      <el-footer style="padding: 0px;">
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
  name: 'MenuIndex',
  data () {
    return {
      defaultHeight: {
        height: ""
      }
    }
  },

  created () {
    this.hh()
  },

  components: {
    'v-header': Header,
    'v-footer': Footer,
  },

  methods: {
    //定义方法，获取高度减去头尾
    hh () {
      this.defaultHeight.height = window.innerHeight - 130 + 'px';
    }
  }

}
</script>






<style scoped>
html,
body {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}

.common-layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
