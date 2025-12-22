<template>
  <div class="faq fade-in">
    <section class="faq-hero section">
      <div class="container">
        <h1 class="section-title">Preguntas Frecuentes</h1>
        <p class="section-subtitle">
          Resolvemos las dudas más comunes sobre nuestros servicios
        </p>
      </div>
    </section>

    <section class="faq-content section">
      <div class="container">
        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="faq-item"
            :class="{ active: activeIndex === index }"
          >
            <button 
              class="faq-question"
              @click="toggleFaq(index)"
            >
              <span class="question-text">{{ faq.question }}</span>
              <span class="question-icon">{{ activeIndex === index ? '−' : '+' }}</span>
            </button>
            <div class="faq-answer" v-show="activeIndex === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <div class="faq-cta">
          <h2>¿No encuentras la respuesta que buscas?</h2>
          <p>Estamos aquí para ayudarte. Contáctanos y responderemos todas tus preguntas.</p>
          <div class="faq-buttons">
            <router-link to="/contacto" class="btn btn-primary">
              Contactar Ahora
            </router-link>
            <a 
              href="https://wa.me/34633343468?text=Hola,%20tengo%20una%20pregunta" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn btn-whatsapp"
            >
              Escribir por WhatsApp
            </a>
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
  'Preguntas Frecuentes - AndrMaestro',
  'Resolvemos las dudas más comunes sobre nuestros servicios de acabados interiores, presupuestos, garantías y más.',
  null,
  'website'
)

const activeIndex = ref(null)

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = ref([
  {
    question: '¿Cuánto tiempo tarda un proyecto de reforma?',
    answer: 'El tiempo de ejecución depende del tipo y tamaño del proyecto. Una reforma completa puede tardar entre 4-8 semanas, mientras que trabajos más pequeños como pintura o instalación de muebles pueden completarse en 1-2 semanas. Siempre proporcionamos un cronograma detallado antes de comenzar.'
  },
  {
    question: '¿Ofrecen presupuesto gratuito?',
    answer: 'Sí, ofrecemos presupuestos completamente gratuitos y sin compromiso. Realizamos una visita al lugar para evaluar el proyecto, discutir sus necesidades y proporcionar un presupuesto detallado con todos los costos desglosados.'
  },
  {
    question: '¿Qué garantía ofrecen en su trabajo?',
    answer: 'Ofrecemos garantía de 2 años en todos nuestros trabajos. Esto cubre cualquier defecto de materiales o mano de obra. Además, trabajamos solo con materiales de primera calidad y proveedores de confianza para asegurar la durabilidad de nuestros proyectos.'
  },
  {
    question: '¿Trabajan con seguros?',
    answer: 'Sí, trabajamos con seguros de hogar. Puede contactarnos para coordinar la evaluación de daños y la reparación. Ayudamos con toda la documentación necesaria para el proceso de reclamación.'
  },
  {
    question: '¿Necesito estar presente durante las obras?',
    answer: 'No es necesario que esté presente todo el tiempo, pero es recomendable estar disponible para consultas y decisiones importantes. Coordinamos las visitas según su disponibilidad y mantenemos comunicación constante sobre el progreso del proyecto.'
  },
  {
    question: '¿Qué áreas de servicio cubren?',
    answer: 'Trabajamos principalmente en [área geográfica]. Para proyectos fuera de esta zona, evaluamos caso por caso. Contáctenos para confirmar si podemos atender su ubicación.'
  },
  {
    question: '¿Pueden ayudar con el diseño?',
    answer: 'Sí, ofrecemos asesoramiento en diseño y podemos trabajar con sus ideas o sugerir soluciones. Si necesita un diseño más completo, podemos recomendar diseñadores de interiores con los que colaboramos regularmente.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos efectivo, transferencia bancaria y tarjetas. El pago generalmente se divide en varias fases: un anticipo al inicio, pagos según el avance del trabajo, y el pago final al completar y revisar el proyecto.'
  },
  {
    question: '¿Trabajan en fines de semana?',
    answer: 'Trabajamos de lunes a viernes de 9:00 a 18:00, y los sábados de 10:00 a 14:00. Los domingos no trabajamos para respetar el descanso. En casos urgentes, podemos evaluar trabajos en horarios especiales.'
  },
  {
    question: '¿Qué debo hacer para preparar mi casa antes de las obras?',
    answer: 'Le proporcionaremos una lista detallada antes de comenzar. Generalmente incluye: proteger muebles y objetos de valor, despejar las áreas de trabajo, y asegurar el acceso al espacio. Nosotros nos encargamos de la protección de suelos y áreas adyacentes.'
  }
])
</script>

