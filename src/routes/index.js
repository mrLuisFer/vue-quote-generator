import Home from '../views/Home.vue';
import AllQuotes from '../views/AllQuotes.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: AllQuotes,
  },
];
