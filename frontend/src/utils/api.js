/**
 * API utility functions with error handling and retry logic
 */

// Определяем, находимся ли мы в продакшене
const isProduction = import.meta.env.PROD
const isLocalhost = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  retryAttempts: 3,
  retryDelay: 1000,
  // В продакшене не делаем запросы к API, если не указан явный URL
  useApi: !isProduction || isLocalhost || !!import.meta.env.VITE_API_URL
}

/**
 * Fetch with retry logic
 */
const fetchWithRetry = async (url, options = {}, retries = config.retryAttempts) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, config.retryDelay))
      return fetchWithRetry(url, options, retries - 1)
    }
    throw error
  }
}

/**
 * Submit contact form
 * @param {Object} formData - Form data
 * @param {string} recaptchaToken - reCAPTCHA v3 token (optional)
 */
export const submitContactForm = async (formData, recaptchaToken = null) => {
  // В production без API URL не делаем запрос
  if (!config.useApi) {
    // В production форма не отправляется на backend
    // Можно добавить интеграцию с сервисом типа Formspree, EmailJS и т.д.
    return Promise.resolve({
      success: false,
      error: 'El formulario no está disponible en este momento. Por favor, contacta directamente por email o WhatsApp.'
    })
  }

  try {
    const payload = {
      ...formData,
      ...(recaptchaToken && { recaptcha_token: recaptchaToken })
    }

    // Добавляем таймаут для запроса (8 секунд)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000)
    
    try {
      const response = await fetchWithRetry(`${config.apiUrl}/api/contact`, {
        method: 'POST',
        body: JSON.stringify(payload),
        signal: controller.signal
      })
      clearTimeout(timeoutId)
      
      const data = await response.json()
      return { success: true, data }
    } catch (fetchError) {
      clearTimeout(timeoutId)
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timeout')
      }
      throw fetchError
    }
  } catch (error) {
    // Не логируем ошибки в консоль, чтобы не засорять её
    return {
      success: false,
      error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
    }
  }
}

/**
 * Get projects
 */
export const getProjects = async () => {
  try {
    const response = await fetchWithRetry(`${config.apiUrl}/api/projects`)
    const data = await response.json()
    return { success: true, data: data.projects || [] }
  } catch (error) {
    console.error('Error fetching projects:', error)
    return {
      success: false,
      error: 'Error al cargar los proyectos. Por favor, recarga la página.'
    }
  }
}

/**
 * Get single project
 */
export const getProject = async (projectId) => {
  try {
    const response = await fetchWithRetry(`${config.apiUrl}/api/projects/${projectId}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching project:', error)
    return {
      success: false,
      error: 'Error al cargar el proyecto.'
    }
  }
}

/**
 * Get blog posts
 */
export const getBlogPosts = async (category = null) => {
  // В продакшене без явного API URL сразу возвращаем ошибку (будет использован fallback)
  if (!config.useApi) {
    // Возвращаем сразу, без задержки
    return Promise.resolve({
      success: false,
      error: 'API no disponible en producción',
      data: []
    })
  }

  try {
    const url = category 
      ? `${config.apiUrl}/api/blog/posts?category=${encodeURIComponent(category)}`
      : `${config.apiUrl}/api/blog/posts`
    
    // Добавляем таймаут для запроса
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3000) // 3 секунды таймаут
    
    try {
      const response = await fetchWithRetry(url, {
        signal: controller.signal
      })
      clearTimeout(timeoutId)
      const data = await response.json()
      return { success: true, data: data.posts || [] }
    } catch (fetchError) {
      clearTimeout(timeoutId)
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timeout')
      }
      throw fetchError
    }
  } catch (error) {
    // Не логируем ошибки в консоль, чтобы не засорять её
    return {
      success: false,
      error: 'Error al cargar los artículos del blog.',
      data: []
    }
  }
}

/**
 * Get single blog post by slug
 */
export const getBlogPost = async (slug) => {
  // В продакшене без явного API URL сразу возвращаем ошибку (будет использован fallback)
  if (!config.useApi) {
    // Не логируем ошибку в консоль, чтобы не засорять её
    return {
      success: false,
      error: 'API no disponible en producción'
    }
  }

  try {
    const response = await fetchWithRetry(`${config.apiUrl}/api/blog/posts/${slug}`)
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    // Логируем только если это не CORS ошибка в продакшене
    if (config.useApi) {
      console.error('Error fetching blog post:', error)
    }
    return {
      success: false,
      error: 'Error al cargar el artículo.'
    }
  }
}

