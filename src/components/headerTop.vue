<template>
    <div id="headerTop">
        <div class="header-containter">
            <div>
              <img src="../assets/logo.png" width="50" height="50" alt="">logo
            </div>
            <el-dropdown>
                <img src="../assets/logo.png" width="50" height="50" alt="">
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看帮助</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default{
        name:'headerTop',
        data(){
            return {
                msg: 'hello vue'
            }
        },
    }
</script>
<style>
  .header-containter{
    display: flex;
    justify-content: space-between;
    background-color: #eff2f7;
  }
</style>
