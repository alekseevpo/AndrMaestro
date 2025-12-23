<template>
  <div class="portfolio fade-in">
    <section class="portfolio-hero section">
      <div class="container">
        <h1 class="section-title">Nuestro Portafolio</h1>
        <p class="section-subtitle">
          Descubre algunos de nuestros proyectos más destacados
        </p>
      </div>
    </section>

    <section class="portfolio-grid section">
      <div class="container">
        <div class="filter-buttons">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          :class="['filter-btn', { active: activeCategory === category }]"
          :aria-pressed="activeCategory === category"
          :aria-label="`Filtrar por ${category}`"
        >
          {{ category }}
        </button>
        </div>

        <div class="projects-grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card"
            @click="openModal(project)"
            role="button"
            tabindex="0"
            :aria-label="`Ver detalles de ${project.title}`"
            @keydown.enter="openModal(project)"
            @keydown.space.prevent="openModal(project)"
          >
            <div class="project-image">
              <div v-if="project.imageAfter && !project.imageAfterError" class="project-image-after">
                <img 
                  :src="project.imageAfter" 
                  :alt="`${project.title} - Después`"
                  loading="lazy"
                  width="400" 
                  height="250" 
                  decoding="async"
                  @error="project.imageAfterError = true"
                  @load="project.imageAfterLoaded = true"
                />
              </div>
              <div v-else-if="project.image && !project.imageError" class="project-image-single">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  loading="lazy"
                  width="400" 
                  height="250" 
                  decoding="async"
                  @error="project.imageError = true"
                  @load="project.imageLoaded = true"
                />
              </div>
              <div v-else class="placeholder-image">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p class="project-category">{{ project.category }}</p>
              <p class="project-description">{{ project.shortDescription || project.description }}</p>
              <div v-if="project.benefits" class="project-benefits">
                <h4 class="benefits-title">¿Por qué es importante?</h4>
                <ul class="benefits-list">
                  <li v-for="(benefit, index) in project.benefits" :key="index">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{{ benefit }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="selectedProject" class="modal" @click="closeModal" role="dialog" aria-modal="true" :aria-labelledby="`modal-title-${selectedProject.id}`">
      <div class="modal-content" @click.stop ref="modalRef">
        <div class="modal-images">
          <div v-if="selectedProject.imageBefore && selectedProject.imageAfter" class="before-after-container">
            <div class="before-after-item">
              <div class="before-after-image">
                <img 
                  v-if="!selectedProject.imageBeforeError"
                  :src="selectedProject.imageBefore" 
                  :alt="`${selectedProject.title} - Antes`"
                  loading="eager"
                  width="400" 
                  height="400" 
                  decoding="async"
                  @error="selectedProject.imageBeforeError = true"
                />
                <div v-else class="placeholder-image">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <span class="image-label label-before">Antes</span>
              </div>
            </div>
            <div class="before-after-item">
              <div class="before-after-image">
                <img 
                  v-if="!selectedProject.imageAfterError"
                  :src="selectedProject.imageAfter" 
                  :alt="`${selectedProject.title} - Después`"
                  loading="eager"
                  width="400" 
                  height="400" 
                  decoding="async"
                  @error="selectedProject.imageAfterError = true"
                />
                <div v-else class="placeholder-image">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <span class="image-label label-after">Después</span>
              </div>
            </div>
          </div>
          <div v-else class="modal-image">
            <img 
              v-if="selectedProject.image && !selectedProject.imageError" 
              :src="selectedProject.image" 
              :alt="selectedProject.title"
              loading="eager"
              width="800" 
              height="400" 
              decoding="async"
              @error="selectedProject.imageError = true"
            />
            <div v-else class="placeholder-image large">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
          </div>
        </div>
        
        <button 
          class="modal-close" 
          @click.stop="closeModal"
          aria-label="Cerrar modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#1d1d1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        <div class="modal-info">
          <h2 :id="`modal-title-${selectedProject.id}`">{{ selectedProject.title }}</h2>
          <p class="modal-category">{{ selectedProject.category }}</p>
          <p class="modal-description">{{ selectedProject.description }}</p>
          <div class="modal-details">
            <div class="detail-item">
              <strong>Duración:</strong> {{ selectedProject.duration }}
            </div>
            <div class="detail-item">
              <strong>Tipo:</strong> {{ selectedProject.type }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSEO } from '../composables/useSEO'
import { useEscapeKey, useKeyboard } from '../composables/useKeyboard'
import { useFocusTrap } from '../composables/useFocusTrap'

// SEO
useSEO(
  'Portafolio - AndrMaestro',
  'Descubre nuestros proyectos más destacados de acabados interiores, carpintería, pintura y reformas integrales.',
  null,
  'service'
)

const categories = ref(['Todos', 'Carpintería', 'Pintura', 'Revestimientos', 'Reformas'])

const activeCategory = ref('Todos')

const projects = ref([
  {
    id: 1,
    title: 'Cocina Moderna Integral',
    category: 'Carpintería',
    icon: '🍳',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&q=80',
    imageBefore: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&q=80',
    shortDescription: 'Transformación completa de cocina con diseño personalizado, muebles a medida en madera de alta calidad, isla central funcional y electrodomésticos integrados.',
    description: 'Diseño e instalación completa de cocina moderna con muebles a medida, isla central y acabados de alta calidad. Se realizó la demolición completa del espacio anterior, instalación de nuevas instalaciones eléctricas y de fontanería, y montaje de muebles de cocina personalizados con acabados premium.',
    benefits: [
      'Aumenta significativamente el valor de la propiedad',
      'Optimiza el espacio disponible con diseño funcional',
      'Mejora la eficiencia energética con electrodomésticos modernos',
      'Crea un ambiente acogedor y moderno para la familia'
    ],
    duration: '3 semanas',
    type: 'Reforma Integral'
  },
  {
    id: 2,
    title: 'Salón con Acabados Decorativos',
    category: 'Pintura',
    icon: '🛋️',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    imageBefore: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    shortDescription: 'Renovación integral del salón aplicando técnicas avanzadas de pintura decorativa, instalación de papel pintado de diseño y acabados especiales que transforman el espacio.',
    description: 'Renovación completa del salón con técnicas de pintura decorativa, papel pintado y acabados especiales. Se realizó la preparación de todas las superficies, aplicación de imprimaciones especiales, pintura decorativa con efectos de textura y colocación de papel pintado de alta calidad en la pared principal.',
    benefits: [
      'Transforma completamente la estética del espacio',
      'Pintura de alta calidad con mayor durabilidad',
      'Aumenta el confort y bienestar en el hogar',
      'Inversión que mejora la calidad de vida diaria'
    ],
    duration: '2 semanas',
    type: 'Renovación'
  })),
  initializeProjectErrors({
    id: 3,
    title: 'Baño de Lujo',
    category: 'Revestimientos',
    icon: '🚿',
    image: 'https://images.unsplash.com/photo-1600585152220-908e7e564778?w=1200&q=80',
    imageBefore: 'https://images.unsplash.com/photo-1600585152220-908e7e564778?w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1600585152220-908e7e564778?w=1200&q=80',
    shortDescription: 'Reforma integral del baño con azulejos de diseño exclusivo, mampara de cristal templado, sanitarios de alta gama y sistema de iluminación LED integrado.',
    description: 'Reforma completa del baño con azulejos de diseño, mampara de cristal y acabados premium. Se realizó la demolición completa, renovación de todas las instalaciones, colocación de azulejos de gran formato, instalación de mampara de ducha de cristal templado y montaje de sanitarios y grifería de alta gama.',
    benefits: [
      'Previene problemas de humedad y moho',
      'Materiales premium garantizan durabilidad',
      'Mejora la funcionalidad y comodidad diaria',
      'Espacio más higiénico y fácil de mantener'
    ],
    duration: '4 semanas',
    type: 'Reforma Integral'
  })),
  initializeProjectErrors({
    id: 4,
    title: 'Dormitorio Principal',
    category: 'Carpintería',
    icon: '🛏️',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80',
    imageBefore: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80',
    shortDescription: 'Diseño y fabricación de armario empotrado a medida con sistema de organización interior inteligente, cajones con guías suaves y acabados en madera noble.',
    description: 'Armario empotrado a medida con sistema de organización interior y diseño personalizado. Se diseñó y fabricó un armario completo que aprovecha todo el espacio disponible, con sistema de cajones con guías de cierre suave, barras para colgar, estantes ajustables y acabados en madera de alta calidad con barniz protector.',
    benefits: [
      'Maximiza el espacio de almacenamiento disponible',
      'Organización eficiente ahorra tiempo diario',
      'Diseño personalizado se adapta a tus necesidades',
      'Inversión duradera que aumenta el valor del hogar'
    ],
    duration: '2 semanas',
    type: 'Carpintería'
  })),
  initializeProjectErrors({
    id: 5,
    title: 'Oficina en Casa',
    category: 'Reformas',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    imageBefore: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    shortDescription: 'Conversión de habitación en oficina moderna con escritorio integrado, estanterías personalizadas, sistema de iluminación LED y cableado organizado.',
    description: 'Transformación de espacio en oficina funcional con mobiliario integrado y sistema de iluminación. Se realizó la planificación del espacio, instalación de escritorio empotrado, estanterías a medida, sistema de iluminación LED con diferentes zonas, organización de cableado y pintura en colores que favorecen la concentración.',
    benefits: [
      'Aumenta la productividad con espacio dedicado',
      'Iluminación adecuada reduce fatiga visual',
      'Organización mejora la eficiencia laboral',
      'Espacio profesional sin salir de casa'
    ],
    duration: '3 semanas',
    type: 'Reforma Integral'
  })),
  initializeProjectErrors({
    id: 6,
    title: 'Revestimiento de Piedra Natural',
    category: 'Revestimientos',
    icon: '🧱',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    imageBefore: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    shortDescription: 'Instalación de revestimiento de piedra natural en pared principal con sistema de iluminación LED integrado que resalta la textura y crea un ambiente acogedor.',
    description: 'Instalación de revestimiento de piedra natural en pared principal del salón con iluminación integrada. Se preparó la superficie, se aplicó mortero de agarre especial, se colocaron las piezas de piedra natural seleccionadas y se instaló un sistema de iluminación LED empotrado que resalta la textura de la piedra.',
    benefits: [
      'Material natural de máxima durabilidad',
      'Aporta elegancia y carácter único al espacio',
      'Fácil mantenimiento y resistencia al desgaste',
      'Aumenta el valor estético de la propiedad'
    ],
    duration: '1 semana',
    type: 'Revestimientos'
  })),
  initializeProjectErrors({
    id: 7,
    title: 'Renovación de Fachada',
    category: 'Pintura',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
    imageBefore: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
    shortDescription: 'Renovación completa de fachada con limpieza profunda, reparación de grietas, aplicación de imprimación y pintura de alta resistencia a la intemperie.',
    description: 'Pintura completa de fachada exterior con preparación de superficies y acabados duraderos. Se realizó la limpieza exhaustiva de toda la superficie, reparación de grietas y desconchados, aplicación de imprimación especial para exteriores, y dos capas de pintura de alta calidad resistente a la intemperie con protección UV.',
    benefits: [
      'Protege la estructura de la vivienda',
      'Mejora significativamente la primera impresión',
      'Pintura resistente garantiza años de durabilidad',
      'Aumenta el valor de mercado de la propiedad'
    ],
    duration: '2 semanas',
    type: 'Pintura Exterior'
  })),
  initializeProjectErrors({
    id: 8,
    title: 'Estantería Biblioteca',
    category: 'Carpintería',
    icon: '📚',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80',
    imageBefore: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80',
    shortDescription: 'Diseño y fabricación de estantería biblioteca a medida que ocupa toda la pared con estantes ajustables, espacios para diferentes tamaños de libros y acabados en madera maciza.',
    description: 'Diseño e instalación de estantería biblioteca a medida que ocupa toda la pared del estudio. Se diseñó un sistema modular con estantes ajustables en altura, espacios específicos para libros de diferentes tamaños, secciones para objetos decorativos y acabados en madera maciza con tratamiento protector.',
    benefits: [
      'Aprovecha al máximo el espacio disponible',
      'Organización perfecta para tu colección',
      'Diseño personalizado refleja tu estilo',
      'Inversión duradera en calidad y funcionalidad'
    ],
    duration: '1 semana',
    type: 'Carpintería'
  }))
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Todos') {
    return projects.value
  }
  return projects.value.filter(p => p.category === activeCategory.value)
})

