import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GeneralInfo from '../views/GeneralInfo.vue';
import GuaranteesOptions from '../views/GuaranteesOptions.vue';
import Pricing from '../views/Pricing.vue';
import Recap from '../views/Recap.vue';
import Subscription from '../views/Subscription.vue';

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
    // { path: '/', redirect: '/general-info' },
    { path: '/general-info', name: 'GeneralInfo', component: GeneralInfo },
    { path: '/guarantees-options', name: 'GuaranteesOptions', component: GuaranteesOptions },
    { path: '/pricing', name: 'Pricing', component: Pricing },
    { path: '/recap', name: 'Recap', component: Recap },
    { path: '/subscription', name: 'Subscription', component: Subscription },
  ],
})

export default router
