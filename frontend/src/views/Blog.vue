<template>
  <div class="blog fade-in">
    <section class="blog-hero section">
      <div class="container">
        <h1 class="section-title">Blog</h1>
        <p class="section-subtitle">
          Consejos, tendencias y proyectos de acabados interiores
        </p>
      </div>
    </section>

    <section class="blog-content section">
      <div class="container">
        <div class="blog-filters" v-if="categories.length > 0">
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

        <div class="blog-grid">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="blog-card"
            @click="goToPost(post.slug)"
            role="button"
            tabindex="0"
            :aria-label="`Leer artículo: ${post.title}`"
            @keydown.enter="goToPost(post.slug)"
            @keydown.space.prevent="goToPost(post.slug)"
          >
            <div class="blog-image">
              <img 
                v-if="post.image" 
                :src="post.image" 
                :alt="post.title"
                loading="lazy"
              />
              <div v-else class="blog-placeholder">
                <span class="placeholder-icon">📸</span>
              </div>
              <div class="blog-category">{{ post.category }}</div>
            </div>
            <div class="blog-info">
              <time class="blog-date" :datetime="post.date">{{ formatDate(post.date) }}</time>
              <h2 class="blog-title">{{ post.title }}</h2>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <div class="blog-meta">
                <span class="read-time">{{ post.readTime }} min lectura</span>
              </div>
            </div>
          </article>
        </div>

        <div v-if="loading" class="loading-posts">
          <div class="loader-spinner"></div>
          <p>Cargando artículos...</p>
        </div>
        
        <div v-else-if="filteredPosts.length === 0" class="no-posts">
          <p>No hay artículos en esta categoría.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSEO } from '../composables/useSEO'
import { getBlogPosts } from '../utils/api'

// SEO
useSEO(
  'Blog - AndrMaestro',
  'Consejos, tendencias y proyectos de acabados interiores. Aprende sobre diseño, materiales y técnicas profesionales.',
  null,
  'website'
)

const router = useRouter()

// Mock data - fallback если API не работает
const mockPosts = [
  {
    id: 1,
    title: 'Tendencias en Acabados Interiores para 2024',
    slug: 'tendencias-acabados-interiores-2024',
    excerpt: 'Descubre las últimas tendencias en acabados interiores que están marcando la diferencia este año.',
    content: 'Contenido completo del artículo...',
    category: 'Tendencias',
    date: '2024-01-15',
    readTime: 5,
    image: null,
    tags: ['tendencias', 'diseño', '2024']
  },
  {
    id: 2,
    title: 'Cómo Elegir el Color Perfecto para tu Hogar',
    slug: 'elegir-color-perfecto-hogar',
    excerpt: 'Guía completa para elegir los colores que mejor se adapten a tu espacio y personalidad.',
    content: 'Contenido completo del artículo...',
    category: 'Consejos',
    date: '2024-01-10',
    readTime: 7,
    image: null,
    tags: ['colores', 'diseño', 'consejos']
  },
  {
    id: 3,
    title: 'Proyecto: Renovación Completa de Cocina',
    slug: 'renovacion-completa-cocina',
    excerpt: 'Te mostramos paso a paso cómo transformamos una cocina antigua en un espacio moderno y funcional.',
    content: 'Contenido completo del artículo...',
    category: 'Proyectos',
    date: '2024-01-05',
    readTime: 8,
    image: null,
    tags: ['proyectos', 'cocina', 'renovación']
  },
  {
    id: 4,
    title: 'Materiales Sostenibles en Acabados Interiores',
    slug: 'materiales-sostenibles-acabados',
    excerpt: 'Exploramos las mejores opciones de materiales ecológicos para tus proyectos de acabados.',
    content: 'Contenido completo del artículo...',
    category: 'Sostenibilidad',
    date: '2024-01-01',
    readTime: 6,
    image: null,
    tags: ['sostenibilidad', 'materiales', 'ecológico']
  }
]

const posts = ref(mockPosts)
const loading = ref(false)

// Загрузить посты из API
onMounted(async () => {
  loading.value = true
  const result = await getBlogPosts()
  if (result.success && result.data.length > 0) {
    posts.value = result.data
  }
  loading.value = false
})

const categories = computed(() => {
  const cats = ['Todos', ...new Set(posts.value.map(p => p.category))]
  return cats
})

const activeCategory = ref('Todos')

const filteredPosts = computed(() => {
  if (activeCategory.value === 'Todos') {
    return posts.value.sort((a, b) => new Date(b.date) - new Date(a.date))
  }
  return posts.value
    .filter(p => p.category === activeCategory.value)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const goToPost = (slug) => {
  router.push(`/blog/${slug}`)
}
</script>

<style scoped>
.blog-hero {
  text-align: center;
  padding-top: 120px;
}

.blog-filters {
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
  cursor: pointer;
}

.filter-btn:hover {
  background-color: var(--hover-bg);
}

.filter-btn.active {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
}

.blog-card {
  background-color: var(--bg-color);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-color);
}

.dark .blog-card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.blog-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%);
}

.dark .blog-image {
  background: linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 100%);
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-icon {
  font-size: 64px;
  opacity: 0.3;
}

.blog-category {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--accent-color);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.blog-info {
  padding: 30px;
}

.blog-date {
  display: block;
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 10px;
}

.blog-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 1.3;
  color: var(--text-color);
}

.blog-excerpt {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  color: var(--text-secondary);
}

.read-time {
  display: flex;
  align-items: center;
  gap: 5px;
}

.no-posts {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-secondary);
}

.loading-posts {
  text-align: center;
  padding: 60px 20px;
}

.loader-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--border-color);
  border-top-color: var(--accent-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
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

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .blog-filters {
    gap: 10px;
  }
  
  .filter-btn {
    padding: 8px 20px;
    font-size: 15px;
  }
}
</style>

