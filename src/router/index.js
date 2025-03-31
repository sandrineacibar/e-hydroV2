import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue' // Import App.vue instead

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App, // Use App.vue as the main view
    },
  ],
})

export default router
