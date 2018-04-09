<template>
    <div id="userList">
        <bread-crumb></bread-crumb>
        <!--s:list-->
        <template>

            <el-table ref="multipleTable" :data="tableData3" stripe border fit tooltip-effect="dark" style="width: 100%;"
                      @selection-change="handleSelectionChange" @select-all="handleAllSelection">

                <el-table-column type="selection"></el-table-column>

                <el-table-column label="日期">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>

                <el-table-column prop="name" label="姓名"></el-table-column>

                <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleEdit(scope.$index,scope.row)" icon="el-icon-edit">编辑</el-button>
                        <el-button @click="handleDelete(scope.$index,scope.row)" icon="el-icon-delete" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!--<div style="margin-top: 20px">
                <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
            </div>-->
        </template>
        <!--e:list-->

        <!--s:pagination-->
        <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]"
                :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="count">
            </el-pagination>
        </div>
        <!--e:pagination-->

    </div>
</template>

<script>
    import breadCrumb from '@/components/breadCrumb'
    export default{
        name:"userList",
        components:{
            breadCrumb
        },
       data() {
          return {
             currentPage: 1,
             count:0,
             tableData3: [{
                date: '2016-05-03',
                name: '1王小虎',
                address: '上海市普陀金沙江路上海市普陀区金沙江路区金沙江路 1518 弄'
             }, {
                date: '2016-05-02',
                name: '2王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-04',
                name: '3王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-01',
                name: '4王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-08',
                name: '5王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-06',
                name: '6王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-06',
                name: '7王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-06',
                name: '8王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-06',
                name: '9王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-06',
                name: '10王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-06',
                name: '11王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-06',
                name: '12王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-06',
                name: '13王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-06',
                name: '14王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-06',
                name: '15王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }, {
                date: '2016-05-07',
                name: '16王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
             }],
             multipleSelection: []
          }
       },
       mounted(){
          this.count = this.tableData3.length;   //count总页码数
       },
       methods: {
          handleSizeChange(val) {
             console.log(`每页 ${val} 条`);  //ES6的模板语法，直接取值$(value),需要用反引号 `` 将内容包裹
          },
          handleCurrentChange(val) {
             this.currentPage = val;

             console.log(`当前页: ${val}`);
          },
          toggleSelection(rows) {
             if (rows) {
                rows.forEach(row => {
                   this.$refs.multipleTable.toggleRowSelection(row);
                });
             } else {
                this.$refs.multipleTable.clearSelection();
             }
          },
          handleSelectionChange(val) {
             this.multipleSelection = val;
          },
          handleAllSelection(val){
             this.multipleSelection = val;
          },
          handleDelete(index,row){
            console.log(index+' -- '+row);
             this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
             }).then(() => {
                this.$message({
                   type: 'success',
                   message: '删除成功!'
                });
             }).catch(() => {
                this.$message({
                   type: 'info',
                   message: '已取消删除'
                });
             });
          }
       }
    }
</script>

<style>
    .pagination{
        padding:20px 0;
    }
</style>
