import Vue from 'vue'
import VueRouter from 'vue-router'

//import views
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Blog from '@/views/Blog.vue'
import Links from '@/views/Links.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/links',
    name: 'links',
    component: Links,
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: '',
  routes
})

export default router
