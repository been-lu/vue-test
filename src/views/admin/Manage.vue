<template>
  <div style="height: 100%">
    <el-container style="height: 100%">

      <el-aside :width="sideWidth + 'px' "
                style="background-color: rgb(119,141,170); height: 100%">
        <ManAside :isCollapse="isCollapse" :logoTextShow="logoTextShow"/>
      </el-aside>

      <el-container>

        <el-header style="border-bottom: 1px solid #cccccc;" >
          <ManHeader :collapseBtnClass="collapseBtnClass" :collapse="collapse"></ManHeader>
        </el-header>

        <el-main>
          <!--子路由会在router-view里展示-->

          <router-view />

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

import ManAside from "../../components/Man/ManAside";
import ManHeader from "../../components/Man/ManHeader";

export default {
  name: 'Home',
  components: {ManAside,ManHeader},
  data(){
    return{

      collapseBtnClass:'el-icon-s-fold',
      isCollapse:false,
      sideWidth:200,
      logoTextShow:true,



    }
  },

  created() {
    //this.load()

  },

  methods:{
    collapse(){
      //侧边栏折叠与展开
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
  }
}
</script>
<style>
  .headerBg{
    background-color: #ccc!important;
  }
</style>