<template>
  <div>
    <!--查询框begin-->
    <div class="div-style"
         style="height: 80%;">
      <el-form :model="form"
               ref="form"
               label-width="100px">
        <div style="text-align: left"><label>我的任务:</label></div>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="任务标题:"
                          :label-width="formLabelWidth"
                          class="el-form-item-width"
                          :required="true">
              <el-input type="text"
                        v-model="form.taskSubject"
                        placeholder="请输入任务标题"
                        auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="系统名称:"
                          :label-width="formLabelWidth"
                          class="el-form-item-medium-width"
                          :required="true">
              <el-select v-model="form.systemName"
                         style="width:100%"
                         placeholder="请选择系统名称">
                <el-option v-for="item in systemNameOptions"
                           :key="item.systemName"
                           :label="item.systemName"
                           :value="item.systemName">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="任务类型:"
                          :label-width="formLabelWidth"
                          class="el-form-item-medium-width">
              <el-select v-model="form.taskType"
                         style="width:100%"
                         placeholder="请选择任务类型">
                <el-option v-for="item in taskTypeOptions"
                           :key="item.taskType"
                           :label="item.taskType"
                           :value="item.taskValue">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="优先级:"
                          :label-width="formLabelWidth"
                          class="el-form-item-medium-width">
              <el-select v-model="form.severity"
                         style="width:100%"
                         placeholder="请选择优先级">
                <el-option v-for="item in severityOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="任务人:"
                          :label-width="formLabelWidth"
                          class="el-form-item-medium-width">
              <el-select v-model="form.assignee"
                         style="width:100%"
                         placeholder="请输入任务人"
                         filterable>
                <el-option v-for="item in alluser"
                           :key="item.code"
                           :label="item.name"
                           :value="item.code">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="预估工时(h):"
                          :label-width="formLabelWidth"
                          class="el-form-item-medium-width">
              <el-input type="text"
                        v-model="form.estimatedEffort"
                        style="width:100%"
                        placeholder="请输入预估工时"
                        auto-complete="off"
                        onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                        maxlength="4"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="任务内容:"
                          :label-width="formLabelWidth"
                          class="el-form-item-width">
              <el-input type="textarea"
                        :rows="4"
                        v-model="form.taskContent"
                        placeholder="请输入任务内容"
                        auto-complete="off"
                        class="el-textarea-inner"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="添加附件:"
                          :label-width="formLabelWidth"
                          class="el-form-item-width">
              <!-- 上传附件 -->
              <el-upload drag
                         action=""
                         multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处</div>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>

        <div style=" text-align: center;margin-bottom: 20px;">
          <el-button type="primary"
                     round
                     @click="handleSubmit()">创建任务</el-button>
          <el-button type="primary"
                     round
                     @click="handleReset()">重置内容</el-button>
        </div>
      </el-form>
    </div>
  </div>

</template>

<script>
import selectdata from '../../data/selectdata.json';
import { addCommTask, queryUserList } from '../../utils/api.js';

export default {
  data () {
    return {
      form: {
        taskSubject: '',
        taskContent: '',
        taskType: '',
        systemName: '',
        estimatedEffort: 0,
        assignee: '',
      },
      formLabelWidth: '100px',

      //systemName选项信息
      systemNameOptions: selectdata.systemNameList,
      //taskType选项信息 
      taskTypeOptions: selectdata.taskTypeList,
      //severity选项信息 
      severityOptions: selectdata.severityList,

      //用户人员选项信息
      alluser: [],
    }
  },


  // 页面初始化数据
  mounted: function () {
    this.userList();
  },

  methods: {
    // 新建任务
    handleSubmit () {
      addCommTask(this.form)
        .then(res => {
          if (res.status == 'SUCCESS') {
            this.handleReset();
          }
          this.messages = res.messages;
        })
    },

    // 重置内容
    handleReset () {
      this.form.taskSubject = '';
      this.form.taskContent = '';
      this.form.taskType = '';
      this.form.systemName = '';
      this.form.estimatedEffort = '';
      this.form.assignee = '';
      this.form.severity = '';
    },


    //加载all user list
    async userList () {
      queryUserList(this.form)
        .then(res => {
          if (res.status == 'SUCCESS') {
            res.data.forEach(element => {
              this.alluser.push({ name: element.userName, code: element.userName });
            })
          }
          this.messages = res.messages;
        })
    },

  }
}

</script>


<style>
.el-row {
  margin-top: 10px;
  margin-bottom: 0%;
}
/***div边框设置  border: 1px dashed #000;*/
.div-style {
  margin-top: 0%;
  border: 1px solid #e6e6e6;
}
</style>
