import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StationView from '@/views/StationView.vue'
import AquasisView from '@/views/system/AquasisView.vue'
import AquabonView from '@/views/system/AquabonView.vue'
import ColdpointView from '@/views/system/ColdpointView.vue'
import WaterdropsView from '@/views/system/WaterdropsView.vue'

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
      path: '/aquasis',
      name: 'aquasis',
      component: AquasisView,
    },
    {
      path: '/aquabon',
      name: 'aquabon',
      component: AquabonView,
    },
    {
      path: '/coldpoint',
      name: 'coldpoint',
      component: ColdpointView,
    },
    {
      path: '/waterdrops',
      name: 'waterdrops',
      component: WaterdropsView,
    },

  ],
})

export default router
