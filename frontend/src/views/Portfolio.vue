<template>
  <div class="portfolio">
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
          aria-label={`Filtrar por ${category}`}
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
              <div class="placeholder-image">{{ project.icon }}</div>
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="selectedProject" class="modal" @click="closeModal" role="dialog" aria-modal="true" :aria-labelledby="`modal-title-${selectedProject.id}`">
      <div class="modal-content" @click.stop ref="modalRef">
        <button 
          class="modal-close" 
          @click="closeModal"
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        <div class="modal-image">
          <div class="placeholder-image large">{{ selectedProject.icon }}</div>
        </div>
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
import { useEscapeKey } from '../composables/useKeyboard'
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
    description: 'Diseño e instalación completa de cocina moderna con muebles a medida, isla central y acabados de alta calidad.',
    duration: '3 semanas',
    type: 'Reforma Integral'
  },
  {
    id: 2,
    title: 'Salón con Acabados Decorativos',
    category: 'Pintura',
    icon: '🛋️',
    description: 'Renovación completa del salón con técnicas de pintura decorativa, papel pintado y acabados especiales.',
    duration: '2 semanas',
    type: 'Renovación'
  },
  {
    id: 3,
    title: 'Baño de Lujo',
    category: 'Revestimientos',
    icon: '🚿',
    description: 'Reforma completa del baño con azulejos de diseño, mampara de cristal y acabados premium.',
    duration: '4 semanas',
    type: 'Reforma Integral'
  },
  {
    id: 4,
    title: 'Dormitorio Principal',
    category: 'Carpintería',
    icon: '🛏️',
    description: 'Armario empotrado a medida con sistema de organización interior y diseño personalizado.',
    duration: '2 semanas',
    type: 'Carpintería'
  },
  {
    id: 5,
    title: 'Oficina en Casa',
    category: 'Reformas',
    icon: '💼',
    description: 'Transformación de espacio en oficina funcional con mobiliario integrado y sistema de iluminación.',
    duration: '3 semanas',
    type: 'Reforma Integral'
  },
  {
    id: 6,
    title: 'Revestimiento de Piedra Natural',
    category: 'Revestimientos',
    icon: '🧱',
    description: 'Instalación de revestimiento de piedra natural en pared principal del salón con iluminación integrada.',
    duration: '1 semana',
    type: 'Revestimientos'
  },
  {
    id: 7,
    title: 'Renovación de Fachada',
    category: 'Pintura',
    icon: '🏠',
    description: 'Pintura completa de fachada exterior con preparación de superficies y acabados duraderos.',
    duration: '2 semanas',
    type: 'Pintura Exterior'
  },
  {
    id: 8,
    title: 'Estantería Biblioteca',
    category: 'Carpintería',
    icon: '📚',
    description: 'Diseño e instalación de estantería biblioteca a medida que ocupa toda la pared del estudio.',
    duration: '1 semana',
    type: 'Carpintería'
  }
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Todos') {
    return projects.value
  }
  return projects.value.filter(p => p.category === activeCategory.value)
})

const selectedProject = ref(null)
const modalRef = ref(null)

const openModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
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
  background-color: white;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-image {
  font-size: 80px;
}

.placeholder-image.large {
  font-size: 120px;
}

.project-info {
  padding: 25px;
}

.project-info h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.project-info p {
  color: var(--text-secondary);
  font-size: 17px;
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
  background-color: white;
  border-radius: 18px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 40px;
  color: var(--text-color);
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.modal-close:hover {
  background-color: var(--hover-bg);
}

.modal-image {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>

