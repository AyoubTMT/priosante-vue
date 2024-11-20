import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Step1 from '../components/Step1.vue';
import Step2 from '../components/Step2.vue';
import Step3 from '../components/Step3.vue';

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
      children: [
        {
          path: '',
          name: 'Step1',
          component: Step1,
        },
        {
          path: 'step2',
          name: 'Step2',
          component: Step2,
        },
        {
          path: 'step3',
          name: 'Step3',
          component: Step3,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/', // Redirect undefined routes to home 
    },
  ],
})

export default router
