/**
 * reCAPTCHA v3 composable
 */
import { loadRecaptcha } from '../utils/recaptcha-loader'

export const useRecaptcha = () => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''

  /**
   * Execute reCAPTCHA and get token
   * @param {string} action - Action name (e.g., 'contact_form')
   * @returns {Promise<string|null>} - reCAPTCHA token or null if failed
   */
  const executeRecaptcha = async (action = 'contact_form') => {
    if (!siteKey) {
      console.warn('[reCAPTCHA] Site key not configured')
      return null
    }

    // Load reCAPTCHA if not already loaded
    try {
      await loadRecaptcha()
    } catch (error) {
      console.error('[reCAPTCHA] Failed to load:', error)
      return null
    }

    if (typeof window === 'undefined' || !window.grecaptcha) {
      console.warn('[reCAPTCHA] reCAPTCHA not available')
      return null
    }

    try {
      const token = await window.grecaptcha.execute(siteKey, { action })
      return token
    } catch (error) {
      console.error('[reCAPTCHA] Error executing reCAPTCHA:', error)
      return null
    }
  }

  /**
   * Check if reCAPTCHA is available
   * @returns {boolean}
   */
  const isRecaptchaAvailable = () => {
    return !!(
      siteKey &&
      typeof window !== 'undefined' &&
      window.grecaptcha &&
      typeof window.grecaptcha.execute === 'function'
    )
  }

  return {
    executeRecaptcha,
    isRecaptchaAvailable,
    siteKey
  }
}

