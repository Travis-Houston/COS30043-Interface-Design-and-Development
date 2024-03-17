import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Tasks from './views/Tasks.vue';
import Units from './views/Units.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home,
  },
  {
    path: '/tasks',
    name: 'TasksView',
    component: Tasks,
  },
  {
    path: '/units',
    name: 'UnitsView',
    component: Units,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;