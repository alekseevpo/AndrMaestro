import { createRouter, createWebHistory } from 'vue-router'

// Lazy load routes for code splitting
const Home = () => import('../views/Home.vue')
const Services = () => import('../views/Services.vue')
const Portfolio = () => import('../views/Portfolio.vue')
const Contact = () => import('../views/Contact.vue')
const FAQ = () => import('../views/FAQ.vue')

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
  routes
})

export default router

