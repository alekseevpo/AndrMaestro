<template>
  <div class="services fade-in">
    <section class="services-hero section">
      <div class="container">
        <div class="hero-image-wrapper">
          <PlaceholderImage icon="🔨" size="large" />
        </div>
        <h1 class="section-title">Nuestros Servicios</h1>
        <p class="section-subtitle">
          Soluciones completas para la transformación de tus espacios interiores
        </p>
      </div>
    </section>

    <section class="services-list section">
      <div class="container">
        <div class="service-item" v-for="service in services" :key="service.id">
          <div class="service-content">
            <div class="service-icon" v-html="service.iconSvg"></div>
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section section">
      <div class="container">
        <h2 class="section-title">Nuestro Proceso</h2>
        <div class="process-steps">
          <div 
            class="step" 
            :class="{ 'step-dark': index % 2 === 0, 'step-light': index % 2 === 1 }"
            v-for="(step, index) in processSteps" 
            :key="index"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSEO } from '../composables/useSEO'
import PlaceholderImage from '../components/PlaceholderImage.vue'

// SEO
useSEO(
  'Servicios - AndrMaestro',
  'Servicios profesionales de acabados interiores: carpintería, pintura, revestimientos, reformas integrales y más.',
  null,
  'service'
)

const services = ref([
  {
    id: 1,
    icon: '🪚',
    iconSvg: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    title: 'Carpintería y Ebanistería',
    description: 'Fabricación e instalación de muebles a medida, estanterías, armarios y elementos de carpintería personalizados.',
    features: [
      'Muebles a medida',
      'Estanterías y almacenamiento',
      'Armarios empotrados',
      'Puertas y ventanas',
      'Revestimientos de madera'
    ]
  },
  {
    id: 2,
    icon: '🎨',
    iconSvg: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/><circle cx="12" cy="12" r="2"/></svg>',
    title: 'Pintura y Acabados',
    description: 'Aplicación de pintura de alta calidad, técnicas especiales y acabados decorativos para dar vida a tus paredes.',
    features: [
      'Pintura interior y exterior',
      'Técnicas decorativas',
      'Papel pintado',
      'Acabados especiales',
      'Preparación de superficies'
    ]
  },
  {
    id: 3,
    icon: '🧱',
    iconSvg: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    title: 'Revestimientos',
    description: 'Instalación de azulejos, cerámica, piedra natural y otros materiales para crear espacios únicos.',
    features: [
      'Azulejos y cerámica',
      'Piedra natural',
      'Mármol y granito',
      'Revestimientos decorativos',
      'Mosaicos personalizados'
    ]
  },
  {
    id: 4,
    icon: '🔧',
    iconSvg: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    title: 'Reformas Integrales',
    description: 'Gestión completa de proyectos de reforma desde el diseño hasta la ejecución final.',
    features: [
      'Diseño y planificación',
      'Coordinación de oficios',
      'Gestión de permisos',
      'Supervisión de obra',
      'Entrega llave en mano'
    ]
  },
  {
    id: 5,
    icon: '💡',
    iconSvg: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
    title: 'Iluminación',
    description: 'Instalación y diseño de sistemas de iluminación para crear ambientes acogedores y funcionales.',
    features: [
      'Iluminación LED',
      'Iluminación decorativa',
      'Sistemas domóticos',
      'Plafones y apliques',
      'Diseño de iluminación'
    ]
  },
  {
    id: 6,
    icon: '🏠',
    iconSvg: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    title: 'Rehabilitación',
    description: 'Restauración y rehabilitación de espacios manteniendo el carácter original con mejoras modernas.',
    features: [
      'Restauración de elementos originales',
      'Mejora de aislamiento',
      'Actualización de instalaciones',
      'Conservación de patrimonio',
      'Rehabilitación energética'
    ]
  }
])

