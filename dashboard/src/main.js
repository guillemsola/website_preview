import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-vue/dist/bootstrap-vue.css"
import "./styles/slate.css";
import "./styles/bootswatch.css";
import "./styles/app.css";
import VueImg from 'v-img';

if (process.env.NODE_ENV !== 'production') {
  Vue.prototype.$apiBaseAddress = 'http://localhost:3000';
}
else {
  Vue.prototype.$apiBaseAddress = '';
}

Vue.use(VueImg);

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
