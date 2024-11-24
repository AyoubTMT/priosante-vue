import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Step1 from '../components/Step1.vue';
import Step2 from '../components/Step2.vue';
import Step3 from '../components/Step3.vue';
import Step4 from '../components/Step4.vue';
import Step5 from '../components/Step5.vue';
import Step6 from '../components/Step6.vue';
import Step7 from '../components/Step7.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/devis',
      component: () => import('../views/Subscription.vue'), // Parent component for all steps
 
    },
    {
      path: '/devis/tarifs',
      name: 'tarifs',
      component: () => import('../views/Tarification.vue'),
    },
    {
      path: '/devis/options',
      name: 'options',
      component: () => import('../views/Options.vue'),
    },
    {
      path: '/devis/informations',
      name: 'informations',
      component: () => import('../views/Informations.vue'),
    },
    {
      path: '/devis/paiement',
      name: 'paiement',
      component: () => import('../views/Paiement.vue'),
    },
    {
      path: '/devis/complet',
      name: 'complet',
      component: () => import('../views/document.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/', // Redirect undefined routes to home 
    },
  ],
})

export default router
