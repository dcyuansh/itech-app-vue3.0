<template>
  <div style="border: 1px solid #e6e6e6;">
    <div class="task-detail-div-style">
      <div class="style-margin-top"
           style="text-align: left;">
        <h2 style="font-weight:normal;font-size:20px">Commits-{{this.form.taskNo}}</h2>
      </div>
      <div class="style-margin-top">
        <div class="block">
          <el-timeline style="text-align: left;">
            <el-timeline-item v-for="(item, index) in taskDataList"
                              :key="index"
                              :timestamp="item.timestamp"
                              placement="top">
              <el-card>
                <h4>{{item.createdBy}}: 更新信息如下:</h4>
                <!-- <p class="p-line-height">更新时间：{{item.timestamp}}</p> -->
                <p class="p-line-height">任务级别：{{item.severity}}</p>
                <p class="p-line-height">任务负责人：{{item.assignee}}</p>
                <p class="p-line-height">总工时：{{item.estimatedEffort}}</p>
                <p class="p-line-height">实际工时：{{item.actualEffort}}</p>
                <p class="p-line-height">任务状态：{{item.status}}</p>
              </el-card>
            </el-timeline-item>

          </el-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { queryCommTaskHisLog } from '../../utils/api'


export default {
  data () {
    return {
      taskDataList: [],
      form: {
        taskNo: '',
      },
    }
  },

  // 页面初始化数据
  mounted: function () {
    this.handleQuery();
  },


  methods: {
    // 查询任务历史
    handleQuery () {
      this.form.taskNo = this.$route.query.taskNo
      queryCommTaskHisLog(this.form)
        .then(res => {
          this.taskDataList = res.data;
        })
    },

    // 时间格式化

  }
}

</script>


<style>
/***div边框设置  border: 1px dashed #000;*/
.task-detail-div-style {
  margin-top: 30px;
  /*border: 1px solid #e6e6e6;*/
  min-height: 600px;
  width: 60%;
  margin: 0 auto;
}
.style-margin-top {
  margin-top: 15px;
}
.p-line-height {
  line-height: 0.4pc;
}
</style>
