import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import JobResultsView from '@/views/JobResultsView.vue';

const routes = [
  {
    path: '/', //root path
    name: 'Home', // uniqe identifier / name for this route
    component: HomeView
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobResultsView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes // grazie alla sintassi ES6 possiamo scrivere cosi invece di routes: routes
});

export default router;
