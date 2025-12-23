<template>
  <Transition name="fade">
    <div v-if="isLoading" class="page-loader">
      <div class="loader-spinner"></div>
      <p class="loader-text">Cargando...</p>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const isLoading = ref(false)
const router = useRouter()
let timeoutId = null

onMounted(() => {
  // Скрыть loader после полной загрузки страницы
  const hideLoader = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      isLoading.value = false
    }, 100)
  }

  // Скрыть loader когда страница полностью загружена
  if (document.readyState === 'complete') {
    hideLoader()
  } else {
    window.addEventListener('load', hideLoader)
  }

  router.beforeEach((to, from, next) => {
    if (from.name !== null) {
      isLoading.value = true
    }
    next()
  })

  router.afterEach(() => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      isLoading.value = false
    }, 300)
  })
})

onBeforeUnmount(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.dark .page-loader {
  background-color: rgba(0, 0, 0, 0.95);
}

.loader-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--border-color);
  border-top-color: var(--accent-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loader-text {
  margin-top: 20px;
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

