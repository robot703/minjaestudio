import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue';
import Project1 from './components/Project1.vue';
import Project2 from './components/Project2.vue';
import Project3 from './components/Project3.vue';
import Etc from './components/Etc.vue';

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Project1",
    component: Project1,
  },
  {
    path: "/Project2",
    component: Project2,
  },
  {
    path: "/Project3",
    component: Project3,
  },
  {
    path: "/etc",
    component: Etc,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;