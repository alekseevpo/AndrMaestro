import { createRouter, createWebHistory } from 'vue-router'

// Lazy load routes for code splitting
const Home = () => import('../views/Home.vue')
const Services = () => import('../views/Services.vue')
const Portfolio = () => import('../views/Portfolio.vue')
const Contact = () => import('../views/Contact.vue')
const FAQ = () => import('../views/FAQ.vue')
const Blog = () => import('../views/Blog.vue')
const BlogPost = () => import('../views/BlogPost.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services
  },
  {
    path: '/portafolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/preguntas-frecuentes',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router

