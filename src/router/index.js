import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import index from '@/pages/index'
import userList from '@/pages/userList'
import home from '@/pages/home'


Vue.use(Router);

/*const login = function(r){
  require.ensure([],function(r){
    require('@/pages/login')
  },'login')
};*/
const routes =  [
  {
      path: '/',
      name: 'login',
      component: login
  },{
      path:'/index',
      name:'index',
      component:index,
      children:[{
         path:'',
         component:home,
         meta:[]
      },{
         path:'/userList',
         component:userList,
         meta:['项目管理','用户列表']
      }]

  }
];

export default new Router({
  routes
})
