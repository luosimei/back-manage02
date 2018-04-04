import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import index from '@/pages/index'


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
    component:index
  }
];

export default new Router({
  routes
})
