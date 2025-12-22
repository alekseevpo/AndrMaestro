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
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.breadcrumb-item a:hover {
  color: var(--accent-color);
}

.separator {
  margin: 0 10px;
  color: var(--text-secondary);
}

.current {
  color: var(--text-color);
  font-weight: 500;
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

