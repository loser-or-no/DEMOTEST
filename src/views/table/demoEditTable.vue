<template>
  <el-form ref="ruleForm" :inline="true" :model="ruleForm" :rules="rules" label-position="top">
    <el-table
      :data="ruleForm.tableData"
      style="width: 100%"
      @cell-dblclick="cellDblclick"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      />
      <el-table-column
        prop="age"
        label="测试"
        width="260"
      >
        <template slot-scope="scope">
          <div>
            <span v-if="!scope.row.isShowInput" class="mock-input" @click="showInput(scope.row)">{{ scope.row.address }}</span>
            <el-form-item
              v-if="scope.row.isShowInput"
              :prop="'tableData.' + scope.$index + '.age'"
              :rules="rules.age"
            >
              <el-input v-model="scope.row.age" type="number" maxlength="10">
                <template slot="prepend">可售：</template>
              </el-input>
            </el-form-item>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
        <template slot-scope="scope">
          <div>
            <span v-if="!scope.row.isShowInput" class="mock-input" @click="showInput(scope.row)">{{ scope.row.address }}</span>
            <el-form-item
              v-if="scope.row.isShowInput"
              :prop="'tableData.' + scope.$index + '.address'"
              :rules="rules.address"
            >
              <el-input v-model="scope.row.address" />
            </el-form-item>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        tableData: [{
          isShowInput: false,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          age: 18,
          id: 0
        }, {
          isShowInput: false,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          age: 18,
          id: 1
        }, {
          isShowInput: false,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          age: 18,
          id: 2
        }, {
          isShowInput: false,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          age: 18,
          id: 3
        }]
      },
      rules: {
        age: [
          { required: true, message: '请输入城市', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    showInput(row) {
      row.isShowInput = true
      this.ruleForm.tableData.map(item => {
        item.isShowInput = row.id === item.id
      })
    },
    cellDblclick(row, column, cell) {
      console.log(row, column, cell, event)
    }
  }
}
</script>
<style lang="scss" scoped>
.mock-input {
  cursor: pointer;
}
</style>
