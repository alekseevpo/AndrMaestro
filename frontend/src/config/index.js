/**
 * Application configuration
 */

export const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  baseUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
  whatsappPhone: import.meta.env.VITE_WHATSAPP_PHONE || '+34633343468',
  siteName: import.meta.env.VITE_SITE_NAME || 'AndrMaestro',
  siteDescription: import.meta.env.VITE_SITE_DESCRIPTION || 'Maestro profesional de acabados interiores'
}

