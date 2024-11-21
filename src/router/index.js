import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Characters from '@/views/Characters.vue';
import CharacterDetails from '@/views/CharacterDetails.vue';
import ContactView from '@/views/ContactView.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/characters', name: 'characters', component: Characters },
  { path: '/characters/:id', name: 'CharacterDetails', component: CharacterDetails},
  { path: '/contact', name: 'form', component: ContactView }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
