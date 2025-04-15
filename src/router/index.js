import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StationView from '@/views/StationView.vue'
import AquasisDashboard from '@/views/system/AquasisDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/station',
      name: 'station',
      component: StationView,
    },
    {
      path: '/aquasisdashboard',
      name: 'aquasisdashboard',
      component: AquasisDashboard,
    },

  ],
})

export default router
