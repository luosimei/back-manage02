<template>
    <div id="breadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread-container">
            <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default{
        name:'breadCrumb',
        data(){
            return {
                msg: 'hello vue'
            }
        },
    }
</script>

<style>
    .bread-container{
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        font-size: 14px;
        background-color: #fff;
        border-bottom:1px solid #e4e4e4;
    }
</style>