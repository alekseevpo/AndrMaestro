<template>
  <div class="contact fade-in">
    <section class="contact-hero section">
      <div class="container">
        <h1 class="section-title">Contacto</h1>
        <p class="section-subtitle">
          Estamos aquí para ayudarte a hacer realidad tus proyectos
        </p>
      </div>
    </section>

    <section class="contact-content section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Información de Contacto</h2>
            <p class="info-description">
              Puedes contactarnos a través de cualquiera de estos medios. 
              Respondemos a todas las consultas en un plazo máximo de 24 horas.
            </p>
            
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>info@andrmaestro.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div>
                <h3>Teléfono</h3>
                <p>+34 633 34 34 68</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">💬</div>
              <div>
                <h3>WhatsApp</h3>
                <a 
                  href="https://wa.me/34633343468?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="whatsapp-link"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h3>Ubicación</h3>
                <p>España</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">🕒</div>
              <div>
                <h3>Horario</h3>
                <p>Lunes - Viernes: 9:00 - 18:00<br>Sábados: 10:00 - 14:00</p>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form class="contact-form" @submit.prevent="submitForm">
              <h2>Envíanos un Mensaje</h2>
              
              <div class="form-group">
                <label for="name">Nombre *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  placeholder="Tu nombre"
                  :class="{ 'error': errors.name }"
                  aria-describedby="name-error"
                />
                <span v-if="errors.name" id="name-error" class="error-message-field">{{ errors.name }}</span>
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  placeholder="tu@email.com"
                  :class="{ 'error': errors.email }"
                  aria-describedby="email-error"
                />
                <span v-if="errors.email" id="email-error" class="error-message-field">{{ errors.email }}</span>
              </div>
              
              <div class="form-group">
                <label for="phone">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  placeholder="+34 633 34 34 68"
                  :class="{ 'error': errors.phone }"
                  aria-describedby="phone-error"
                />
                <span v-if="errors.phone" id="phone-error" class="error-message-field">{{ errors.phone }}</span>
              </div>
              
              <div class="form-group">
                <label for="subject">Asunto *</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  :class="{ 'error': errors.subject }"
                  aria-describedby="subject-error"
                />
                <span v-if="errors.subject" id="subject-error" class="error-message-field">{{ errors.subject }}</span>
              </div>
              
              <div class="form-group">
                <label for="message">Mensaje *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  rows="6"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                  :class="{ 'error': errors.message }"
                  aria-describedby="message-error"
                ></textarea>
                <span v-if="errors.message" id="message-error" class="error-message-field">{{ errors.message }}</span>
              </div>
              
              <button type="submit" class="btn btn-primary btn-large" :disabled="submitting">
                {{ submitting ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
              
              <div v-if="submitSuccess" class="success-message">
                ✓ Mensaje enviado correctamente. Te contactaremos pronto.
              </div>
              
              <div v-if="submitError" class="error-message">
                ✗ Error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useSEO } from '../composables/useSEO'
import { validateContactForm } from '../utils/validation'
import { submitContactForm } from '../utils/api'

// SEO
useSEO(
  'Contacto - AndrMaestro',
  'Contacta con AndrMaestro para solicitar presupuesto gratuito. Estamos aquí para ayudarte a hacer realidad tus proyectos.',
  null,
  'organization'
)

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const errors = reactive({})
const submitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

const validateForm = () => {
  // Clear previous errors
  Object.keys(errors).forEach(key => delete errors[key])
  
  // Validate form
  const validationErrors = validateContactForm(form.value)
  Object.assign(errors, validationErrors)
  
  return Object.keys(validationErrors).length === 0
}

const submitForm = async () => {
  // Validate form before submission
  if (!validateForm()) {
    return
  }

  submitting.value = true
  submitSuccess.value = false
  submitError.value = false

  const result = await submitContactForm(form.value)

  if (result.success) {
    submitSuccess.value = true
    
    // Show success toast
    if (window.showToast) {
      window.showToast('Mensaje enviado correctamente. Te contactaremos pronto.', 'success')
    }
    
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    // Clear errors on success
    Object.keys(errors).forEach(key => delete errors[key])
  } else {
    submitError.value = true
    
    // Show error toast
    if (window.showToast) {
      window.showToast(result.error || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.', 'error')
    }
  }
  
  submitting.value = false
}
</script>

<style scoped>
.contact-hero {
  text-align: center;
  padding-top: 120px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: start;
}

.contact-info h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
  color: var(--text-color);
}

.dark .contact-info h2 {
  color: #ffffff;
  font-weight: 700;
}

.info-description {
  font-size: 19px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: flex-start;
}

.contact-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.contact-item h3 {
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 8px;
}

.contact-item p {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.contact-form-wrapper {
  background-color: var(--hover-bg);
  padding: 40px;
  border-radius: 18px;
  border: 1px solid var(--border-color);
}

.contact-form h2 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 30px;
  letter-spacing: -0.5px;
  color: var(--text-color);
}

.dark .contact-form h2 {
  color: #ffffff;
  font-weight: 700;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--text-color);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 17px;
  font-family: inherit;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #d32f2f;
}

.error-message-field {
  display: block;
  color: #d32f2f;
  font-size: 14px;
  margin-top: 5px;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  width: 100%;
  margin-top: 10px;
}

.success-message,
.error-message {
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  font-size: 17px;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.dark .success-message {
  background-color: rgba(40, 167, 69, 0.2);
  color: #6cff8f;
  border: 1px solid rgba(40, 167, 69, 0.4);
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.dark .error-message {
  background-color: rgba(220, 53, 69, 0.2);
  color: #ff6b7a;
  border: 1px solid rgba(220, 53, 69, 0.4);
}

.whatsapp-link {
  color: #25D366;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.whatsapp-link:hover {
  opacity: 0.8;
  text-decoration: underline;
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

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .contact-form-wrapper {
    padding: 24px 20px;
  }
}

@media (max-width: 768px) {
  .contact-grid {
    gap: 24px;
  }

  .contact-form-wrapper {
    padding: 20px 16px;
    border-radius: 20px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    font-size: 15px;
    margin-bottom: 8px;
  }

  input,
  textarea {
    font-size: 16px;
    padding: 14px 16px;
  }

  .btn-large {
    width: 100%;
    padding: 16px 24px;
    font-size: 17px;
  }
}

@media (max-width: 480px) {
  .contact-form-wrapper {
    padding: 16px 12px;
  }
}
</style>

