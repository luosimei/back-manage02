<template>
    <div id="login">
        <div @click="login">login</div>
    </div>
</template>

<script>

    export default{
        name:'login',
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods:{
           login (){
               this.$router.push('index')
           }

        }
    }
</script>
