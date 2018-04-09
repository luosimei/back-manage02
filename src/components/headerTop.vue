<template>
    <div id="headerTop" class="header-containter">
        <div>
          <img src="../assets/logo.png" width="50" height="50" alt="">logo
        </div>
        <el-dropdown @command="handleCommand">
            <img src="../assets/logo.png" width="50" height="50" alt="">
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="help">查看帮助</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
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
       methods:{
          handleCommand(command){
             if(command=='help'){
                this.$router.push('/index');
             }else if(command=='logout'){
                this.$router.push('/');
             }else{
                this.$message({
                   type:'error',
                   message:'出错，请刷新重试'
                })
             }
           }
       }
    }
</script>
<style>
  .header-containter{
      position: fixed;
      top:0;
      left:0;
      right:0;
      z-index: 4;
      height: 60px;
      display: flex;
      justify-content: space-between;
      background-color: #eff2f7;


  }
</style>