const selectedProject = ref(null)
const modalRef = ref(null)
let scrollY = 0

const openModal = (project) => {
  selectedProject.value = project
  // Сохраняем текущую позицию скролла
  scrollY = window.scrollY
  // Блокируем прокрутку страницы
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
  document.body.style.width = '100%'
}

const closeModal = () => {
  selectedProject.value = null
  // Восстанавливаем прокрутку страницы
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  // Восстанавливаем позицию скролла
  window.scrollTo(0, scrollY)
}

// Close modal on ESC key
useEscapeKey(() => {
  if (selectedProject.value) {
    closeModal()
  }
})

// Focus trap for modal
useFocusTrap(modalRef)
</script>

<style scoped>
.portfolio-hero {
  text-align: center;
  padding-top: 120px;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 25px;
  border-radius: 980px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background-color: var(--hover-bg);
}

.filter-btn.active {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: var(--bg-color);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--border-color);
  animation: fadeInUp 0.6s ease-out backwards;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }
.project-card:nth-child(5) { animation-delay: 0.5s; }
.project-card:nth-child(6) { animation-delay: 0.6s; }

.dark .project-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.dark .project-card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.project-image {
  width: 100%;
  height: 250px;
  background: var(--hover-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.dark .project-image {
  background: linear-gradient(135deg, #2a2a2c 0%, #1d1d1f 100%);
}

.project-image-after,
.project-image-single {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}


.project-card:hover .project-image img {
  transform: scale(1.1);
}

.placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  background: linear-gradient(135deg, var(--hover-bg) 0%, var(--bg-color) 100%);
}

.dark .placeholder-image {
  background: linear-gradient(135deg, #2a2a2c 0%, #1d1d1f 100%);
  color: var(--text-secondary);
}

.placeholder-image svg {
  width: 64px;
  height: 64px;
  opacity: 0.5;
}

.placeholder-image.large svg {
  width: 120px;
  height: 120px;
}

.project-info {
  padding: 25px;
}

.project-info h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.project-category {
  color: var(--accent-color);
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-description {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.5;
  margin-top: 8px;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-benefits {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.benefits-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dark .benefits-title {
  color: #ffffff;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.benefits-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
}

.benefits-list li svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--accent-color);
  stroke: currentColor;
}

.benefits-list li span {
  flex: 1;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  backdrop-filter: blur(10px);
}

.modal-content {
  background-color: var(--bg-color);
  border-radius: 18px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  border: 1px solid var(--border-color);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) transparent;
}

.modal-content::-webkit-scrollbar {
  width: 8px;
}

.modal-content::-webkit-scrollbar-track {
  background: transparent;
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: var(--border-color);
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background-color: var(--accent-color);
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2001;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ffffff !important;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.dark .modal-close {
  background-color: #ffffff !important;
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7) !important;
}

.modal-close:hover {
  background-color: #ff3b30 !important;
  border-color: #ff3b30;
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(255, 59, 48, 0.6) !important;
}

.modal-close:hover svg {
  stroke: #ffffff !important;
}

.modal-close:active {
  transform: scale(0.95);
}

.modal-close svg {
  width: 24px;
  height: 24px;
  display: block;
  flex-shrink: 0;
}

.modal-close svg path {
  stroke: #1d1d1f !important;
  stroke-width: 2 !important;
  pointer-events: none;
}

@media (max-width: 768px) {
  .portfolio-hero {
    padding-top: 80px;
  }

  .filter-buttons {
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 32px;
  }

  .filter-btn {
    padding: 10px 18px;
    font-size: 15px;
    min-height: 44px;
  }

  .project-card {
    margin-bottom: 20px;
  }

  .project-image {
    height: 200px;
  }

  .project-info {
    padding: 20px;
  }

  .project-info h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .modal-overlay {
    padding: 0;
  }

  .modal-content {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    padding: 16px 20px;
    flex-shrink: 0;
  }

  .modal-body {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
  }

  .modal-image {
    height: 250px;
    border-radius: 12px;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .filter-btn {
    padding: 8px 14px;
    font-size: 14px;
  }

  .project-image {
    height: 180px;
  }

  .modal-image,
  .before-after-image {
    height: 250px;
  }

  .before-after-container {
    grid-template-columns: 1fr;
  }
}

.modal-images {
  width: 100%;
  position: relative;
  z-index: 1;
}

.before-after-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  width: 100%;
}

.before-after-item {
  width: 100%;
  position: relative;
}

.before-after-image {
  width: 100%;
  height: 400px;
  background: var(--hover-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.before-after-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.before-after-image .image-label {
  position: absolute;
  bottom: 16px;
  left: 16px;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.modal-image {
  width: 100%;
  height: 400px;
  background: var(--hover-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.dark .modal-image {
  background: linear-gradient(135deg, #2a2a2c 0%, #1d1d1f 100%);
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 40px;
}

.modal-info h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
}

.modal-category {
  color: var(--accent-color);
  font-size: 17px;
  margin-bottom: 20px;
  font-weight: 500;
}

.modal-description {
  font-size: 19px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 30px;
}

.modal-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.detail-item {
  font-size: 17px;
}

.detail-item strong {
  color: var(--text-color);
  display: block;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    max-height: 95vh;
  }
  
  .modal-image {
    height: 250px;
  }
  
  .modal-info {
    padding: 25px;
  }
  
  .modal-info h2 {
    font-size: 28px;
  }
}

.fade-in {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>


