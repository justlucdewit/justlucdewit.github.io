import { createApp } from 'vue'
import App from './App.vue'
import './main.scss'

const app = createApp(App)

import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/Blog.vue')
    },
  ],
})

app.use(router)

app.mount('#app')
