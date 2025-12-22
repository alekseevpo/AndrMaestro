import { onMounted, onUnmounted, nextTick } from 'vue'

/**
 * Composable for focus trap in modals
 */
export function useFocusTrap(containerRef) {
  let firstFocusableElement = null
  let lastFocusableElement = null

  const getFocusableElements = () => {
    if (!containerRef.value) return []
    
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(', ')

    return Array.from(containerRef.value.querySelectorAll(focusableSelectors))
      .filter(el => {
        const style = window.getComputedStyle(el)
        return style.display !== 'none' && style.visibility !== 'hidden'
      })
  }

  const trapFocus = (e) => {
    if (!containerRef.value) return

    const focusableElements = getFocusableElements()
    if (focusableElements.length === 0) return

    firstFocusableElement = focusableElements[0]
    lastFocusableElement = focusableElements[focusableElements.length - 1]

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault()
          lastFocusableElement.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault()
          firstFocusableElement.focus()
        }
      }
    }
  }

  const focusFirstElement = async () => {
    await nextTick()
    const focusableElements = getFocusableElements()
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  }

  onMounted(() => {
    if (containerRef.value) {
      document.addEventListener('keydown', trapFocus)
      focusFirstElement()
    }
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', trapFocus)
  })

  return { focusFirstElement }
}

