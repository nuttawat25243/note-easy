import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Mynotes from '../pages/Mynotes.vue';
import Categories from '../pages/Categories.vue';
import Tags from '../pages/Tags.vue';
import Sidebar from '../components/Sidebar.vue';
import Write from '../components/Write.vue';
import Archive from '../pages/Archive.vue';
import Trash from '../pages/Trash.vue';
const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/mynotes',
    component: Mynotes,
  },
 
  {
    path: '/mynotes/:cat',
    component: Categories,
  },
  {
    path: '/mynotes/:tag',
    component: Tags,
  },
  {
    path: '/archive',
    component: Archive,
  },
  {
    path: '/trash',
    component: Trash,
  },
  {
    path: '/',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
