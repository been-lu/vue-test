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
            <el-input style="width: 200px" placeholder="请输入" suffix-icon="el-icon-search" class="ml-5" v-model="uname" ></el-input>

            <el-button  class="ml-5" icon="el-icon-search" circle @click="load"></el-button>
          </div>

          <div style="margin: 10px">
            <el-button type="primary">新增<i class="el-icon-circle-plus-outline"></i></el-button>
            <el-button type="danger">删除全部<i class="el-icon-remove-outline"></i></el-button>
          </div>

          <el-table :data="tableData" border stripe header-cell-class-name="headerBg">
            <el-table-column prop="uname" label="姓名" width="80"></el-table-column>
            <el-table-column prop="uid" label="ID" width="200"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
            <el-table-column prop="location" label="地址" width="120"></el-table-column>
            <el-table-column prop="age" label="年龄" width="80"></el-table-column>
            <el-table-column prop="others" label="备注"></el-table-column>
            <el-table-column>
             <template slot-scope="scope">
               <el-button type="primary" icon="el-icon-edit" circle></el-button>
               <el-button type="danger" icon="el-icon-delete" circle></el-button>
             </template>
            </el-table-column>
          </el-table>

          <div style="padding: 10px 0">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageNum"
                    :page-sizes="[3, 5, 10]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
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
    return{
      msg: "hello vue",
      total:0,
      tableData: [],
      collapseBtnClass:'el-icon-s-fold',
      isCollapse:false,
      sideWidth:200,
      logoTextShow:true,
      headerBg:'headerBg',
      uname:'',
      pageNum:1,
      pageSize:5

    }
  },
  created() {
    this.load()
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
    },
    handleSizeChange(pageSize){
      console.log(pageSize)
      this.pageSize=pageSize
      this.load()
    },
    handleCurrentChange(pageNum){
      console.log(pageNum)
      this.pageNum=pageNum
      this.load()
    },
    load(){

      //请求分页数据
      fetch("http://localhost:9090/user/page?pageNum="+this.pageNum+
              "&pageSize="+this.pageSize+
              "&uname="+this.uname)
              .then(res => res.json()).then(res => {
        console.log(res)
        this.tableData = res.data
        this.total = res.total
      })
    }
  }
}
</script>
<style>
  .headerBg{
    background-color: #ccc!important;
  }
</style>