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
          <el-col :span="6">
            <el-form-item label="任务编号:">
              <el-input type="text"
                        prefix-icon=""
                        v-model="form.taskNo"
                        placeholder="请输入任务号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="任务类型:">
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
            <el-form-item label="状态:">
              <el-select v-model="form.status"
                         filterable
                         placeholder="请选择状态">
                <el-option v-for="item in statusOptions"
                           :key="item.status"
                           :label="item.status"
                           :value="item.status">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="系统名称:">
              <el-select v-model="form.systemName"
                         style="width:95%"
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
        <div style=" text-align: center;margin-bottom: 20px;">
          <el-button type="primary"
                     round
                     @click="handleQuery()">查询结果</el-button>
          <el-button type="primary"
                     round
                     @click="handleReset()">重置查询</el-button>
        </div>
      </el-form>
    </div>
    <!--查询框begin-->

    <!--显示内容 begin-->
    <div class="div-style">
      <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                height="310"
                border
                style="width: 100%"
                v-on:row-dblclick="rowdblclick">
        <el-table-column fixed
                         prop="insertTime"
                         label="时间"
                         width="100">
        </el-table-column>
        <el-table-column fixed
                         prop="taskNo"
                         label="任务编码"
                         width="100">
        </el-table-column>
        <el-table-column fixed
                         prop="taskType"
                         label="任务类型"
                         width="100">
        </el-table-column>
        <el-table-column fixed
                         prop="taskSubject"
                         label="任务主题"
                         width="220">
        </el-table-column>
        <el-table-column fixed
                         prop="systemName"
                         label="系统名称"
                         width="120">
        </el-table-column>
        <el-table-column fixed
                         prop="assignee"
                         label="任务所有人"
                         width="120">
        </el-table-column>
        <el-table-column fixed
                         prop="estimatedEffort"
                         label="预估工时"
                         width="80">
        </el-table-column>
        <el-table-column fixed
                         prop="actualEffort"
                         label="实际工时"
                         width="80">
        </el-table-column>
        <el-table-column fixed
                         prop="status"
                         label="状态"
                         width="100">
        </el-table-column>
        <el-table-column fixed
                         prop="taskContent"
                         label="内容">
        </el-table-column>
        <el-table-column label="操作"
                         width="100">
          <template v-slot="scope">
            <el-button size="mini"
                       type='primary'
                       @click="handleEditDialog(scope.$index, scope.row)">修改
            </el-button>
            <!--
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
            -->
          </template>
        </el-table-column>
      </el-table>
      <!--分页begin-->
      <el-pagination align='center'
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[1,5,10,20]"
                     :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="tableData.length">
      </el-pagination>
      <!--分页end-->
    </div>
    <!--显示内容 end-->

    <!-- 弹出编辑框 begin -->
    <el-dialog title="编辑任务信息"
               v-model="dialogFormVisible">
      <el-form :model="editForm">
        <el-form-item label="任务编号:"
                      :label-width="formLabelWidth">
          <el-input type="text"
                    prefix-icon=""
                    v-model="editForm.taskNo"
                    placeholder="请输入用户名"
                    auto-complete="off"
                    :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="任务类型:"
                      :label-width="formLabelWidth">
          <el-select v-model="editForm.taskType"
                     style="width:100%"
                     placeholder="请选择任务类型">
            <el-option v-for="item in taskTypeOptions"
                       :key="item.taskType"
                       :label="item.taskType"
                       :value="item.taskValue">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务主题:"
                      :label-width="formLabelWidth">
          <el-input type="text"
                    v-model="editForm.taskSubject"
                    placeholder="请输入任务主题"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="任务内容:"
                      :label-width="formLabelWidth">
          <el-input type="textarea"
                    :rows="8"
                    v-model="editForm.taskContent"
                    placeholder="请输入任务内容"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="系统名称:"
                      :label-width="formLabelWidth">
          <el-select v-model="editForm.systemName"
                     style="width:100%"
                     placeholder="请选择系统名称">
            <el-option v-for="item in systemNameOptions"
                       :key="item.systemName"
                       :label="item.systemName"
                       :value="item.systemName">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务创建人:"
                      :label-width="formLabelWidth">
          <el-input type="text"
                    prefix-icon=""
                    v-model="editForm.createdBy"
                    placeholder="请输入创建人"
                    auto-complete="off"
                    :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="任务所有人:"
                      :label-width="formLabelWidth">
          <el-select v-model="editForm.assignee"
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
        <el-form-item label="预估工时(h):"
                      :label-width="formLabelWidth">
          <el-input type="text"
                    v-model="editForm.estimatedEffort"
                    placeholder="请输入预估工时"
                    auto-complete="off"
                    onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                    maxlength="4"></el-input>
        </el-form-item>
        <el-form-item label="实际工时(h):"
                      :label-width="formLabelWidth">
          <el-input type="text"
                    v-model="editForm.actualEffort"
                    placeholder="请输入实际工时"
                    auto-complete="off"
                    onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                    maxlength="4"></el-input>
        </el-form-item>
        <el-form-item label="任务状态:"
                      :label-width="formLabelWidth"
                      :required="true">
          <el-select v-model="editForm.status"
                     filterable
                     style="width:100%"
                     placeholder="请选择状态">
            <el-option v-for="item in statusOptions"
                       :key="item.status"
                       :label="item.status"
                       :value="item.status">
            </el-option>
          </el-select>
        </el-form-item>

      </el-form>
      <div slot="footer"
           class="dialog-footer"
           style="text;text-align: center;">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="handleEditSave()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 弹出编辑框 end -->
  </div>