<style scoped>
.faq-hero {
  text-align: center;
  padding-top: 120px;
}

.faq-list {
  max-width: 900px;
  margin: 0 auto 60px;
}

.faq-item {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.6s ease-out backwards;
}

.faq-item:nth-child(1) { animation-delay: 0.1s; }
.faq-item:nth-child(2) { animation-delay: 0.2s; }
.faq-item:nth-child(3) { animation-delay: 0.3s; }
.faq-item:nth-child(4) { animation-delay: 0.4s; }
.faq-item:nth-child(5) { animation-delay: 0.5s; }
.faq-item:nth-child(6) { animation-delay: 0.6s; }

.dark .faq-item {
  background-color: var(--bg-color);
  border-color: var(--border-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dark .faq-item:hover {
  background-color: var(--hover-bg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.faq-item:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.faq-item.active {
  border-color: var(--accent-color);
}

.faq-question {
  width: 100%;
  padding: 25px 30px;
  text-align: left;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 19px;
  font-weight: 500;
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark .faq-question {
  color: #ffffff;
  font-weight: 600;
}

.faq-question:hover {
  background-color: var(--hover-bg);
}

.question-text {
  flex: 1;
  padding-right: 20px;
}

.question-icon {
  font-size: 28px;
  font-weight: 300;
  color: var(--accent-color);
  flex-shrink: 0;
  width: 30px;
  text-align: center;
  transition: transform 0.3s ease, color 0.3s ease;
  line-height: 1;
}

.dark .question-icon {
  color: #0a84ff;
  font-weight: 400;
}

.faq-item.active .question-icon {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 30px 25px;
  color: var(--text-secondary);
  font-size: 17px;
  line-height: 1.7;
  animation: slideDown 0.3s ease;
}

.dark .faq-answer {
  color: #d1d1d6;
}

.dark .faq-answer p {
  color: #d1d1d6;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-cta {
  text-align: center;
  padding: 60px 40px;
  background: var(--hover-bg);
  border-radius: 18px;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid var(--border-color);
}

.dark .faq-cta {
  background-color: #2a2a2c;
  border-color: #3a3a3c;
}

.faq-cta h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
  color: var(--text-color);
}

.dark .faq-cta h2 {
  color: #ffffff;
  font-weight: 700;
}

.faq-cta p {
  font-size: 19px;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.dark .faq-cta p {
  color: #d1d1d6;
}

.faq-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Button styles are now in styles/buttons.css */

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
  .faq-hero {
    padding-top: 80px;
  }

  .faq-list {
    margin-bottom: 40px;
  }

  .faq-item {
    margin-bottom: 16px;
    border-radius: 16px;
  }

  .faq-question {
    padding: 18px 20px;
    font-size: 16px;
    min-height: 56px;
  }
  
  .faq-answer {
    padding: 0 20px 18px;
    font-size: 15px;
    line-height: 1.6;
  }

  .faq-icon {
    width: 24px;
    height: 24px;
    font-size: 14px;
  }
  
  .faq-cta {
    padding: 32px 20px;
    border-radius: 20px;
  }
  
  .faq-cta h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .faq-cta p {
    font-size: 17px;
    margin-bottom: 24px;
  }
  
  .faq-buttons {
    flex-direction: column;
    gap: 12px;
  }
  
  .faq-buttons .btn {
    width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .faq-question {
    padding: 16px 18px;
    font-size: 15px;
  }

  .faq-answer {
    padding: 0 18px 16px;
    font-size: 14px;
  }

  .faq-cta h2 {
    font-size: 22px;
  }
}
</style>

