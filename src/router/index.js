import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: () => import('@/views/HomeView.vue') // Lazy-Loading
  },
  { 
    path: '/personajes',
    name: 'Characters',
    component: () => import('@/views/Characters.vue'), // Lazy-Loading
    alias: ['/people', '/characters'] // alias para la ruta /personajes
  },
  { 
    path: '/characters/:id',
    name: 'CharacterDetails',
    component: () => import('@/views/CharacterDetails.vue'), // Lazy-Loading
    props: true, // pasar el ID como prop
  },
  { 
    path: '/contacto',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'), // Lazy-Loading
    alias: ['/contact', '/form']
  },
  { path: '/:catchAll(.*)',  // Ruta comodín para 404
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'), // Lazy-Loading
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;