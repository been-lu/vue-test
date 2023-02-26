<template>
    <div style="line-height: 60px;display: flex;  ">
        <div style="flex: 1; font-size: 18px; ">
            <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>


        </div>
        <el-dropdown style="width: 100px;cursor: pointer">
            <span>{{admin.aname}}</span><i class="el-icon-arrow-down" style="margin-right: 5px"></i>
            <el-dropdown-menu slot="dropdown" style="width: 100px;text-align: center">
                <el-dropdown-item style="font-size: 14px;padding: 5px 0" >个人信息</el-dropdown-item>
                <el-dropdown-item  style="font-size: 14px;padding: 5px 0">
                    <router-link to="/manlogin"  style="text-decoration: none">退出</router-link>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "ManHeader",
        props: {
            collapseBtnClass:String,
            collapse:Function
        },
        data(){
            return{
                paths:[],
                admin:localStorage.getItem("admin")? JSON.parse(localStorage.getItem("admin")):{},
            }
        },
        created() {
            console.log(this.$route)
        },
        methods:{

        }

    }
</script>

<style scoped>

</style>