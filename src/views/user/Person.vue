<template>
    <el-card style="width: 70vh;">
        <el-form label-width="80px" size="small">
            <el-form-item label="用户名">
                <el-input v-model="form.uname" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="form.uid" autocomplete="off" :disabled="true" ></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.pwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="form.others" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">确 定</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    export default {
        name: "Person",
        data(){
            return{
                paths:[],
                form:localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")):{},
            }
        },
        methods:{
            save(){
                this.request.post("http://localhost:9090/user/saveOrUpdate",this.form).then(res=>{
                    if (res.code==='200'){
                        this.$message.success("更改成功")
                        this.load()
                    }
                    else{
                        this.$message.error(res.msg)
                    }


                })
            },
            load(){
                this.request.post("http://localhost:9090/user/login",this.form).then(res => {
                    if (res.code==='200'){
                        localStorage.setItem("user",JSON.stringify(res.data))
                    }
                    else{
                        this.$message.error(res.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>