import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'
import FAQ from '../views/FAQ.vue'

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

