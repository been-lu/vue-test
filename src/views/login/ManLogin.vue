<template>
    <div class="wrapper">
        <div style="margin: 200px auto; background-color: #fff; width: 350px; height: 280px; padding: 20px; border-radius: 10px">
            <div style="margin: 20px 0; text-align: center; font-size: 24px"><b>管理员登录</b></div>
            <el-form :model="admin" :rules="rules" ref="adminForm">
                <el-form-item prop="aname">
                    <el-input size="medium" prefix-icon="el-icon-user" v-model="admin.aname"></el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input size="medium" prefix-icon="el-icon-lock" show-password
                              v-model="admin.pwd"></el-input>
                </el-form-item>
                <el-form-item style="margin: 10px 0; text-align: right">

                    <el-button type="primary" size="small" autocomplete="off" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManLogin",
        data() {
            return {
                admin: {},
                rules: {
                    aname: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ],
                    pwd: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            login() {
                this.$refs['adminForm'].validate((valid) => {
                    if (valid) {
                        this.request.post("http://localhost:9090/admin/login",this.admin).then(res => {
                            if (res.code==='200'){
                                this.$router.push("/man")
                            }
                            else{
                                this.$message.error("用户名或密码错误")
                            }
                        })
                    } else {
                        this.$message.error("请正确填充！")
                    }})

            }
        }
    }

</script>

<style>
    .wrapper {
        height: 100vh;
        background-image: linear-gradient(to bottom right, #6c9cdb, #54c946);
        overflow: hidden;
    }

</style>