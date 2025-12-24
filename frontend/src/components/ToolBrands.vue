<template>
  <section class="tool-brands-section">
    <div class="container">
      <h3 class="tools-title">Utilizamos herramientas confiables</h3>
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
  </section>
</template>

<script setup>
import { ref } from 'vue'

const animationDuration = ref(30) // seconds for full loop

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
  // Hide image and show text fallback
  event.target.style.display = 'none'
  const fallback = event.target.nextElementSibling
  if (fallback) {
    fallback.style.display = 'block'
  }
}
</script>

<style scoped>
.tool-brands-section {
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

.dark .tool-brands-section {
  background: #1a1a1a;
}

.tools-title {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
  color: var(--text-color);
  letter-spacing: -0.5px;
}

.dark .tools-title {
  color: #ffffff;
  font-weight: 700;
}

.tools-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
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

.tools-track {
  display: flex;
  align-items: center;
  gap: 60px;
  animation: scroll-horizontal-reverse linear infinite;
  width: fit-content;
}

@keyframes scroll-horizontal-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.tool-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.tool-item:hover {
  transform: scale(1.1);
}

.tool-logo {
  height: 60px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

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

.tool-item:hover .tool-logo img {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.05);
}

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

.tool-item:hover .tool-logo-text {
  opacity: 1;
  color: var(--accent-color);
  transform: scale(1.05);
}

.dark .tool-logo-text {
  color: rgba(255, 255, 255, 0.6);
}

.dark .tool-item:hover .tool-logo-text {
  color: #4a9eff;
}

.dark .tool-logo img {
  filter: grayscale(100%) opacity(0.4) brightness(1.3);
}

.dark .tool-item:hover .tool-logo img {
  filter: grayscale(0%) opacity(1) brightness(1.4);
}

@media (max-width: 768px) {
  .tool-brands-section {
    padding: 40px 0;
    border: none !important;
  }

  .tools-title {
    font-size: 20px;
    margin-bottom: 30px;
  }

  .tools-track {
    gap: 40px;
  }

  .tool-item {
    padding: 15px 20px;
  }

  .tool-logo {
    height: 45px;
  }

  .tool-logo img {
    max-height: 45px;
    max-width: 120px;
  }
}

@media (max-width: 480px) {
  .tool-brands-section {
    border: none !important;
    border-top: none !important;
    border-bottom: none !important;
  }

  .tools-title {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .tools-track {
    gap: 30px;
  }

  .tool-logo {
    height: 40px;
  }

  .tool-logo img {
    max-height: 40px;
    max-width: 100px;
  }
}
</style>

