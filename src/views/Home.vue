<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-aside :width="sideWidth + 'px' "
                style="background-color: rgb(119,141,170); height: 100%"
      >
        <el-menu :default-openeds="['1', '3']" style="min-height: 100%; overflow-x: hidden"
                 background-color="rgb(48,65,86)"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 :collapse-transition="false"
                 :collapse="isCollapse">

          <div style="height: 60px; line-height: 60px; text-align: center">
            <img src="../assets/logo.png" alt="" style="width:20px; position:relative; top: 5px; margin-right: 5px ">
            <b style="color: cornsilk" v-show="logoTextShow">法律咨询系统</b>
          </div>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>

        <el-header style=" font-size: 12px; border: 1px solid #ccc; line-height: 60px;display: flex" >
          <div style="flex: 1; font-size: 22px">
            <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
          </div>
          <el-dropdown style="width: 100px;cursor: pointer">
            <span>王小虎</span><i class="el-icon-arrow-down" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </el-header>

        <el-main>

          <el-breadcrumb separator="/" >
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
          </el-breadcrumb>

          <div style="padding: 10px 0">
            <el-input style="width: 200px" placeholder="请输入" suffix-icon="el-icon-search" class="ml-5"  v-model="input"></el-input>
            <el-button class="ml-5" type="primary">search</el-button>
          </div>

          <div style="margin: 10px">
            <el-button type="primary">add<i class="el-icon-circle-plus-outline"></i></el-button>
            <el-button type="danger">delete all<i class="el-icon-remove-outline"></i></el-button>
          </div>

          <el-table :data="tableData" border stripe header-cell-class-name="headerBg">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column>
             <template slot-scope="scope">
               <el-button type="success">edit<i class="el-icon-edit"></i> </el-button>
               <el-button type="danger"> delete <i class="el-icon-remove-outline"></i> </el-button>

             </template>
            </el-table-column>
          </el-table>

          <div style="padding: 10px 0">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
          </div>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  data(){
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',

    };

    return{
      msg: "hello vue",
      tableData: Array(10).fill(item),
      collapseBtnClass:'el-icon-s-fold',
      isCollapse:false,
      sideWidth:200,
      logoTextShow:true,
      headerBg:'headerBg',
      input: ''
    }
  },
  methods:{
    collapse(){
      this.isCollapse =!this.isCollapse
      if (this.isCollapse){
        this.sideWidth=64
        this.collapseBtnClass = 'el-icon-s-unfold'
        this.logoTextShow= false
      }
      else{
        this.sideWidth=200
        this.collapseBtnClass = 'el-icon-s-fold'
        this.logoTextShow=true
      }
    }
  }
}
</script>
<style>
  .headerBg{
    background-color: #ccc!important;
  }
</style>