</template>

<script>
import selectdata from '../../data/selectdata.json';
import { queryUserCommTask, updateCommTask, queryUserList } from '../../utils/api.js';





export default {
  name: 'Home',
  data () {
    return {
      messages: [],
      form: {
        taskNo: '',
        taskType: '',
        assignee: '',
        status: '',
        systemName: ''
      },

      /*分页数据*/
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 10, // 每页的数据条数
      tableData: [],


      //任务状态选项
      statusOptions: selectdata.statusList,
      //systemName选项信息
      systemNameOptions: selectdata.systemNameList,
      //taskType选项信息 
      taskTypeOptions: selectdata.taskTypeList,

      //用户人员选项信息
      alluser: [],


      /***编辑框 begin */
      dialogFormVisible: false,
      editForm: {
        taskNo: '',
        taskType: '',
        taskSubject: '',
        taskContent: '',
        systemName: '',
        userName: '',
        createdBy: '',
        assignee: '',
        estimatedEffort: 0,
        actualEffort: 0
      },
      formLabelWidth: '100px',
      /***编辑框 end */

    }
  },

  // 页面初始化数据
  mounted: function () {
    this.handleQuery();
    this.userList();
  },

  methods: {
    // 设置每页显示条数
    handleSizeChange (val) {
      this.currentPage = 1;
      this.pageSize = val;
    },

    // 设置当前第几页
    handleCurrentChange (val) {
      this.currentPage = val;
    },

    // 查询
    handleQuery () {
      queryUserCommTask(this.form)
        .then(res => {
          if (res.status == 'SUCCESS') {
            this.tableData = res.data;
          }
          this.messages = res.messages;
        })
    },

    // 重置查询
    handleReset () {
      this.form.taskNo = '';
      this.form.taskType = '';
      this.form.status = '';
      this.form.systemName = ''
    },

    // 编辑弹框
    handleEditDialog (indx, row) {
      this.dialogFormVisible = true;
      this.editForm = row;
    },

    //编辑保存
    handleEditSave () {
      updateCommTask(this.editForm)
        .then(res => {
          if (res.status == 'SUCCESS') {
            //this.handleQuery();
            this.dialogFormVisible = false;
          }
          this.messages = res.messages;
        })
    },

    // 删除
    // handleDelete (indx, row) {
    //   this.$confirm('确定要删除这条信息吗？', '警告提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     closeOnClickModal: false,
    //     type: 'warning',
    //     center: true
    //   }).then(async () => {
    //     const delFormData = {
    //       'taskNo': row.taskNo,
    //     };
    //     this.$delete('/api/task/delete', delFormData)
    //       .then(res => {
    //         if (res.status == 'SUCCESS') {
    //           this.handleQuery();
    //         }
    //         this.messages = res.messages;
    //       })
    //   })
    // },

    //跳转到task详细信息页面
    rowdblclick (row) {
      //this.$router.push({ name: 'taskHisDetail', params: { taskNo: row.taskNo } })
      this.$router.push({ path: '/taskHisDetail', query: { taskNo: row.taskNo } });
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


  },

}
</script>


<style>
.el-row {
  margin-top: 20px;
  margin-bottom: 0%;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/***div边框设置  border: 1px dashed #000;*/
.div-style {
  margin-top: 20px;
  border: 1px solid #e6e6e6;
}
</style>
