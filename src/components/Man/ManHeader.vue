<template>
    <div style="line-height: 60px;display: flex;  ">
        <div style="flex: 1; font-size: 18px; ">
            <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
        </div>
        <el-dropdown style="width: 100px;cursor: pointer">
            <span>{{admin.aname}}</span><i class="el-icon-arrow-down" style="margin-right: 5px"></i>
            <el-dropdown-menu slot="dropdown" style="width: 100px;text-align: center">
                <el-dropdown-item style="font-size: 14px;padding: 5px 0" >
                   <router-link to="/Man/ManPerson">个人信息</router-link>
                </el-dropdown-item>
                <el-dropdown-item  style="font-size: 14px;padding: 5px 0">
                    <span  style="text-decoration: none" @click="logout">退出</span>
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
            logout(){
                this.$router.push("/manLogin")
                localStorage.clear()
                localStorage.removeItem("admin")
                this.$message.success("退出成功")
            }
        }

    }
</script>

<style scoped>

</style>