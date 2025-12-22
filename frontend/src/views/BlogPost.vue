<template>
  <div class="blog-post fade-in">
    <article v-if="post" class="post-content">
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
            <img :src="post.image" :alt="post.title" />
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
                  :href="`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="share-btn whatsapp"
                  aria-label="Compartir en WhatsApp"
                >
                  WhatsApp
                </a>
                <a 
                  :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="share-btn facebook"
                  aria-label="Compartir en Facebook"
                >
                  Facebook
                </a>
                <a 
                  :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="share-btn twitter"
                  aria-label="Compartir en Twitter"
                >
                  Twitter
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
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSEO } from '../composables/useSEO'
import { generateStructuredData, addStructuredData } from '../utils/seo'

const route = useRoute()

// Mock data - в будущем это будет из API
const postsData = [
  {
    id: 1,
    title: 'Tendencias en Acabados Interiores para 2024',
    slug: 'tendencias-acabados-interiores-2024',
    excerpt: 'Descubre las últimas tendencias en acabados interiores que están marcando la diferencia este año.',
    content: `
      <p>El mundo del diseño de interiores está en constante evolución, y 2024 trae consigo nuevas tendencias que transforman los espacios en lugares únicos y acogedores.</p>
      
      <h2>Colores que Dominan</h2>
      <p>Este año vemos un regreso a los tonos naturales y terrosos. Los colores cálidos como el beige, el terracota y los verdes oliva están ganando popularidad, creando ambientes más acogedores y conectados con la naturaleza.</p>
      
      <h2>Materiales Sostenibles</h2>
      <p>La sostenibilidad sigue siendo una prioridad. Los materiales reciclados, la madera certificada y las pinturas ecológicas son cada vez más demandados por clientes conscientes del medio ambiente.</p>
      
      <h2>Texturas y Acabados</h2>
      <p>Las texturas rugosas y los acabados mate están reemplazando a los brillantes. Esto crea una sensación más táctil y acogedora en los espacios.</p>
    `,
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
    content: `
      <p>Elegir el color adecuado para tu hogar puede ser una decisión abrumadora. Te guiamos paso a paso para encontrar la paleta perfecta.</p>
      
      <h2>Considera la Iluminación</h2>
      <p>La luz natural y artificial afecta cómo se ven los colores. Los espacios con mucha luz natural pueden manejar colores más oscuros, mientras que los espacios con poca luz se benefician de tonos más claros.</p>
      
      <h2>Psicología del Color</h2>
      <p>Cada color tiene un impacto psicológico diferente. Los azules promueven la calma, los verdes la tranquilidad, y los rojos la energía. Elige según el ambiente que quieras crear.</p>
      
      <h2>Prueba Antes de Comprometerte</h2>
      <p>Siempre prueba muestras en las paredes antes de pintar toda la habitación. Observa cómo se ven en diferentes momentos del día.</p>
    `,
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
    content: `
      <p>En este artículo te mostramos el proceso completo de renovación de una cocina de los años 80, transformándola en un espacio moderno y funcional.</p>
      
      <h2>Fase 1: Planificación</h2>
      <p>El primer paso fue analizar las necesidades del cliente y crear un diseño que maximizara el espacio disponible. Se decidió abrir la cocina al salón para crear un espacio más amplio y social.</p>
      
      <h2>Fase 2: Demolición</h2>
      <p>Se retiraron todos los elementos antiguos, incluyendo muebles, azulejos y electrodomésticos. Este proceso tomó aproximadamente una semana.</p>
      
      <h2>Fase 3: Instalación</h2>
      <p>Se instalaron nuevos muebles a medida, encimeras de cuarzo, y un sistema de iluminación LED integrado. El resultado fue una cocina completamente transformada.</p>
      
      <h2>Resultado Final</h2>
      <p>La cocina ahora es un espacio moderno, funcional y acogedor que se integra perfectamente con el resto de la casa.</p>
    `,
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
    content: `
      <p>La sostenibilidad en el diseño de interiores ya no es una opción, es una necesidad. Te presentamos los mejores materiales ecológicos disponibles.</p>
      
      <h2>Pinturas Ecológicas</h2>
      <p>Las pinturas sin compuestos orgánicos volátiles (COV) son mejores para la salud y el medio ambiente. Ofrecen la misma calidad que las tradicionales.</p>
      
      <h2>Madera Certificada</h2>
      <p>Busca madera con certificación FSC (Forest Stewardship Council) que garantiza que proviene de bosques gestionados de manera sostenible.</p>
      
      <h2>Materiales Reciclados</h2>
      <p>Los materiales reciclados como el vidrio, el metal y algunos plásticos pueden crear acabados únicos y sostenibles.</p>
      
      <h2>Beneficios</h2>
      <p>Además de ser mejores para el planeta, los materiales sostenibles suelen ser más duraderos y saludables para los habitantes del hogar.</p>
    `,
    category: 'Sostenibilidad',
    date: '2024-01-01',
    readTime: 6,
    image: null,
    tags: ['sostenibilidad', 'materiales', 'ecológico']
  }
]

const slug = route.params.slug
const post = ref(postsData.find(p => p.slug === slug))

// SEO для статьи
if (post.value) {
  useSEO(
    `${post.value.title} - AndrMaestro Blog`,
    post.value.excerpt,
    post.value.image,
    'article'
  )
  
  // Добавить структурированные данные для статьи
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
  background: linear-gradient(135deg, #f5f5f7 0%, #ffffff 100%);
}

.dark .post-header {
  background: linear-gradient(135deg, #1d1d1f 0%, #000000 100%);
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
  gap: 15px;
  flex-wrap: wrap;
}

.share-btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
}

.share-btn.whatsapp {
  background-color: #25D366;
}

.share-btn.whatsapp:hover {
  background-color: #20BA5A;
  transform: translateY(-2px);
}

.share-btn.facebook {
  background-color: #1877F2;
}

.share-btn.facebook:hover {
  background-color: #166FE5;
  transform: translateY(-2px);
}

.share-btn.twitter {
  background-color: #1DA1F2;
}

.share-btn.twitter:hover {
  background-color: #1A91DA;
  transform: translateY(-2px);
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
    flex-direction: column;
  }
  
  .share-btn {
    width: 100%;
    text-align: center;
  }
}
</style>

