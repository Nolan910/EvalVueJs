import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Flux from '../views/Flux.vue';
import NewsDetail from '../views/NewsDetail.vue';
import Preferences from '../views/Preferences.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/flux/:id', component: Flux },
  { path: '/news/:id', component: NewsDetail },
  { path: '/preferences', component: Preferences },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
