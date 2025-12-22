<template>
  <nav v-if="currentRoute !== 'Home'" class="breadcrumbs" aria-label="Breadcrumb">
    <div class="container">
      <ol class="breadcrumb-list">
        <li class="breadcrumb-item">
          <router-link to="/">Inicio</router-link>
        </li>
        <li class="breadcrumb-item">
          <span class="separator">/</span>
          <span class="current">{{ currentPageName }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const routeNames = {
  'Home': 'Inicio',
  'Services': 'Servicios',
  'Portfolio': 'Portafolio',
  'FAQ': 'Preguntas Frecuentes',
  'Contact': 'Contacto'
}

const currentRoute = computed(() => route.name)
const currentPageName = computed(() => routeNames[route.name] || route.name)
</script>

<style scoped>
.breadcrumbs {
  padding: 15px 0;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-color);
  position: relative;
  z-index: 10;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-item a {
  color: var(--text-secondary) !important;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-item a:hover {
  color: var(--accent-color) !important;
}

.separator {
  margin: 0 10px;
  color: var(--text-secondary) !important;
}

.current {
  color: var(--text-color) !important;
  font-weight: 500;
}

.dark .breadcrumb-item a {
  color: #d1d1d6 !important;
}

.dark .breadcrumb-item a:hover {
  color: var(--accent-color) !important;
}

.dark .separator {
  color: #d1d1d6 !important;
}

.dark .current {
  color: #ffffff !important;
}

@media (max-width: 768px) {
  .breadcrumbs {
    padding: 15px 0;
  }
  
  .breadcrumb-list {
    font-size: 13px;
  }
}
</style>

