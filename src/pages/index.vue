<template>
  <div class="index  fillcontain">

      <!--s:header-->
      <header-top></header-top>
      <!--e:header-->

      <!--s:main-->
      <el-row style="height: 100%;">
          <!--1. s:menu left-->
          <el-col :span="4" style="min-height:100%;height:auto;background-color: #324057;">
              <el-menu default-active="2" style="min-height: 100%;" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
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
          <!--1.e:menu left-->

          <!--2. s:memu content-->
          <el-col :span="20" style="height:100%;overflow-y: auto;">
              <router-view></router-view>
          </el-col>
          <!--2. e:memu content-->

      </el-row>
      <!--s:main-->

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
       computed: {
          defaultActive: function(){
             return this.$route.path.replace('/', '');
          }
       },
    }
</script>


