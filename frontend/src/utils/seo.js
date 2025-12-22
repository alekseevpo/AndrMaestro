/**
 * SEO utilities for dynamic meta tags and structured data
 */

export const updateMetaTags = (title, description, image = null) => {
  // Update title
  document.title = title

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', description)

  // Update Open Graph tags
  updateOGTag('og:title', title)
  updateOGTag('og:description', description)
  if (image) {
    updateOGTag('og:image', image)
  }

  // Update Twitter Card tags
  updateTwitterTag('twitter:title', title)
  updateTwitterTag('twitter:description', description)
  if (image) {
    updateTwitterTag('twitter:image', image)
  }
}

const updateOGTag = (property, content) => {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

const updateTwitterTag = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export const generateStructuredData = (type, data) => {
  const baseUrl = import.meta.env.VITE_BASE_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://andrmaestro.vercel.app')
  
  const schemas = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'AndrMaestro',
      description: 'Maestro profesional de acabados interiores',
      url: baseUrl,
      telephone: '+34633343468',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ES'
      },
      sameAs: []
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AndrMaestro',
      url: baseUrl,
      description: 'Maestro profesional de acabados interiores. Servicios de alta calidad en decoración y renovación de espacios.'
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: data.serviceType || 'Acabados Interiores',
      provider: {
        '@type': 'LocalBusiness',
        name: 'AndrMaestro'
      },
      areaServed: {
        '@type': 'Country',
        name: 'España'
      }
    }
  }

  return schemas[type] || schemas.website
}

export const addStructuredData = (data) => {
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]')
  if (existing) {
    existing.remove()
  }

  // Add new structured data
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

