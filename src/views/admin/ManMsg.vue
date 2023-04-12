<template>

    <div>
<!--        <div style="padding: 10px 0">-->
<!--            <el-input style="width: 200px" placeholder="请输入姓名" suffix-icon="el-icon-search" class="ml-5"-->
<!--                      v-model="uname"></el-input>-->
<!--            <el-input style="width: 200px" placeholder="请输入邮箱" suffix-icon="el-icon-message" class="ml-5"-->
<!--                      v-model="email"></el-input>-->
<!--            <el-input style="width: 200px" placeholder="请输入地址" suffix-icon="el-icon-location" class="ml-5"-->
<!--                      v-model="location"></el-input>-->
<!--            <el-button class="ml-5" type="primary" icon="el-icon-search" circle @click="load"></el-button>-->
<!--            <el-button class="ml-5" type="warning" icon="el-icon-refresh" circle @click="reset"></el-button>-->

<!--        </div>-->


        <el-table :data="tableData" border stripe header-cell-class-name="headerBg">
            <el-table-column prop="mid" label="信息ID" width="200"></el-table-column>
            <el-table-column prop="uid" label="用户ID" width="200"></el-table-column>
            <el-table-column prop="lid" label="律师ID" width="200"></el-table-column>
            <el-table-column prop="status" label="状态" width="200"></el-table-column>
            <el-table-column prop="date" label="创建日期" width="200"></el-table-column>
            <el-table-column prop="description" label="消息信息" width="200"></el-table-column>
            <el-table-column prop="others" label="备注" width="200"></el-table-column>

            <el-table-column>
                <template slot-scope="scope">
                    <el-button type="success" icon="el-icon-edit" circle @click="handleEdit(scope.row)"></el-button>

                </template>
            </el-table-column>
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
        name: "ManMsg",
        data() {
            return {
                //分页查询的参数
                total: 0,
                tableData: [],
                pageNum: 1,
                pageSize: 5,
            }

        },
        created() {
            this.load()
        },
        methods: {
            load() {
                //获取分页用户数据
                this.request.get("http://localhost:9090/msg/page", {
                    params: {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        findAll: true

                    }
                }).then(res => {
                    console.log(res)
                    if (res.code === '200') {
                        this.tableData = res.data.records
                        this.total = res.data.total
                    }
                    if (res.code === '401') {
                        this.$router.push("/ManLogin")
                    }
                })

            },
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
            handleEdit(row) {
                this.request.post("http://localhost:9090/msg/update", row).then(res => {
                    if (res.code === '200') {
                        this.$message.success("修改成功")
                    } else {
                        this.$message.error(res.msg)
                    }
                    this.dialogFormVisible = false
                    this.load()
                })
            },
        }
    }
</script>

<style scoped>
    .headerBg {
        background-color: #ccc !important;
    }
</style>