import Home from '../views/Home.vue'
import MoreQuotes from '../views/MoreQuotes.vue'
import AuthorQuotes from '../views/AuthorQuotes.vue'

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
  {
    path: '/quotes/:author',
    name: 'AuthorQuotes',
    component: AuthorQuotes,
  },
]
