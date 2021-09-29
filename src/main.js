import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import { routes } from './router'
import App from './App.vue'
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
  base: '/',
})
export default router

const app = createApp(App)
app.use(router)
app.mount('#app')
