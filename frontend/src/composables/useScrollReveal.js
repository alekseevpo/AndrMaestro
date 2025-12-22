import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Composable for scroll reveal animations
 */
export function useScrollReveal(options = {}) {
  const elementRef = ref(null)
  const isVisible = ref(false)

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, defaultOptions)

  onMounted(() => {
    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (elementRef.value) {
      observer.unobserve(elementRef.value)
    }
    observer.disconnect()
  })

  return {
    elementRef,
    isVisible
  }
}

