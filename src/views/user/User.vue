<template>
    <div style="height: 100%">
        <el-container style="height: 100%">

            <el-aside :width="sideWidth + 'px' "
                      style="background-color: rgb(119,141,170); height: 100%">
                <UserAside :isCollapse="isCollapse" :logoTextShow="logoTextShow"/>
            </el-aside>

            <el-container>

                <el-header style="border-bottom: 1px solid #cccccc;">
                    <UserHeader :collapseBtnClass="collapseBtnClass" :collapse="collapse"></UserHeader>
                </el-header>

                <el-main>

                    <router-view/>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

    import UserAside from "../../components/User/UserAside";
    import UserHeader from "../../components/User/UserHeader";


    export default {
        name: "User",
        components: {UserAside, UserHeader},

        data() {
            return {
                collapseBtnClass:'el-icon-s-fold',
                isCollapse:false,
                sideWidth:200,
                logoTextShow:true,
            }
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

<style scoped>

</style>