<template>
    <div id="chart" class="chart">
        <div :id="id" :option="option"></div>
    </div>
</template>

<script>
   import Highcharts from 'highcharts'
   export default{
      name:'chart',
      props:{
         id:{
            type:String,
         },
         option:{
            type:Object
         }
      },
      mounted(){
         Highcharts.chart(this.id,this.option);
      }
   }
</script>
