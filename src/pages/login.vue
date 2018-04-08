<template>
    <div class="fillcontain login-bg">
        <transition name="form-fade" mode="in-out">
            <div class="login-box" v-show="loginShow">
                <!--s:titel-->
                <h1>admin管理系统</h1>
                <!--e:title-->
                <!--s:login box-->
                <div id="login" class="login">
                    <div class="admin-img">
                        <img src="../assets/admin.png" width="32" height="32" alt="">
                    </div>
                    <el-form :model="loginForm" :rules="rules" ref="loginForm" status-icon>

                        <el-form-item prop="username">
                            <el-input v-model="loginForm.username" type="text" placeholder="用户名" auto-complete="off"></el-input>
                        </el-form-item>

                        <el-form-item prop="password">
                            <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
                        </el-form-item>

                        <el-form-item style="text-align: center;">
                            <el-button type="primary" @click="login('loginForm')">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <!--e:login box-->
            </div>

        </transition>

    </div>
</template>

<script>
    export default{
        name:'login',
        data(){
            return {
                loginForm:{
                   username:'',
                   password:''
                },
               rules:{
                   username:[{
                      required:true,message:'用户名不能为空',trigger:'blur'
                   }],
                  password:[{
                      required:true, message:'密码不能为空',trigger:'blur'
                  }]
               },
               loginShow:false  //1.初始化设置login-box为隐藏，为transition过渡动画铺垫
            }
        },
       mounted(){
           this.loginShow = true;
       },
        methods:{
           login (formName){
                this.$refs[formName].validate((valid)=>{   //2.this.$refs[formName] => this.$refs.loginForm 相当于document.getElementById("loginForm"),使用$refs减少对dom的操作
                   if (valid) {
                      this.$message({
                         type: 'success',
                         message: '登录成功'
                      });
                      this.$router.push('index');
                   } else {
                      //this.$message.error('登录失败');
                      console.log('error submit!!');
                      return false;
                   }
                });

           }

        }
    }
</script>

<style>
    .login-bg{
        width: 100%;
        height: 100%;
        background-color: #324057;
    }
    .login-box{
        position: absolute;
        top:200px;
        left:50%;
        right:0;
        bottom:0;
        z-index: 2;
        margin-left: -181px;
        width: 362px;
        height: 382px;
    }
    .login-box .admin-img{
        width: 50px;
        height: 50px;
        line-height: 50px;
        margin:0 auto 15px;
        text-align: center;
        border:1px solid #ccc;
        border-radius: 25px;
    }
    .login-box .admin-img img{
        vertical-align: middle;
    }
    .login-box h1{
        font-size: 26px;
        font-weight: normal;
        height: 80px;
        line-height: 80px;
        text-align: center;
        color: #fff;
    }
    .login-box .login{
        width: 300px;
        height: 240px;
        padding: 30px;
        border:1px solid #999;
        background-color: #fff;
    }
    .login h1{
        text-align: center;
        font-size: 22px;

    }
    /*过渡,配合show使用*/
    .form-fade-enter-active, .form-fade-leave-active {
        transition: all 1s;
    }
    .form-fade-enter, .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
</style>
























