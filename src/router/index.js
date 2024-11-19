import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StepOne from '../components/partials/StepOne.vue'
import StepTwo from '../components/partials/StepTwo.vue'
import StepThree from '../components/partials/StepThree.vue'

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
    { path: '/step-one', component: StepOne },
    { path: '/etape2', component: StepTwo },
    { path: '/etape3', component: StepThree },
  ],
})

export default router
