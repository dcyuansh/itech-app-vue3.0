<template>
  <div>
    <!--查询框begin-->
    <div class="div-style"
         style="height: 200px;">
      <el-form :model="form"
               ref="form"
               label-width="100px">
        <div style="text-align: left"><label>用户管理:</label></div>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="用户名:">
              <el-input type="text"
                        prefix-icon="el-icon-user"
                        v-model="form.userName"
                        placeholder="请输入用户名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="证件号:">
              <el-input type="text"
                        prefix-icon="el-icon-edit-outline"
                        v-model="form.idCard"
                        placeholder="请输入证件号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="邮箱:">
              <el-input type="text"
                        prefix-icon="el-icon-message"
                        v-model="form.email"
                        placeholder="请输入邮箱"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="电话:">
              <el-input type="text"
                        prefix-icon="el-icon-phone"
                        v-model="form.phone"
                        placeholder="请输入电话"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-button type="primary"
                   round
                   @click="handleQuery()">查询结果</el-button>
        <el-button type="primary"
                   round
                   @click="handleReset()">重置查询</el-button>
      </el-form>
    </div>
    <!--查询框begin-->

    <!--显示内容 begin-->
    <div class="div-style">
      <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                height="310"
                border
                style="width: 100%">
        <el-table-column fixed
                         prop="userName"
                         label="用户名"
                         width="120">
        </el-table-column>
        <el-table-column fixed
                         prop="idType"
                         label="证件类型"
                         width="100">
        </el-table-column>
        <el-table-column fixed
                         prop="idCard"
                         label="证件号"
                         width="180">
        </el-table-column>
        <el-table-column fixed
                         prop="gender"
                         label="性别"
                         width="60">
        </el-table-column>
        <el-table-column fixed
                         prop="phone"
                         label="电话"
                         width="150">
        </el-table-column>
        <el-table-column fixed
                         prop="email"
                         label="邮箱"
                         width="200">
        </el-table-column>
        <el-table-column fixed
                         prop="lockInd"
                         label="锁定状态"
                         width="80">
        </el-table-column>
        <el-table-column fixed
                         prop="lockDate"
                         label="锁定时间"
                         width="180">
        </el-table-column>
        <el-table-column fixed
                         prop="address"
                         label="地址">
        </el-table-column>

        <el-table-column label="操作"
                         width="160">
          <template slot-scope="scope">
            <el-button size="mini"
                       type='primary'
                       @click="handleEditDialog(scope.$index, scope.row)">修改
            </el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
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
    <el-dialog title="修改用户信息"
               :visible.sync="dialogFormVisible">
      <el-form :model="editForm">
        <el-form-item label="用户名:"
                      :label-width="formLabelWidth">
          <el-input type="text"
                    prefix-icon="el-icon-user"
                    v-model="editForm.userName"
                    placeholder="请输入用户名"
                    auto-complete="off"
                    :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="密码:"
                      :label-width="formLabelWidth">
          <el-input type="password"
                    prefix-icon="el-icon-key"
                    v-model="editForm.password"
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="性别:"
                      :label-width="formLabelWidth">
          <el-select v-model="editForm.gender"
                     style="width:100%"
                     placeholder="请选择性别">
            <el-option label="男"
                       value="M"></el-option>
            <el-option label="女"
                       value="F"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件类型:"
                      :label-width="formLabelWidth">
          <el-select v-model="editForm.idType"
                     style="width:100%"
                     placeholder="请选择证件类型">
            <el-option label="身份证"
                       value="身份证"></el-option>
            <el-option label="其他"
                       value="其他"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="证件号:"
                      :label-width="formLabelWidth">
          <el-input type="text"
                    v-model="editForm.idCard"
                    placeholder="请输入证件号"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:"
                      :label-width="formLabelWidth">
          <el-input type="text"
                    v-model="editForm.email"
                    placeholder="请输入邮箱"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话:"
                      :label-width="formLabelWidth">
          <el-input type="text"
                    v-model="editForm.phone"
                    placeholder="请输入电话号码"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="锁定状态:"
                      :label-width="formLabelWidth">
          <el-select v-model="editForm.lockInd"
                     style="width:100%"
                     placeholder="请选择状态">
            <el-option label="Y"
                       value="Y"></el-option>
            <el-option label="N"
                       value="N"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址:"
                      :label-width="formLabelWidth">
          <el-input type="text"
                    v-model="editForm.address"
                    placeholder="请输入地址"
                    auto-complete="off"></el-input>
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
export default {
  name: 'UserManage',
  data () {
    return {
      messages: [],

      /***查询条件信息begin */
      form: {
        userName: '',
        idCard: '',
        email: '',
        phone: ''
      },
      /*分页数据*/
      currentPage: 1, // 当前页码
      total: 20, // 总条数
      pageSize: 10, // 每页的数据条数
      tableData: [],
      /***查询条件信息end */

      /***编辑框 begin */
      dialogFormVisible: false,
      editForm: {
        userName: '',
        idType: '',
        idCard: '',
        email: '',
        phone: '',
        gender: '',
        address: ''
      },
      formLabelWidth: '80px',
      /***编辑框 end */

    }
  },

  // 页面初始化数据
  mounted: function () {
    this.handleQuery();
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

    },

    // 重置查询
    handleReset () {
      this.form.userName = '';
      this.form.idCard = '';
      this.form.email = '';
      this.form.phone = ''
    },

    // 编辑弹框
    handleEditDialog (indx, row) {
      this.dialogFormVisible = true;
      this.editForm = row;
      //编辑时不显示密码
      this.editForm.password = '';
    },


    //编辑保存
    handleEditSave () {

    },

    // 删除
    handleDelete (indx, row) {
      this.$confirm('确定要删除这条信息吗？', '警告提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        type: 'warning',
        center: true
      }).then(async () => {
        const delFormData = {
          'userName': row.userName,
        };

      })
    },


  },
}
</script>
<style>
.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
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
