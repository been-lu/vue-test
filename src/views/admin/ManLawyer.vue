<template>
    <div>
        <div style="padding: 10px 0">
            <el-input style="width: 200px" placeholder="请输入姓名" suffix-icon="el-icon-search" class="ml-5"
                      v-model="lname"></el-input>
            <el-input style="width: 200px" placeholder="请输入邮箱" suffix-icon="el-icon-message" class="ml-5"
                      v-model="email"></el-input>
            <el-input style="width: 200px" placeholder="请输入地址" suffix-icon="el-icon-location" class="ml-5"
                      v-model="location"></el-input>
            <el-button class="ml-5" type="primary" icon="el-icon-search" circle @click="load"></el-button>
            <el-button class="ml-5" type="warning" icon="el-icon-refresh" circle @click="reset"></el-button>

        </div>

        <div style="margin: 10px">
            <el-button type="primary" @click="handleAdd">新增<i class="el-icon-circle-plus-outline"></i></el-button>
        </div>

        <el-table :data="tableData" border stripe header-cell-class-name="headerBg">
            <el-table-column prop="lid" label="ID" width="200"></el-table-column>
            <el-table-column prop="lname" label="律师姓名" width="80"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
            <el-table-column prop="age" label="年龄" width="80"></el-table-column>
            <el-table-column prop="status" label="状态" width="80"></el-table-column>
            <el-table-column prop="location" label="地址" width="120"></el-table-column>
            <el-table-column prop="age" label="年龄" width="80"></el-table-column>
            <el-table-column prop="others" label="备注"></el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <el-button type="success" icon="el-icon-edit" circle @click="handleEdit(scope.row)"></el-button>
                    <el-popconfirm
                            class="ml-5"
                            confirm-button-text='好的'
                            icon="el-icon-info"
                            icon-color="blue"
                            title="删除达咩"
                    >
                        <el-button type="danger" icon="el-icon-delete" circle slot="reference"></el-button>
                    </el-popconfirm>

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
        <el-dialog title="用户信息" :visible.sync="dialogFormVisible" width="40%">
            <el-form label-width="80px" size="small">
                <el-form-item label="律师姓名">
                    <el-input v-model="form.lname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="认证状态">
                    <el-input v-model="form.status" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.location" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="form.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="form.others" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addUser">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "ManLawyer",
        data() {
            return {
                headerBg: 'headerBg',
                //分页查询的参数
                total: 0,
                tableData: [],
                lname: '',
                email: '',
                location: '',
                pageNum: 1,
                pageSize: 5,

                //弹出表单的参数
                dialogFormVisible: false,
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
            reset() {
                //充值所有搜索框
                this.lname = ''
                this.email = ''
                this.location = ''
                this.load()
            },
            handleAdd() {
                //添加律师弹窗
                this.dialogFormVisible = true
                this.form = {}
            },
            handleEdit(row) {
                this.form = row
                this.dialogFormVisible = true

            },
            addUser() {
                //添加用户弹窗的确认键
                this.request.post("http://localhost:9090/lawyer/saveOrUpdate", this.form).then(res => {
                    if (res) {
                        this.$message.success("添加成功")
                    } else {
                        this.$message.error("添加失败，该律师信箱已注册")
                    }
                    this.dialogFormVisible = false
                    this.load()
                })
            },
            load() {
                //获取分页用户数据
                this.request.get("http://localhost:9090/lawyer/page", {
                    params: {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        lname: this.lname,
                        email: this.email,
                        location: this.location
                    }
                }).then(res => {
                    console.log(res)
                    this.tableData = res.data.records
                    this.total = res.total
                })

            }
        },

    }
</script>

<style scoped>

</style>