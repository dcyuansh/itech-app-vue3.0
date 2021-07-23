<template>
  <!--查询框begin-->
  <div class="div-style"
       style="height: 80%;">
    <el-form :model="form"
             ref="form"
             label-width="100px">
      <el-row :gutter="20">
        <el-col :span="24">
          <h1 style=" text-align: center;margin-bottom: 20px;">待处理照片</h1>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-upload class="upload-demo"
                     drag
                     action="https://jsonplaceholder.typicode.com/posts/"
                     style=" text-align: center;">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <template #tip>
              <div class="el-upload__tip">
                只能上传 jpg/png 文件，且不超过 5M
              </div>
            </template>
          </el-upload>
        </el-col>
      </el-row>
      <el-row :gutter="20"
              style="margin-top: 3%;">
        <el-col :span="6"></el-col>
        <el-col :span="6">
          <el-form-item label="底色:">
            <el-select v-model="form.photoSize"
                       style="width:100%"
                       placeholder="请选择证件照规格">
              <el-option v-for="item in photoSizeList"
                         :key="item.code"
                         :label="item.name"
                         :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="底色:">
            <el-select v-model="form.photoBackGround"
                       style="width:100%"
                       placeholder="请选择底色">
              <el-option v-for="item in photoBackGroundList"
                         :key="item.code"
                         :label="item.name"
                         :value="item.code">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <div style=" text-align: center;margin-top: 3%;margin-bottom: 3%;">
        <el-button type="primary"
                   round
                   @click="handleQuery()">证件照生成</el-button>
      </div>
    </el-form>
  </div>
  <!--查询框begin-->
</template>


<script>
import selectdata from '../../data/selectdata.json';



export default {
  name: "GenIdPhone",
  data () {
    return {
      form: {
        photo: '',
        photoSize: '小一寸',
        photoBackGround: 'white',
      },

      //照片大小
      photoSizeList: selectdata.photoSizeList,
      //照片底色
      photoBackGroundList: selectdata.photoBackGroundList,

    }
  }

}

</script>


<style scoped>
</style>