const processSteps = ref([
  {
    title: 'Consulta Inicial',
    description: 'Reunión para conocer tus necesidades, ideas y presupuesto. Evaluación del espacio y asesoramiento profesional.'
  },
  {
    title: 'Diseño y Presupuesto',
    description: 'Elaboración de un diseño detallado y presupuesto transparente sin compromiso. Ajustes según tus preferencias.'
  },
  {
    title: 'Planificación',
    description: 'Organización del proyecto, selección de materiales y coordinación de fechas. Todo planificado al detalle.'
  },
  {
    title: 'Ejecución',
    description: 'Trabajo profesional con atención al detalle. Mantenemos comunicación constante durante todo el proceso.'
  },
  {
    title: 'Entrega',
    description: 'Revisión final, limpieza completa y entrega del proyecto. Garantía y seguimiento post-entrega.'
  }
])
</script>

<style scoped>
.services-hero {
  text-align: center;
  padding-top: 120px;
  position: relative;
}

.hero-image-wrapper {
  max-width: 600px;
  height: 300px;
  margin: 0 auto 40px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.dark .hero-image-wrapper {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.services-list {
  background-color: var(--hover-bg);
}

.dark .services-list {
  background-color: var(--bg-color);
}

.service-item {
  background-color: var(--bg-color);
  border-radius: 20px;
  padding: 50px;
  margin-bottom: 40px;
  border: 1px solid var(--border-color);
  animation: fadeInUp 0.6s ease-out backwards;
}

.service-item:nth-child(1) { animation-delay: 0.1s; }
.service-item:nth-child(2) { animation-delay: 0.2s; }
.service-item:nth-child(3) { animation-delay: 0.3s; }
.service-item:nth-child(4) { animation-delay: 0.4s; }

.service-item {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-item:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.dark .service-item {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dark .service-item:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.service-content {
  max-width: 900px;
  margin: 0 auto;
}

.service-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--accent-color);
  transition: transform 0.3s ease, color 0.3s ease;
}

.service-icon svg {
  width: 64px;
  height: 64px;
  stroke: currentColor;
}

.service-item:hover .service-icon {
  transform: scale(1.1);
  color: var(--primary-color);
}

.service-item h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
  color: var(--text-color);
}

.dark .service-item h2 {
  color: #ffffff;
  font-weight: 700;
}

.service-item > .service-content > p {
  font-size: 21px;
  color: var(--text-secondary);
  margin-bottom: 30px;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.service-features li {
  padding-left: 25px;
  position: relative;
  color: var(--text-color);
  line-height: 1.8;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: 600;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 60px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.step {
  text-align: center;
  padding: 40px 30px;
  border-radius: 18px;
  position: relative;
  animation: float 3s ease-in-out infinite;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.step-light {
  background-color: var(--bg-color);
  color: var(--text-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-color);
}

.step-dark {
  background-color: var(--primary-color);
  color: var(--text-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--border-color);
}

.step:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.step-dark:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.step-number {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 600;
  margin: 0 auto 25px;
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step:hover .step-number {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 122, 255, 0.4);
}

.step h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-color);
}

.dark .step h3 {
  color: #ffffff;
  font-weight: 700;
}

.step-light h3 {
  color: var(--text-color);
}

.step-dark h3 {
  color: var(--text-color);
}

.step p {
  line-height: 1.7;
  font-size: 16px;
  color: var(--text-secondary);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* Шахматный порядок - смещение для четных элементов */
.step:nth-child(even) {
  margin-top: 40px;
}

.step:nth-child(odd) {
  margin-top: 0;
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
  .services-hero {
    padding-top: 80px;
  }

  .hero-image-wrapper {
    height: 200px;
    margin-bottom: 32px;
  }

  .service-item {
    padding: 32px 24px;
    margin-bottom: 24px;
  }

  .service-icon {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
  }

  .service-icon svg {
    width: 48px;
    height: 48px;
  }

  .service-item h2 {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .service-item > .service-content > p {
    font-size: 18px;
    margin-bottom: 24px;
  }

  .service-features {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .process-steps {
    gap: 24px;
  }

  .step {
    padding: 24px 20px;
  }

  .step-number {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .step h3 {
    font-size: 20px;
    margin-bottom: 12px;
  }
}

@media (max-width: 480px) {
  .hero-image-wrapper {
    height: 150px;
  }

  .service-item {
    padding: 24px 20px;
  }

  .service-item h2 {
    font-size: 24px;
  }
}
</style>

