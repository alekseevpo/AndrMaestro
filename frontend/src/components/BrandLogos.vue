<template>
  <section class="brand-logos-section">
    <div class="container">
      <h3 class="brands-title">Trabajamos con las mejores marcas</h3>
      <div class="brands-wrapper">
        <div class="brands-track" :style="{ animationDuration: `${animationDuration}s` }">
          <div 
            class="brand-item" 
            v-for="(brand, index) in brands" 
            :key="`brand-${index}`"
          >
            <div class="brand-logo">
              <img 
                v-if="brand.logo"
                :src="brand.logo" 
                :alt="brand.name"
                :title="brand.name"
                loading="lazy"
                @error="handleImageError"
                class="brand-image"
              />
              <div v-else class="brand-logo-text">{{ brand.name }}</div>
            </div>
          </div>
          <!-- Duplicate for seamless loop -->
          <div 
            class="brand-item" 
            v-for="(brand, index) in brands" 
            :key="`brand-duplicate-${index}`"
          >
            <div class="brand-logo">
              <img 
                v-if="brand.logo"
                :src="brand.logo" 
                :alt="brand.name"
                :title="brand.name"
                loading="lazy"
                @error="handleImageError"
                class="brand-image"
              />
              <div v-else class="brand-logo-text">{{ brand.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const animationDuration = ref(30) // seconds for full loop

// Испанские строительные бренды с логотипами
// Используем простые текстовые логотипы в стильном оформлении
const brands = ref([
  { name: 'Porcelanosa', logo: null },
  { name: 'Roca', logo: null },
  { name: 'Keraben', logo: null },
  { name: 'Pamesa', logo: null },
  { name: 'Tau Cerámica', logo: null },
  { name: 'Azulev', logo: null },
  { name: 'Finsa', logo: null },
  { name: 'Weber', logo: null },
  { name: 'Sika', logo: null },
  { name: 'Knauf', logo: null },
  { name: 'Butech', logo: null },
  { name: 'Leroy Merlin', logo: null }
])

const handleImageError = (event) => {
  // Hide image and show text fallback
  event.target.style.display = 'none'
  const fallback = event.target.nextElementSibling
  if (fallback) {
    fallback.style.display = 'block'
  }
}
</script>

<style scoped>
.brand-logos-section {
  padding: 80px 0;
  background: var(--bg-color);
  border: none !important;
  border-top: none !important;
  border-bottom: none !important;
  overflow: hidden;
  position: relative;
  min-height: 200px;
  margin-top: 0;
}

.dark .brand-logos-section {
  background: #1a1a1a;
}

.brands-title {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
  color: var(--text-color);
  letter-spacing: -0.5px;
}

.dark .brands-title {
  color: #ffffff;
  font-weight: 700;
}

.brands-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.brands-track {
  display: flex;
  align-items: center;
  gap: 60px;
  animation: scroll-horizontal linear infinite;
  width: fit-content;
}

@keyframes scroll-horizontal {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.brand-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.brand-item:hover {
  transform: scale(1.1);
}

.brand-logo {
  height: 60px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.brand-logo img {
  display: block !important;
  max-height: 60px;
  max-width: 150px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.5);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.brand-item:hover .brand-logo img {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.05);
}

.brand-logo-text {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-color);
  white-space: nowrap;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  opacity: 0.6;
  transition: opacity 0.3s ease, color 0.3s ease, transform 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.brand-item:hover .brand-logo-text {
  opacity: 1;
  color: var(--accent-color);
  transform: scale(1.05);
}

.dark .brand-logo-text {
  color: rgba(255, 255, 255, 0.6);
}

.dark .brand-item:hover .brand-logo-text {
  color: #4a9eff;
}



.dark .brand-logo img {
  filter: grayscale(100%) opacity(0.4) brightness(1.3);
}

.dark .brand-item:hover .brand-logo img {
  filter: grayscale(0%) opacity(1) brightness(1.4);
}

@media (max-width: 768px) {
  .brand-logos-section {
    padding: 40px 0;
    border: none !important;
  }

  .brands-title {
    font-size: 20px;
    margin-bottom: 30px;
  }

  .brands-track {
    gap: 40px;
  }

  .brand-item {
    padding: 15px 20px;
  }

  .brand-logo {
    height: 45px;
  }

  .brand-logo img {
    max-height: 45px;
    max-width: 120px;
  }
}

@media (max-width: 480px) {
  .brand-logos-section {
    border: none !important;
    border-top: none !important;
    border-bottom: none !important;
  }

  .brands-title {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .brands-track {
    gap: 30px;
  }

  .brand-logo {
    height: 40px;
  }

  .brand-logo img {
    max-height: 40px;
    max-width: 100px;
  }
}
</style>

