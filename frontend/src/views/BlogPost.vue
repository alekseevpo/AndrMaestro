<template>
  <div class="blog-post fade-in">
    <div v-if="loading" class="loading-post">
      <div class="loader-spinner"></div>
      <p>Cargando artículo...</p>
    </div>
    
    <article v-else-if="post" class="post-content">
      <div class="post-header">
        <div class="container">
          <nav class="post-breadcrumb">
            <router-link to="/blog">Blog</router-link>
            <span class="separator">/</span>
            <span>{{ post.category }}</span>
          </nav>
          
          <div class="post-meta">
            <span class="post-category">{{ post.category }}</span>
            <time class="post-date" :datetime="post.date">{{ formatDate(post.date) }}</time>
            <span class="read-time">{{ post.readTime }} min lectura</span>
          </div>
          
          <h1 class="post-title">{{ post.title }}</h1>
          
          <div v-if="post.image" class="post-featured-image">
            <img 
              :src="post.image" 
              :alt="post.title"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <div class="post-body">
        <div class="container">
          <div class="post-content-wrapper">
            <div class="post-text" v-html="post.content"></div>
            
            <div v-if="post.tags && post.tags.length > 0" class="post-tags">
              <h3>Etiquetas:</h3>
              <div class="tags-list">
                <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>

            <div class="post-share">
              <h3>Compartir:</h3>
              <div class="share-buttons">
                <a 
                  :href="whatsappShareUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="share-btn whatsapp"
                  aria-label="Compartir en WhatsApp"
                  title="Compartir en WhatsApp"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                <a 
                  :href="facebookShareUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="share-btn facebook"
                  aria-label="Compartir en Facebook"
                  title="Compartir en Facebook"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  :href="twitterShareUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="share-btn twitter"
                  aria-label="Compartir en Twitter"
                  title="Compartir en Twitter"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <div v-else class="post-not-found">
      <div class="container">
        <h1>Artículo no encontrado</h1>
        <p>El artículo que buscas no existe o ha sido eliminado.</p>
        <router-link to="/blog" class="btn btn-primary">Volver al Blog</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSEO } from '../composables/useSEO'
import { generateStructuredData, addStructuredData } from '../utils/seo'
import { getBlogPost } from '../utils/api'
import { blogPostsData } from '../data/blogPosts'

const route = useRoute()

// Mock data - fallback si API no funciona (importado desde blogPosts.js)
const postsData = blogPostsData

const slug = route.params.slug
const post = ref(null)
const loading = ref(true)

// Computed properties для share URLs
const currentUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.href
  }
  return ''
})

const whatsappShareUrl = computed(() => {
  if (!post.value || !currentUrl.value) return '#'
  const text = `${post.value.title} - ${currentUrl.value}`
  return `https://wa.me/?text=${encodeURIComponent(text)}`
})

const facebookShareUrl = computed(() => {
  if (!currentUrl.value) return '#'
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`
})

const twitterShareUrl = computed(() => {
  if (!post.value || !currentUrl.value) return '#'
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}&text=${encodeURIComponent(post.value.title)}`
})

