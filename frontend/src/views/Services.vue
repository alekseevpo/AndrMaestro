<template>
  <div class="services fade-in">
    <section class="services-hero section">
      <div class="container">
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
            <div class="service-icon">
              <img 
                v-if="service.image"
                :src="service.image" 
                :alt="service.title"
                class="service-image"
              />
              <div v-else class="service-icon-fallback" v-html="service.iconSvg"></div>
            </div>
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

    <BrandsAndTools />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSEO } from '../composables/useSEO'
import BrandsAndTools from '../components/BrandsAndTools.vue'

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
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=400&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=400&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=400&fit=crop&auto=format',
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
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop&auto=format',
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
  padding: 120px 0 80px;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop&auto=format');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.services-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop&auto=format');
  background-size: cover;
  background-position: center;
  filter: blur(15px);
  transform: scale(1.1);
  z-index: 0;
  animation: slowZoom 20s ease-in-out infinite;
}

.services-hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.75);
  z-index: 1;
}

.dark .services-hero::after {
  background: rgba(0, 0, 0, 0.65);
}

.services-hero .container {
  position: relative;
  z-index: 2;
}


.services-list {
  background-color: var(--hover-bg);
}

.dark .services-list {
  background-color: var(--bg-color);
}

.services-list .container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.service-item {
  background-color: var(--bg-color);
  border-radius: 20px;
  padding: 0;
  margin-bottom: 0;
  border: 1px solid var(--border-color);
  animation: fadeInUp 0.6s ease-out backwards;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.dark .service-item {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.service-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.dark .service-item:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
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
  max-width: 100%;
  margin: 0 auto;
  padding: 30px;
}

.service-item {
  padding: 0;
}

.service-item h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--text-color) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.dark .service-item h2 {
  background: linear-gradient(135deg, #ffffff 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.service-item > .service-content > p {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.service-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 30px;
  padding: 0;
  list-style: none;
  margin-left: 0;
  margin-right: 0;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin: 0;
  background: var(--hover-bg);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  list-style: none;
}

.service-features li:hover {
  background: var(--accent-color);
  color: white;
  transform: translateX(4px);
  border-color: var(--accent-color);
}

.service-features li::before {
  content: '✓';
  color: var(--accent-color);
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease;
}

.service-features li:hover::before {
  color: white;
}

.service-icon {
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: var(--accent-color);
  transition: transform 0.3s ease;
  border-radius: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f5f7 0%, #e6e6eb 100%);
}

.dark .service-icon {
  background: linear-gradient(135deg, #2a2a2c 0%, #1d1d1f 100%);
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  display: block;
}

.service-item:hover .service-image {
  transform: scale(1.05);
}

.service-icon-fallback {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon-fallback svg {
  width: 64px;
  height: 64px;
  stroke: currentColor;
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


.process-steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 60px;
  max-width: 800px;
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
  background-color: #ffffff;
  color: #1d1d1f;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.dark .step-light {
  background-color: #2a2a2c;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.step-dark {
  background-color: var(--hover-bg);
  color: var(--text-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-color);
}

.dark .step-dark {
  background-color: #3a3a3c;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.step:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.step-dark:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.dark .step-dark:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
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
  color: #1d1d1f;
}

.dark .step h3 {
  color: #ffffff;
  font-weight: 700;
}

.step-light h3 {
  color: #1d1d1f;
}

.dark .step-light h3 {
  color: #ffffff;
}

.step-dark h3 {
  color: var(--text-color);
}

.dark .step-dark h3 {
  color: #ffffff;
}

.step p {
  line-height: 1.7;
  font-size: 16px;
  color: #4a4a4c;
}

.step-light p {
  color: #4a4a4c;
}

.dark .step-light p {
  color: rgba(255, 255, 255, 0.85);
}

.step-dark p {
  color: var(--text-secondary);
}

.dark .step-dark p {
  color: rgba(255, 255, 255, 0.9);
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

@keyframes slowZoom {
  0%, 100% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
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


  .service-item {
    margin-bottom: 24px;
  }

  .service-content {
    padding: 32px 24px;
  }

  .service-icon {
    width: 100%;
    height: 200px;
    margin: 0 0 30px 0;
    border-radius: 20px;
  }

  .service-image {
    width: 100%;
    height: 100%;
  }

  .service-icon-fallback {
    width: 48px;
    height: 48px;
  }

  .service-icon-fallback svg {
    width: 48px;
    height: 48px;
  }

  .service-item h2 {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .service-item > .service-content > p {
    font-size: 16px;
    margin-bottom: 24px;
  }

  .service-features {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .service-features li {
    padding: 10px 14px;
    font-size: 15px;
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

  .service-item {
    margin-bottom: 20px;
  }

  .services-list .container {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .service-content {
    padding: 24px 20px;
  }

  .service-icon {
    width: 100%;
    height: 180px;
    margin: 0 0 24px 0;
    border-radius: 20px;
  }

  .service-item h2 {
    font-size: 24px;
  }

  .service-item > .service-content > p {
    font-size: 15px;
  }

  .service-features li {
    padding: 8px 12px;
    font-size: 14px;
  }
}
</style>

