<template>
    <el-card style="width: 70vh;">
        <el-form label-width="80px" size="small">
            <el-form-item label="用户名">
                <el-input v-model="form.lname" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item label="ID">
                <el-input v-model="form.lid" autocomplete="off" :disabled="true" ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.email" autocomplete="off" :disabled="true" ></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.pwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="认证状态">
                <el-input v-model="form.status" autocomplete="off" :disabled="true" ></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="form.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.location" autocomplete="off"></el-input>
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
                form:localStorage.getItem("lawyer")? JSON.parse(localStorage.getItem("lawyer")):{},
            }
        },
        methods:{
            save(){
                this.request.post("http://localhost:9090/lawyer/saveOrUpdate",this.form).then(res=>{
                    if (res.code==='200'){
                        this.$message.success("更改成功")
                        this.load()
                    }
                    else{
                        this.$message.error(res.msg)
                    }
                    if (res.code === '401') {
                        this.$router.push("/ManLogin")
                    }

                })
            },
            load(){
                this.request.post("http://localhost:9090/lawyer/login",this.form).then(res => {
                    if (res.code==='200'){
                        localStorage.setItem("lawyer",JSON.stringify(res.data))
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