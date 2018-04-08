<template>
    <div id="home">
        <!--s:breadCrumb-->
        <bread-crumb></bread-crumb>
        <!--e:breadCrumb-->
        <div>this is home body</div>
    </div>
</template>

<script>
   import breadCrumb from '@/components/breadCrumb'
   export default{
      name:'name',
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