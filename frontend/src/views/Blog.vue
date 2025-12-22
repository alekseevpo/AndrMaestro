<template>
  <div class="blog fade-in">
    <section class="blog-hero section">
      <div class="container">
        <h1 class="section-title">Artículos</h1>
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
                decoding="async"
                width="350"
                height="250"
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
import { blogPostsData } from '../data/blogPosts'

// SEO
useSEO(
  'Artículos - AndrMaestro',
  'Consejos, tendencias y proyectos de acabados interiores. Aprende sobre diseño, materiales y técnicas profesionales.',
  null,
  'website'
)

const router = useRouter()

// Mock data - fallback si API no funciona (importado desde blogPosts.js)
const mockPosts = blogPostsData

const posts = ref(mockPosts)
const loading = ref(false)

// Загрузить посты из API
onMounted(async () => {
  loading.value = true
  try {
    const result = await getBlogPosts()
    if (result.success && result.data && result.data.length > 0) {
      posts.value = result.data
      console.log('Artículos cargados desde API:', result.data.length)
    } else {
      // Используем mockPosts если API не вернул данные (тихо, без логирования)
      posts.value = mockPosts
    }
  } catch (error) {
    // En caso de error, usar mockPosts (тихо, без логирования CORS ошибок)
    posts.value = mockPosts
  } finally {
    loading.value = false
  }
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
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid var(--border-color);
  animation: fadeInUp 0.6s ease-out backwards;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.blog-card:nth-child(1) { animation-delay: 0.1s; }
.blog-card:nth-child(2) { animation-delay: 0.2s; }
.blog-card:nth-child(3) { animation-delay: 0.3s; }
.blog-card:nth-child(4) { animation-delay: 0.4s; }

.dark .blog-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.blog-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.dark .blog-card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.blog-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: var(--hover-bg);
}

.dark .blog-image {
  background: linear-gradient(135deg, #2a2a2c 0%, #1d1d1f 100%);
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

.dark .blog-title {
  color: #ffffff;
  font-weight: 700;
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
  .blog-hero {
    padding-top: 80px;
  }

  .blog-filters {
    gap: 8px;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }

  .filter-btn {
    padding: 10px 18px;
    font-size: 15px;
    min-height: 44px;
  }

  .blog-card {
    margin-bottom: 24px;
  }

  .blog-image {
    height: 200px;
  }

  .blog-content {
    padding: 20px;
  }

  .blog-content h3 {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .blog-meta {
    font-size: 13px;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .filter-btn {
    padding: 8px 14px;
    font-size: 14px;
  }

  .blog-image {
    height: 180px;
  }
}
</style>

