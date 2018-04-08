<template>
    <div id="userList">
        <bread-crumb></bread-crumb>
        <div>this is userList body</div>
    </div>
</template>

<script>
    import breadCrumb from '@/components/breadCrumb'
    export default{
        name:"userList",
        components:{
            breadCrumb
        },
        data(){
            return {
                msg: 'hello vue'
            }
        },
    }
</script>
