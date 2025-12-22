<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Volver arriba"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const scrollThreshold = 300

const handleScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 90px;
  left: 20px;
  width: 50px;
  height: 50px;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.4);
  z-index: 998;
  transition: all 0.3s ease;
}

.back-to-top svg {
  width: 24px;
  height: 24px;
  color: white;
  stroke: white;
  flex-shrink: 0;
}

.back-to-top:hover {
  background-color: #0051d5;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 122, 255, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

@media (max-width: 768px) {
  .back-to-top {
    width: 48px;
    height: 48px;
    bottom: 80px;
    left: 16px;
  }

  .back-to-top svg {
    width: 22px;
    height: 22px;
  }

  .back-to-top:hover {
    transform: translateY(-2px);
  }
}

@media (max-width: 480px) {
  .back-to-top {
    width: 44px;
    height: 44px;
    bottom: 75px;
    left: 12px;
  }

  .back-to-top svg {
    width: 20px;
    height: 20px;
  }
}
</style>

