import { ref, watch, onMounted } from 'vue'

const isNewYearEnabled = ref(false)

export function useNewYearTheme() {
  // Check if it's New Year period (December 15 - January 15)
  const isNewYearPeriod = () => {
    const now = new Date()
    const month = now.getMonth() // 0-11
    const day = now.getDate()
    
    // December 15 - December 31
    if (month === 11 && day >= 15) return true
    // January 1 - January 15
    if (month === 0 && day <= 15) return true
    
    return false
  }

  // Load theme from localStorage or auto-enable if it's New Year period
  onMounted(() => {
    const saved = localStorage.getItem('newYearTheme')
    
    if (saved !== null) {
      // User has explicitly set preference
      isNewYearEnabled.value = saved === 'true'
    } else {
      // Auto-enable if it's New Year period
      isNewYearEnabled.value = isNewYearPeriod()
    }
    
    applyTheme()
  })

  const applyTheme = () => {
    if (isNewYearEnabled.value) {
      document.documentElement.classList.add('new-year')
      localStorage.setItem('newYearTheme', 'true')
    } else {
      document.documentElement.classList.remove('new-year')
      localStorage.setItem('newYearTheme', 'false')
    }
  }

  const toggleNewYearTheme = () => {
    isNewYearEnabled.value = !isNewYearEnabled.value
    applyTheme()
  }

  watch(isNewYearEnabled, () => {
    applyTheme()
  })

  return {
    isNewYearEnabled,
    toggleNewYearTheme,
    isNewYearPeriod: isNewYearPeriod()
  }
}

