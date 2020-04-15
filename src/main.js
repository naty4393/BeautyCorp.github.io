import Vue from 'vue';
import bootstrap from 'bootstrap';
import './assets/app.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  bootstrap,
  render: (h) => h(App),
}).$mount('#app');
