<template>
    <div>
        <div style="margin: 10px">
            <el-button type="primary" @click="handleAdd">新增<i class="el-icon-circle-plus-outline"></i></el-button>

        </div>

        <el-table :data="tableData" border stripe header-cell-class-name="headerBg">
            <el-table-column prop="aid" label="ID" width="300"></el-table-column>
            <el-table-column prop="aname" label="姓名" width="300"></el-table-column>
            <el-table-column prop="others" label="备注" width="300"></el-table-column>

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
        <el-dialog title="管理员信息" :visible.sync="dialogFormVisible" width="40%">
            <el-form label-width="80px" size="small">
                <el-form-item label="管理员名">
                    <el-input v-model="form.aname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="form.others" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addAdmin">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "ManAdmin",
        data() {
            return{
                headerBg:'headerBg',
                //分页查询的参数
                total:0,
                tableData: [],
                pageNum:1,
                pageSize:5,

                //弹出表单的参数
                dialogFormVisible:false,
                form:{},
            }
        },
        created() {
            this.load()
        },
        methods: {
            load(){
                //获取分页用户数据
                this.request.get("http://localhost:9090/admin/page",{
                    params:{
                        pageNum:this.pageNum,
                        pageSize:this.pageSize,
                    }}).then(res=>{
                    console.log(res)
                    this.tableData = res.data.records
                    this.total = res.total
                })
            },
            handleSizeChange(pageSize){
                //选择分页大小
                console.log(pageSize)
                this.pageSize=pageSize
                this.load()
            },
            handleCurrentChange(pageNum){
                //选择分页页号
                console.log(pageNum)
                this.pageNum=pageNum
                this.load()
            },
            handleAdd(){
                //添加弹窗
                this.dialogFormVisible= true
                this.form={}
            },
            handleEdit(row){
                this.form = row
                this.dialogFormVisible=true

            },
            addAdmin(){
                //添加用户弹窗的确认键
                this.request.post("http://localhost:9090/admin/saveOrUpdate",this.form).then(res=>{
                    if (res){
                        this.$message.success("添加成功")
                    }
                    else{
                        this.$message.error("添加失败，该用户名已注册")
                    }
                    this.dialogFormVisible=false
                    this.load()
                })
            },
        }

    }
</script>

<style scoped>

</style>