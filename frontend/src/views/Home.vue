<template>
  <div class="home" ref="homeRef" :class="{ 'fade-in': isVisible }">
    <section class="hero">
      <div class="hero-background">
        <div class="hero-image"></div>
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title glitch-title" :data-text="titleText">
            <span 
              v-for="(char, index) in titleChars" 
              :key="index"
              class="hero-char"
              :style="{ animationDelay: `${index * 0.03}s` }"
            >
              {{ char === ' ' ? '\u00A0' : char }}
            </span>
            <span class="scanline"></span>
          </h1>
          <p class="hero-subtitle">
            Maestro profesional de acabados interiores con años de experiencia 
            creando ambientes únicos y acogedores.
          </p>
          <div class="hero-buttons">
            <router-link to="/contacto" class="btn btn-primary">Solicitar Presupuesto</router-link>
            <router-link to="/portafolio" class="btn btn-secondary">Ver Trabajos</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="features section">
      <div class="container">
        <h2 class="section-title glitch-subtle">¿Por qué elegirnos?</h2>
        <p class="section-subtitle">
          Comprometidos con la excelencia en cada proyecto
        </p>
        
        <div class="features-grid">
          <div class="feature-card card-hover shadow-md stagger-item">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3>Calidad Superior</h3>
            <p>Materiales de primera calidad y acabados impecables en cada proyecto.</p>
          </div>
          
          <div class="feature-card card-hover shadow-md stagger-item">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3>Puntualidad</h3>
            <p>Cumplimos con los plazos acordados sin comprometer la calidad del trabajo.</p>
          </div>
          
          <div class="feature-card card-hover shadow-md stagger-item">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3>Experiencia</h3>
            <p>Años de experiencia en el sector con cientos de proyectos completados.</p>
          </div>
          
          <div class="feature-card card-hover shadow-md stagger-item">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3>Diseño Personalizado</h3>
            <p>Cada proyecto se adapta a tus necesidades y estilo personal.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="cta-background">
        <div class="cta-image"></div>
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>¿Listo para transformar tu espacio?</h2>
          <p>Contacta con nosotros para una consulta gratuita</p>
          <router-link to="/contacto" class="btn btn-primary btn-large">
            Contactar Ahora
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSEO } from '../composables/useSEO'
import { useScrollReveal } from '../composables/useScrollReveal'

// SEO
useSEO(
  'AndrMaestro - Maestro de Acabados Interiores',
  'Transformamos tus espacios con servicios profesionales de acabados interiores, carpintería, pintura y reformas integrales.',
  null,
  'organization'
)

// Scroll reveal animation
const { elementRef: homeRef, isVisible } = useScrollReveal({ threshold: 0.05 })

// Разбиваем заголовок на символы для анимации
const titleText = 'Transformamos tus Espacios'
const titleChars = computed(() => titleText.split(''))
</script>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 0;
  background: var(--bg-color);
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1581578731548-adfd7bd6a2d0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w1NzU5NTJ8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrfGVufDB8fHx8MTcxMDc2NTY2NHww&ixlib=rb-4.0.3&q=80&w=1920');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(8px);
  transform: scale(1.1);
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.dark .hero-image {
  opacity: 0.3;
  filter: blur(10px);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 122, 255, 0.15) 0%, rgba(0, 122, 255, 0.05) 100%);
  z-index: 1;
}

.dark .hero-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 122, 255, 0.2) 100%);
}

.dark .hero {
  background: var(--bg-color);
}

.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 56px;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: -1px;
  line-height: 1.1;
  display: inline-block;
  overflow: visible;
  white-space: nowrap;
  position: relative;
  z-index: 0;
}

.hero-title.glitch-title {
  overflow: visible;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #e8e8e8 15%,
    #ffffff 30%,
    #f0f0f0 45%,
    #ffffff 60%,
    #e8e8e8 75%,
    #ffffff 90%,
    #f5f5f5 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: metallic-shine 4s ease-in-out infinite;
  text-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.15);
}

