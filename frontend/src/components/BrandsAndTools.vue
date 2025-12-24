<template>
  <section class="brands-tools-section">
    <div class="container">
      <h3 class="section-title">Utilizamos los mejores materiales y tecnologías modernas en nuestro trabajo para lograr los mejores resultados</h3>
      
      <!-- Materials Brands -->
      <div class="brands-row">
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

      <!-- Tools Brands -->
      <div class="tools-row">
        <div class="tools-wrapper">
          <div class="tools-track" :style="{ animationDuration: `${animationDuration}s` }">
            <div 
              class="tool-item" 
              v-for="(tool, index) in tools" 
              :key="`tool-${index}`"
            >
              <div class="tool-logo">
                <img 
                  v-if="tool.logo"
                  :src="tool.logo" 
                  :alt="tool.name"
                  :title="tool.name"
                  loading="lazy"
                  @error="handleImageError"
                  class="tool-image"
                />
                <div v-else class="tool-logo-text">{{ tool.name }}</div>
              </div>
            </div>
            <!-- Duplicate for seamless loop -->
            <div 
              class="tool-item" 
              v-for="(tool, index) in tools" 
              :key="`tool-duplicate-${index}`"
            >
              <div class="tool-logo">
                <img 
                  v-if="tool.logo"
                  :src="tool.logo" 
                  :alt="tool.name"
                  :title="tool.name"
                  loading="lazy"
                  @error="handleImageError"
                  class="tool-image"
                />
                <div v-else class="tool-logo-text">{{ tool.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const animationDuration = ref(37.5) // seconds for full loop (25% slower)

// Испанские строительные бренды
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

// Испанские марки инструментов
const tools = ref([
  { name: 'Bosch', logo: null },
  { name: 'Makita', logo: null },
  { name: 'DeWalt', logo: null },
  { name: 'Festool', logo: null },
  { name: 'Hilti', logo: null },
  { name: 'Milwaukee', logo: null },
  { name: 'Metabo', logo: null },
  { name: 'Einhell', logo: null },
  { name: 'Black+Decker', logo: null },
  { name: 'Stanley', logo: null },
  { name: 'Ryobi', logo: null },
  { name: 'Hitachi', logo: null }
])

const handleImageError = (event) => {
  event.target.style.display = 'none'
  const fallback = event.target.nextElementSibling
  if (fallback) {
    fallback.style.display = 'block'
  }
}
</script>

<style scoped>
.brands-tools-section {
  padding: 80px 0;
  background: var(--bg-color);
  border: none !important;
  overflow: hidden;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop&auto=format');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.brands-tools-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop&auto=format');
  background-size: cover;
  background-position: center;
  filter: blur(15px);
  transform: scale(1.1);
  z-index: 0;
  animation: slowZoom 20s ease-in-out infinite;
}

.brands-tools-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.75);
  z-index: 1;
}

.dark .brands-tools-section {
  background: #1a1a1a;
}

.dark .brands-tools-section::after {
  background: rgba(0, 0, 0, 0.65);
}

.brands-tools-section .container {
  position: relative;
  z-index: 2;
}

@keyframes slowZoom {
  0%, 100% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
}

.section-title {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 50px;
  color: var(--text-color);
  letter-spacing: -0.5px;
  line-height: 1.4;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.dark .section-title {
  color: #ffffff;
  font-weight: 700;
}

.brands-row,
.tools-row {
  margin-bottom: 40px;
}

.brands-row:last-child,
.tools-row:last-child {
  margin-bottom: 0;
}

.brands-wrapper,
.tools-wrapper {
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
  will-change: transform;
}

.tools-wrapper {
  mask-image: linear-gradient(
    to left,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to left,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.brands-track {
  display: flex;
  align-items: center;
  gap: 40px;
  animation: scroll-horizontal linear infinite;
  width: fit-content;
  will-change: transform;
}

.tools-track {
  display: flex;
  align-items: center;
  gap: 40px;
  animation: scroll-horizontal-reverse linear infinite;
  width: fit-content;
  will-change: transform;
}

@keyframes scroll-horizontal {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-horizontal-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.brand-item,
.tool-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.brand-item:hover,
.tool-item:hover {
  transform: scale(1.1);
}

.brand-logo,
.tool-logo {
  height: 60px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.brand-logo img,
.tool-logo img {
  display: block !important;
  max-height: 60px;
  max-width: 150px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.5);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.brand-item:hover .brand-logo img,
.tool-item:hover .tool-logo img {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.05);
}

.brand-logo-text,
.tool-logo-text {
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

.brand-item:hover .brand-logo-text,
.tool-item:hover .tool-logo-text {
  opacity: 1;
  color: var(--accent-color);
  transform: scale(1.05);
}

.dark .brand-logo-text,
.dark .tool-logo-text {
  color: rgba(255, 255, 255, 0.6);
}

.dark .brand-item:hover .brand-logo-text,
.dark .tool-item:hover .tool-logo-text {
  color: #4a9eff;
}

.dark .brand-logo img,
.dark .tool-logo img {
  filter: grayscale(100%) opacity(0.4) brightness(1.3);
}

.dark .brand-item:hover .brand-logo img,
.dark .tool-item:hover .tool-logo img {
  filter: grayscale(0%) opacity(1) brightness(1.4);
}

@media (max-width: 768px) {
  .brands-tools-section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 22px;
    margin-bottom: 40px;
    padding: 0 20px;
  }

  .brands-row,
  .tools-row {
    margin-bottom: 30px;
  }

  .brands-wrapper,
  .tools-wrapper {
    margin: 0 -20px;
    padding: 0 20px;
  }

  .brands-track,
  .tools-track {
    gap: 30px;
    animation-duration: 50s !important;
  }

  .brand-item,
  .tool-item {
    padding: 12px 16px;
    min-width: auto;
  }

  .brand-logo,
  .tool-logo {
    height: 45px;
    padding: 0 15px;
  }

  .brand-logo img,
  .tool-logo img {
    max-height: 45px;
    max-width: 120px;
  }

  .brand-logo-text,
  .tool-logo-text {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .brands-tools-section {
    padding: 30px 0;
  }

  .section-title {
    font-size: 18px;
    margin-bottom: 30px;
    padding: 0 16px;
    line-height: 1.3;
  }

  .brands-row,
  .tools-row {
    margin-bottom: 24px;
  }

  .brands-wrapper,
  .tools-wrapper {
    margin: 0 -16px;
    padding: 0 16px;
  }

  .brands-track,
  .tools-track {
    gap: 24px;
    animation-duration: 60s !important;
  }

  .brand-item,
  .tool-item {
    padding: 10px 12px;
    min-width: auto;
  }

  .brand-logo,
  .tool-logo {
    height: 40px;
    padding: 0 12px;
  }

  .brand-logo img,
  .tool-logo img {
    max-height: 40px;
    max-width: 100px;
  }

  .brand-logo-text,
  .tool-logo-text {
    font-size: 12px;
    letter-spacing: 1px;
  }
}

/* Оптимизация для мобильных устройств */
@media (max-width: 768px) and (prefers-reduced-motion: no-preference) {
  .brands-track,
  .tools-track {
    animation-play-state: running;
  }
}

@media (prefers-reduced-motion: reduce) {
  .brands-track,
  .tools-track {
    animation: none;
  }
}
</style>

