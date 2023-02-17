<template>
    <div class="wrapper">
        <div style="margin: 200px auto; background-color: #fff; width: 350px; height: 280px; padding: 20px; border-radius: 10px">
            <div style="margin: 20px 0; text-align: center; font-size: 24px"><b>律师登录</b></div>
            <el-form :model="user" :rules="rules" ref="userForm">
                <el-form-item prop="aname">
                    <el-input size="medium" prefix-icon="el-icon-user" v-model="lawyer.lname"></el-input>
                </el-form-item>
                <el-form-item prop="password">
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