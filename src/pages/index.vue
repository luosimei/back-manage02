<template>
  <div id="index" class="fillcontain">
      <header-top></header-top>
      <div class="manage-page">
          <el-row style="height: 100%;">
              <el-col :span="3" style="min-height:100%;background-color: #324057;">
                  <el-menu default-active="defaultActive" background-color="#545c64"
                           text-color="#fff"
                           active-text-color="#ffd04b">
                      <el-menu-item index="index">首页</el-menu-item>
                      <el-submenu index="2">
                          <template slot="title">项目管理</template>
                          <el-menu-item index="userList">用户列表</el-menu-item>
                      </el-submenu>


                      <el-submenu index="3">
                        <template slot="title">项目管理</template>
                        <el-menu-item index="userList">用户列表</el-menu-item>
                      </el-submenu>

                    <el-submenu index="4">
                      <template slot="title">项目管理</template>
                      <el-menu-item index="userList">用户列表</el-menu-item>
                    </el-submenu>

                  </el-menu>
              </el-col>
              <el-col :span="21" style="height:100%;">
                  <router-view></router-view>
              </el-col>
          </el-row>
      </div>

  </div>
</template>

<script>
  import headerTop from '@/components/headerTop';

    export default{
        name:'index',
        components:{
            headerTop
        },
        data(){
            return {
                msg: 'hello vue'
            }
        },
    }
</script>


