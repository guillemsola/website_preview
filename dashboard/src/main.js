import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-vue/dist/bootstrap-vue.css"
import "./styles/slate.css";
import "./styles/app.css";
import VueImg from 'v-img';

Vue.use(VueImg);

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
