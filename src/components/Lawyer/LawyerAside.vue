<template>
    <el-menu :default-openeds="['1', '3']" style="min-height: 100%; overflow-x: hidden"
             background-color="rgb(48,65,86)"
             text-color="#fff"
             active-text-color="#ffd04b"
             :collapse-transition="false"
             :collapse="isCollapse"
             router
    >

        <div style="height: 60px; line-height: 60px; text-align: center">
            <img src="src/assets/logo.png" alt=""
                 style="width:20px; position:relative; top: 5px; margin-right: 5px ">
            <b style="color: cornsilk" v-show="logoTextShow">法律咨询系统</b>
        </div>

        <el-menu-item index="/Lawyer">
            <i class="el-icon-house"></i>
            <span slot="title">主页</span>
        </el-menu-item>

        <el-submenu index="2">
            <template slot="title"><i class="el-icon-user-solid"></i>
                <span slot="title">预约管理</span>
            </template>
            <el-menu-item-group>
                <template slot="title">事务管理</template>
                <el-menu-item index="">预约回应</el-menu-item>
                <el-menu-item index="r">预约管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">合同管理</template>
                <el-menu-item index="2-3">合同接受</el-menu-item>
                <el-menu-item index="2-4">合同管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">条例管理</template>
                <el-menu-item index="/lawyer/LawyerRegulation">条例编辑</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">消息管理</template>
                <el-menu-item index="/lawyer/lawyermsg">消息提出与查看</el-menu-item>

            </el-menu-item-group>

        </el-submenu>


    </el-menu>
</template>

<script>
    export default {
        name: "LawyerAside",
        props: {
            msg: String,
            isCollapse: Boolean,
            logoTextShow: Boolean,
        },
        data(){
            return{}
        }
    }
</script>

<style scoped>

</style>