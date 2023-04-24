<template>
    <div>


        <el-table :data="tableData" border stripe header-cell-class-name="headerBg">
            <el-table-column prop="did" label="条款ID" width="200" ></el-table-column>
            <el-table-column prop="description" label="内容" ></el-table-column>

        </el-table>

        <div style="padding: 10px 0">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageNum"
                    :page-sizes="[3, 5, 10]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Regulation",
        data() {
            return {
                //分页查询的参数
                total: 0,
                tableData: [],
                pageNum: 1,
                pageSize: 5,

                form: {},
            }
        },
        created() {
            this.load()
        },
        methods: {
            handleSizeChange(pageSize) {
                //选择分页大小
                console.log(pageSize)
                this.pageSize = pageSize
                this.load()
            },
            handleCurrentChange(pageNum) {
                //选择分页页号
                console.log(pageNum)
                this.pageNum = pageNum
                this.load()
            },
            load(){
                this.request.get("http://localhost:9090/regulation/page", {
                    params: {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                    }
                }).then(res => {
                    console.log(res)
                    if (res.code === '200') {
                        this.tableData = res.data.records
                        this.total = res.data.total
                    }
                    if (res.code === '401') {
                        localStorage.clear()
                        this.$message.error(res.msg)
                        this.$router.push("/UserLogin")
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>