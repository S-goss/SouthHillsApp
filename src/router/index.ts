import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'businessprograms',
        component: () => import('@/views/BusinessPrograms.vue')
      },
      {
        path: 'healthcarePrograms',
        component: () => import('@/views/HealthcarePrograms.vue')
      },
      {
        path: 'technologyPrograms',
        component: () => import('@/views/TechnologyPrograms.vue')
      },
      {
        path: 'contactForm',
        component: () => import('@/views/ContactForm.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
