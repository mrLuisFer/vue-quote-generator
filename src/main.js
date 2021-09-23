import { createApp } from 'vue';
import VueRouter, { createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import { routes } from './routes';

const router = new VueRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
  base: '/',
});

const app = createApp(App);
app.use(router);
app.mount('#app');
