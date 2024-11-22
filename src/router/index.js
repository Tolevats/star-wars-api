import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Characters from '@/views/Characters.vue';
import CharacterDetails from '@/views/CharacterDetails.vue';
import ContactView from '@/views/ContactView.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { 
    path: '/personajes', 
    component: Characters,
    alias: ['/people', '/characters'] // alias para la ruta /personajes
  },
  { 
    path: '/characters/:id',
    component: CharacterDetails,
    props: true // pasar el ID como prop
  },
  { 
    path: '/contacto',
    component: ContactView,
    alias: ['/contact', '/form']
  },
  { path: '/:catchAll(.*)', component: NotFound } // Ruta comodín para 404
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;