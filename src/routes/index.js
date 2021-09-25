import Home from '../views/Home.vue'
import MoreQuotes from '../views/MoreQuotes.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quotes',
    name: 'MoreQuotes',
    component: MoreQuotes,
  },
]
