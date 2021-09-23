import { createApp } from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/',
});
const app = createApp(App);
app.use(router);
app.mount('#app');