// Загрузить пост из API
onMounted(async () => {
  loading.value = true
  
  // Intentar cargar desde API primero
  try {
    const result = await getBlogPost(slug)
    if (result.success && result.data) {
      post.value = result.data
      // Artículo cargado desde API
    } else {
      // Si no se encontró en API, buscar en postsData local como fallback
      const localPost = postsData.find(p => p.slug === slug)
      if (localPost) {
        post.value = localPost
        // Artículo cargado desde postsData local
      }
    }
  } catch (error) {
    // Error al cargar artículo desde API (fallback a postsData local)
    // Si hay error, buscar en postsData local como fallback
    const localPost = postsData.find(p => p.slug === slug)
    if (localPost) {
      post.value = localPost
      // Artículo cargado desde postsData local (fallback)
    }
  } finally {
    loading.value = false
  }
  
  // SEO para artículo
  if (post.value) {
    useSEO(
      `${post.value.title} - AndrMaestro Blog`,
      post.value.excerpt,
      post.value.image,
      'article'
    )
    
    // Agregar datos estructurados para el artículo
    const articleData = generateStructuredData('article', {
      title: post.value.title,
      excerpt: post.value.excerpt,
      image: post.value.image,
      datePublished: post.value.date
    })
    addStructuredData(articleData)
  } else {
    useSEO(
      'Artículo no encontrado - AndrMaestro Blog',
      'El artículo que buscas no existe.',
      null,
      'website'
    )
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<style scoped>
.post-content {
  min-height: 100vh;
}

.post-header {
  padding: 60px 0 40px;
  background: var(--hover-bg);
}

.dark .post-header {
  background: var(--hover-bg);
}

.post-breadcrumb {
  margin-bottom: 20px;
  font-size: 14px;
}

.post-breadcrumb a {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.post-breadcrumb a:hover {
  color: var(--accent-color);
}

.separator {
  margin: 0 10px;
  color: var(--text-secondary);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  font-size: 14px;
}

.post-category {
  background-color: var(--accent-color);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
}

.post-date,
.read-time {
  color: var(--text-secondary);
}

.post-title {
  font-size: 48px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 30px;
  letter-spacing: -0.5px;
}

.post-featured-image {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.post-featured-image img {
  width: 100%;
  height: auto;
  display: block;
}

.post-body {
  padding: 60px 0;
}

.post-content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.post-text {
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-color);
  margin-bottom: 50px;
}

.post-text :deep(h2) {
  font-size: 32px;
  font-weight: 600;
  margin: 40px 0 20px;
  color: var(--text-color);
  line-height: 1.3;
}

.post-text :deep(h3) {
  font-size: 24px;
  font-weight: 600;
  margin: 30px 0 15px;
  color: var(--text-color);
  line-height: 1.4;
}

.post-text :deep(strong) {
  font-weight: 600;
  color: var(--text-color);
}

.post-text :deep(ul strong),
.post-text :deep(ol strong) {
  color: var(--accent-color);
}

.post-text :deep(p) {
  margin-bottom: 20px;
}

.post-text :deep(ul),
.post-text :deep(ol) {
  margin: 20px 0;
  padding-left: 30px;
}

.post-text :deep(li) {
  margin-bottom: 10px;
}

.post-tags {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid var(--border-color);
}

.post-tags h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: var(--text-color);
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background-color: var(--hover-bg);
  color: var(--text-color);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.tag:hover {
  background-color: var(--accent-color);
  color: white;
}

.post-share {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid var(--border-color);
}

.post-share h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--text-color);
}

.share-buttons {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
  position: relative;
  overflow: hidden;
}

.share-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.share-btn:hover::before {
  width: 300px;
  height: 300px;
}

.share-btn svg {
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.share-btn:hover svg {
  transform: scale(1.1);
}

.share-btn.whatsapp {
  background-color: #25D366;
}

.share-btn.whatsapp:hover {
  background-color: #20BA5A;
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(37, 211, 102, 0.3);
}

.share-btn.facebook {
  background-color: #1877F2;
}

.share-btn.facebook:hover {
  background-color: #166FE5;
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(24, 119, 242, 0.3);
}

.share-btn.twitter {
  background-color: #1DA1F2;
}

.share-btn.twitter:hover {
  background-color: #1A91DA;
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(29, 161, 242, 0.3);
}

.loading-post {
  text-align: center;
  padding: 100px 20px;
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

.loading-post {
  text-align: center;
  padding: 100px 20px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading-post p {
  color: var(--text-secondary);
  margin-top: 20px;
  font-size: 16px;
}

.loader-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--border-color);
  border-top-color: var(--accent-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.post-not-found {
  text-align: center;
  padding: 100px 20px;
}

.post-not-found h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.post-not-found p {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 30px;
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
  .post-title {
    font-size: 32px;
  }
  
  .post-text {
    font-size: 16px;
  }
  
  .post-text :deep(h2) {
    font-size: 24px;
  }
  
  .post-meta {
    gap: 10px;
  }
  
  .share-buttons {
    justify-content: center;
  }
  
  .share-btn {
    width: 44px;
    height: 44px;
  }
  
  .share-btn svg {
    width: 22px;
    height: 22px;
  }
}
</style>

