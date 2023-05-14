<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <el-row class="el-row" type="flex">
      <el-col
        v-for="item in forData"
        :key="item.id"
        class="el-col"
        :xs="24"
        :sm="12"
        :lg="8"
      >
        <el-card>
          <div v-for="k in item.data" :key="k.value">{{ item.name }}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="el-row" type="flex">
      <el-col
        v-for="(item,index) in apps"
        :key="item.id"
        :span="8"
        class="el-col"
        :xs="24"
        :sm="12"
        :lg="8"
      >
        <el-card :key="index" class="el-card" onclick="">
          <div slot="header" class="clearfix">
            <span>{{ item.appname }}</span>
          </div>
          <div>
            <div class="text item">
              <div class="item_tag">
                <span>用户标签：</span>
              </div>
              <div class="item_desr">
                <span> {{ item.tag }}</span>
              </div>
            </div>
            <div class="text item">
              <div class="item_tag">
                <span>搜索标签：</span>
              </div>
              <div class="item_desr">
                {{ item.seatag }}
              </div>
            </div>
            <div class="text item">
              <div class="item_tag">
                <span>短信签名：</span>
              </div>
              <div class="item_desr">
                <span>
                  {{ item.wxname }}
                </span>
              </div>
            </div>
            <div class="text item">
              <div class="item_tag">
                <span>客服QQ：</span>
              </div>
              <div class="item_desr">
                {{ item.qq }}
              </div>
            </div>
            <div class="text item">
              <div class="item_tag">
                <span>商务合作：</span>
              </div>
              <div class="item_desr">
                {{ item.buscoo }}
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col
        :span="8"
        :xs="24"
        :sm="12"
        :lg="8"
      >
        <el-card class="box-card" style="min-height: 200px;" align="middle" onclick="">
          <div class="el-card__body mid">
            <el-button icon="el-icon-circle-plus" circle />
            <el-button style="margin-left: 0;color: #505458" type="text" @click="show">添加APP</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <vue-message ref="msg" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      apps: [
        {
          appname: 'cxcz',
          tag: 'tag',
          wxname: 'wxname',
          qq: 'qq',
          buscoo: 'vcx'
        },
        {
          appname: 'cxcz',
          tag: 'tag',
          wxname: 'wxname',
          qq: 'qq',
          buscoo: 'vcx'
        }
      ],
      forData: [
        {
          name: 'dsad0',
          id: 0,
          data: [
            {
              name: 'dfsfdsfdsxxc',
              value: '4325643646'
            },
            {
              name: 'dfsfdsfdscc',
              value: '4325643645'
            },
            {
              name: 'dfsfdsfdsvvv',
              value: '4325643644'
            },
            {
              name: 'dfsfdsfdsxxc',
              value: '43256436461'
            },
            {
              name: 'dfsfdsfdscc',
              value: '43256436452'
            },
            {
              name: 'dfsfdsfdsvvv',
              value: '43256436443'
            },
            {
              name: 'dfsfdsfdsxxc',
              value: '43256436464'
            },
            {
              name: 'dfsfdsfdscc',
              value: '43256436455'
            }
          ]
        },
        {
          name: 'dsad1',
          id: 1,
          data: [
            {
              name: 'dfsfdsfdsxxc',
              value: '4325643646'
            },
            {
              name: 'dfsfdsfdscc',
              value: '4325643645'
            },
            {
              name: 'dfsfdsfdsvvv',
              value: '4325643644'
            }
          ]
        },
        {
          name: 'dsad2',
          id: 2,
          data: [
            {
              name: 'dfsfdsfdsxxc',
              value: '4325643646'
            },
            {
              name: 'dfsfdsfdscc',
              value: '4325643645'
            },
            {
              name: 'dfsfdsfdsvvv',
              value: '4325643644'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    show() {
      console.log(this.$refs.msg.showMsg)
      this.$refs.msg.showMsg('测试啊 啊')
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
// .el-card{
//   height: 100%;
// }
.all{
  margin-top: -30px;
  word-break: break-all;
  height: 100%;
 }
 .mid{
  margin-top: 25%;
  height: 50%;
 }
 .mid_item{
  justify-content: center;
  align-items: center;
 }
 .item {
  margin-bottom: 10px;
 }
 .item_tag{
  float:left;
  text-align:left;
 }
 .item_desr{
  margin-left: 40%;
  min-height: 30px;
  text-align:left;
 }
 .text {
  width: 100%;
  font-size: 12px;
  font-family: "Microsoft YaHei";
  color: #909399;
 }
 .clearfix:before,
 .clearfix:after {
  display: table;
  content: "";
 }
 .clearfix:after {
  clear: both
 }

 .el-card {
  min-width: 100%;
  height: 100%;
  margin-right: 20px;
  /*transition: all .5s;*/
 }
 .el-card:hover{
  margin-top: -5px;
 }
 .el-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap
 }
//  .el-col {
//   border-radius: 4px;
//   align-items: stretch;
//   margin-bottom: 40px;
//  }
</style>
