<template>
    <div class="wrapper">
        <div style="margin: 200px auto; background-color: #fff; width: 350px; height: 280px; padding: 20px; border-radius: 10px">
            <div style="margin: 20px 0; text-align: center; font-size: 24px"><b>律师登录</b></div>
            <el-form :model="lawyer" :rules="rules" ref="lawyerForm">
                <el-form-item prop="email">
                    <el-input size="medium" prefix-icon="el-icon-user" v-model="lawyer.email"></el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input size="medium" prefix-icon="el-icon-lock" show-password
                              v-model="lawyer.pwd"></el-input>
                </el-form-item>
                <el-form-item style="margin: 10px 0; text-align: right">
                    <el-button type="warning" size="small" autocomplete="off" @click="$router.push('/register')">注册
                    </el-button>
                    <el-button type="primary" size="small" autocomplete="off" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LawyerLogin",
        data() {
            return {
                lawyer: {},
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
        methods:{
            login() {
                this.$refs['lawyerForm'].validate((valid) => {
                    if (valid) {
                        this.request.post("http://localhost:9090/lawyer/login", this.lawyer).then(res => {
                            if (res.code==='200') {
                                this.$router.push("/lawyer")

                            } else {
                                this.$message.error("用户名或密码错误")
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
        background-image: linear-gradient(to bottom right, #d39539, #b212b0);
        overflow: hidden;
    }
</style>