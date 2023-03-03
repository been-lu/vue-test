<template>
    <div style="height: 100%">
        <el-container style="height: 100%">

            <el-aside :width="sideWidth + 'px' "
                      style="background-color: rgb(119,141,170); height: 100%">
                <LawyerAside :isCollapse="isCollapse" :logoTextShow="logoTextShow"/>
            </el-aside>

            <el-container>

                <el-header style="border-bottom: 1px solid #cccccc;">
                    <LawyerHeader :collapseBtnClass="collapseBtnClass" :collapse="collapse"></LawyerHeader>
                </el-header>

                <el-main>

                    <router-view/>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

    import LawyerAside from "../../components/Lawyer/LawyerAside";
    import LawyerHeader from "../../components/Lawyer/LawyerHeader";

    export default {
        name: "Lawyer",

        components: {LawyerAside, LawyerHeader},
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