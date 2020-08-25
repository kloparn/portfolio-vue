import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

import routes from './router';

Vue.use(VueRouter);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;


const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');