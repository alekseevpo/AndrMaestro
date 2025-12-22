<template>
  <div class="home" ref="homeRef" :class="{ 'fade-in': isVisible }">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Transformamos tus Espacios</h1>
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
        <h2 class="section-title">¿Por qué elegirnos?</h2>
        <p class="section-subtitle">
          Comprometidos con la excelencia en cada proyecto
        </p>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">✨</div>
            <h3>Calidad Superior</h3>
            <p>Materiales de primera calidad y acabados impecables en cada proyecto.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">⏱️</div>
            <h3>Puntualidad</h3>
            <p>Cumplimos con los plazos acordados sin comprometer la calidad del trabajo.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">💼</div>
            <h3>Experiencia</h3>
            <p>Años de experiencia en el sector con cientos de proyectos completados.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Diseño Personalizado</h3>
            <p>Cada proyecto se adapta a tus necesidades y estilo personal.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
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
import { ref } from 'vue'
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
</script>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 0;
  background: var(--hover-bg);
}

.dark .hero {
  background: var(--bg-color);
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: -1px;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.5;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 30px;
  border-radius: 980px;
  font-size: 17px;
  font-weight: 400;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background-color: var(--accent-color);
  color: white;
}

.btn-primary:hover {
  background-color: #0051d5;
  opacity: 1;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
}

.btn-secondary:hover {
  background-color: var(--hover-bg);
  opacity: 1;
}

.btn-large {
  padding: 15px 40px;
  font-size: 19px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.feature-card {
  text-align: center;
  padding: 30px;
  border-radius: 18px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
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
  background-color: var(--primary-color);
  color: var(--text-color);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.cta-content p {
  font-size: 21px;
  color: var(--text-secondary);
  margin-bottom: 40px;
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
  .hero-title {
    font-size: 40px;
  }
  
  .hero-subtitle {
    font-size: 20px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .cta-content h2 {
    font-size: 32px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

