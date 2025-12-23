/**
 * Dynamic reCAPTCHA loader
 * Loads reCAPTCHA script only if site key is configured
 */
export const loadRecaptcha = () => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

  if (!siteKey) {
    console.warn('[reCAPTCHA] Site key not configured, skipping load')
    return Promise.resolve()
  }

  // Check if already loaded
  if (window.grecaptcha && window.grecaptcha.ready) {
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    // Check if script is already in DOM
    const existingScript = document.querySelector('script[src*="recaptcha"]')
    if (existingScript) {
      // Wait for grecaptcha to be ready
      const checkReady = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.ready) {
          clearInterval(checkReady)
          resolve()
        }
      }, 100)
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    script.onload = () => {
      // Wait for grecaptcha to be ready
      const checkReady = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.ready) {
          clearInterval(checkReady)
          resolve()
        }
      }, 100)
    }
    script.onerror = () => {
      reject(new Error('Failed to load reCAPTCHA'))
    }
    document.head.appendChild(script)
  })
}