.dark .hero-title.glitch-title {
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #d0d0d0 15%,
    #ffffff 30%,
    #e0e0e0 45%,
    #ffffff 60%,
    #d0d0d0 75%,
    #ffffff 90%,
    #e8e8e8 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.4),
    0 2px 6px rgba(0, 0, 0, 0.3);
}

@keyframes metallic-shine {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Плавная анимация появления букв */
.hero-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: smoothReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  white-space: nowrap;
}

@keyframes smoothReveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-subtitle {
  font-size: 24px;
  margin-bottom: 40px;
  line-height: 1.5;
  color: var(--text-secondary);
  font-weight: 500;
}

.dark .hero-subtitle {
  color: #d1d1d6;
}


.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Button styles are now in styles/buttons.css */

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.feature-card {
  text-align: center;
  padding: 40px 30px;
  border-radius: 20px;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
}

.feature-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--accent-color);
  transition: transform 0.3s ease, color 0.3s ease;
}

.feature-icon svg {
  width: 48px;
  height: 48px;
  stroke: currentColor;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  color: var(--primary-color);
}

.feature-card h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.cta-section {
  position: relative;
  overflow: hidden;
  color: #ffffff;
  padding: 100px 0;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
}

.cta-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1581578731548-adfd7bd6a2d0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w1NzU5NTJ8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrfGVufDB8fHx8MTcxMDc2NTY2NHww&ixlib=rb-4.0.3&q=80&w=1920');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(3px);
  transform: scale(1.05);
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 122, 255, 0.75) 0%, rgba(0, 122, 255, 0.65) 100%);
  z-index: 1;
}

.dark .cta-overlay {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 122, 255, 0.6) 100%);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.cta-content h2 {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 0 4px 20px rgba(0, 0, 0, 0.3);
}

.dark .cta-content h2 {
  color: #ffffff;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7), 0 4px 20px rgba(0, 0, 0, 0.5);
}

.cta-content p {
  font-size: 21px;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  animation: gentleGlowWhite 10s ease-in-out infinite;
  font-weight: 500;
}

.dark .cta-content p {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
}

@keyframes gentleGlowWhite {
  0%, 100% {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  }
  50% {
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.35), 0 0 18px rgba(255, 255, 255, 0.25);
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
  .hero {
    min-height: 70vh;
    padding: 60px 0;
  }

  .hero-image {
    filter: blur(6px);
    opacity: 0.3;
  }

  .dark .hero-image {
    filter: blur(8px);
    opacity: 0.25;
  }

  .hero-title {
    font-size: 32px;
    margin-bottom: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .hero-subtitle {
    font-size: 18px;
    margin-bottom: 32px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  
  .hero-buttons .btn {
    width: 100%;
    max-width: 100%;
  }
  
  .cta-section {
    padding: 60px 0;
  }

  .cta-image {
    filter: blur(4px);
  }

  .cta-overlay {
    background: linear-gradient(135deg, rgba(0, 122, 255, 0.8) 0%, rgba(0, 122, 255, 0.7) 100%);
  }

  .dark .cta-overlay {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 122, 255, 0.65) 100%);
  }

  .cta-content h2 {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .cta-content p {
    font-size: 18px;
    margin-bottom: 32px;
  }

  .feature-card {
    padding: 32px 24px;
  }

  .feature-icon {
    width: 56px;
    height: 56px;
    margin-bottom: 16px;
  }

  .feature-icon svg {
    width: 40px;
    height: 40px;
  }

  .feature-card h3 {
    font-size: 20px;
    margin-bottom: 12px;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 60vh;
    padding: 40px 0;
  }

  .hero-title {
    font-size: 26px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .cta-section {
    padding: 50px 0;
  }
  
  .cta-content h2 {
    font-size: 24px;
  }
  
  .feature-card {
    padding: 24px 20px;
  }
}
</style>

