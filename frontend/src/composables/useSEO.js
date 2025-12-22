import { onMounted, onUnmounted } from 'vue'
import { updateMetaTags, addStructuredData, generateStructuredData } from '../utils/seo'

export function useSEO(title, description, image = null, structuredDataType = 'website') {
  onMounted(() => {
    // Update meta tags
    updateMetaTags(title, description, image)

    // Add structured data
    const structuredData = generateStructuredData(structuredDataType, {})
    addStructuredData(structuredData)
  })

  onUnmounted(() => {
    // Reset to default meta tags
    updateMetaTags(
      'AndrMaestro - Acabados Interiores',
      'Maestro profesional de acabados interiores. Servicios de alta calidad en decoración y renovación de espacios.'
    )
  })
}

