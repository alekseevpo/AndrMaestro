import { onMounted, onUnmounted } from 'vue'

/**
 * Composable for keyboard event handling
 */
export function useKeyboard(key, callback) {
  const handleKeyPress = (event) => {
    if (event.key === key) {
      callback(event)
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeyPress)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyPress)
  })
}

/**
 * Composable for ESC key to close modals
 */
export function useEscapeKey(callback) {
  return useKeyboard('Escape', callback)
}

