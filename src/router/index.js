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
        {
          path: 'step4',
          name: 'Step4',
          component: Step4,
        },
        {
          path: 'step5',
          name: 'Step5',
          component: Step5,
        },
        {
          path: 'step6',
          name: 'Step6',
          component: Step6,
        },
        {
          path: 'step7',
          name: 'Step7',
          component: Step7,
        },
      ],
    },
    {
      path: '/tarifs',
      name: 'tarifs',
      component: () => import('../views/Tarification.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/', // Redirect undefined routes to home 
    },
  ],
})

export default router
