// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './style/common.css'

Vue.config.productionTip = false;
Vue.prototype.axios = axios;  //每个vue组件有独立的作用域。要全局使用可以把axios挂载到Vue的原型上。然后在组件内通过this访问this.axios(opt).then(fn)

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
