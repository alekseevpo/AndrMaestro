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
            <div class="service-icon">{{ service.icon }}</div>
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
}

.services-list {
  background-color: var(--hover-bg);
}

.dark .services-list {
  background-color: var(--bg-color);
}

.service-item {
  background-color: var(--bg-color);
  border-radius: 18px;
  padding: 50px;
  margin-bottom: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border-color);
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.service-content {
  max-width: 900px;
  margin: 0 auto;
}

.service-icon {
  font-size: 64px;
  margin-bottom: 20px;
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
  .service-item {
    padding: 30px 20px;
  }
  
  .service-item h2 {
    font-size: 28px;
  }
  
  .service-features {
    grid-template-columns: 1fr;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .step {
    padding: 30px 20px;
    margin-top: 0 !important;
  }
  
  .step:nth-child(even) {
    margin-top: 0 !important;
  }
}
</style>

