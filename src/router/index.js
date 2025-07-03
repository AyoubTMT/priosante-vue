import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

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
      component: () => import('../views/VosQuestions.vue'),
    },
    {
      path: '/devis',
      name: 'devis',
      component: () => import('../views/Subscription.vue'), // Parent component for all steps
 
    },
    {
      path: '/devis/recapitulatif',
      name: 'recapitulatif',
      component: () => import('../views/Recapitulatif.vue'),
    },
    {
      path: '/lassurance',
      name: 'lassurance',
      component: () => import('../views/Lassurance.vue'),
    },
    {
      path: '/vosquestions',
      name: 'vosquestions',
      component: () => import('../views/VosQuestions.vue'),
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: () => import('../views/mentionsLegales.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/', // Redirect undefined routes to home 
    },
  ],
})

export default router
