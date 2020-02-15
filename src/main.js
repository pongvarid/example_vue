import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/css/base.css';  
import '@/assets/css/custom.css'; 

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
