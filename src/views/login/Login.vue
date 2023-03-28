<template>
    <router-view />
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
            }
        },
        created(){

            localStorage.removeItem("admin")
            localStorage.removeItem("lawyer")
            localStorage.removeItem("user")

        }
    }
</script>

<style >

</style>