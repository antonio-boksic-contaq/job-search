import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import JobResultsView from '@/views/JobResultsView.vue';
import JobView from '@/views/JobView.vue';

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
  },
  {
    path: '/jobs/results/:id',
    name: 'JobListing',
    component: JobView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // grazie alla sintassi ES6 possiamo scrivere cosi invece di routes: routes
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'smooth' };
  }
});

export default router;
