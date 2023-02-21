<template>
    <div class="wrapper">
        <div style="margin: 200px auto; background-color: #fff; width: 350px; height: 280px; padding: 20px; border-radius: 10px">
            <div style="margin: 20px 0; text-align: center; font-size: 24px"><b>登 录</b></div>
            <el-form :model="user" :rules="rules" ref="userFrom">
                <el-form-item prop="email">
                    <el-input size="medium" prefix-icon="el-icon-user" v-model="user.email"></el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input size="medium" prefix-icon="el-icon-lock" show-password
                              v-model="user.pwd"></el-input>
                </el-form-item>
                <el-form-item style="margin: 10px 0; text-align: right">
                    <el-button type="warning" size="small" autocomplete="off">注册
                    </el-button>
                    <el-button type="primary" size="small" autocomplete="off" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserLogin",
        data() {
            return {
                user: {},
                rules: {
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
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
                this.$refs['userForm'].validate((valid) => {
                    if (valid) {
                        this.request.post("http://localhost:9090/user/login", this.user).then(res => {
                            if (!res) {
                                this.$message.error("用户名或密码错误")
                            } else {
                                this.$router.push("/man")
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })

            }
        }
    }
</script>

<style>
    .wrapper {
        height: 100vh;
        background-image: linear-gradient(to bottom right, #FC466B, #3F5EFB);
        overflow: hidden;
    }
</style>