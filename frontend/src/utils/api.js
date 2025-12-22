/**
 * API utility functions with error handling and retry logic
 */

const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  retryAttempts: 3,
  retryDelay: 1000
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
 */
export const submitContactForm = async (formData) => {
  try {
    const response = await fetchWithRetry(`${config.apiUrl}/api/contact`, {
      method: 'POST',
      body: JSON.stringify(formData)
    })

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('Error submitting contact form:', error)
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

