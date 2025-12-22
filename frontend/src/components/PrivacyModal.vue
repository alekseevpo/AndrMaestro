<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Política de Privacidad</h2>
            <button @click="closeModal" class="modal-close" aria-label="Cerrar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          
          <div class="modal-body">
            <div class="privacy-content">
              <section>
                <h3>1. Información que Recopilamos</h3>
                <p>
                  Recopilamos información que nos proporcionas directamente cuando:
                </p>
                <ul>
                  <li>Completas nuestro formulario de contacto</li>
                  <li>Solicitas un presupuesto o consulta</li>
                  <li>Te comunicas con nosotros por correo electrónico o teléfono</li>
                  <li>Navegas por nuestro sitio web</li>
                </ul>
                <p>
                  La información que recopilamos puede incluir: nombre, dirección de correo electrónico, número de teléfono, dirección postal y cualquier otra información que elijas proporcionar.
                </p>
              </section>

              <section>
                <h3>2. Uso de la Información</h3>
                <p>Utilizamos la información recopilada para:</p>
                <ul>
                  <li>Responder a tus consultas y solicitudes</li>
                  <li>Proporcionar nuestros servicios de acabados interiores</li>
                  <li>Mejorar nuestro sitio web y servicios</li>
                  <li>Enviar comunicaciones relacionadas con nuestros servicios (solo con tu consentimiento)</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h3>3. Cookies y Tecnologías Similares</h3>
                <p>
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. 
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio.
                </p>
                <p><strong>Tipos de cookies que utilizamos:</strong></p>
                <ul>
                  <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
                  <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio</li>
                  <li><strong>Cookies de funcionalidad:</strong> Permiten que el sitio recuerde tus preferencias</li>
                </ul>
                <p>
                  Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. 
                  Sin embargo, desactivar ciertas cookies puede afectar la funcionalidad del sitio.
                </p>
              </section>

              <section>
                <h3>4. Compartir Información</h3>
                <p>
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
                </p>
                <ul>
                  <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio (bajo acuerdos de confidencialidad)</li>
                  <li>Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
                  <li>Con tu consentimiento explícito</li>
                </ul>
              </section>

              <section>
                <h3>5. Seguridad de los Datos</h3>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal 
                  contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión 
                  por Internet o almacenamiento electrónico es 100% seguro.
                </p>
              </section>

              <section>
                <h3>6. Tus Derechos</h3>
                <p>Tienes derecho a:</p>
                <ul>
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar información inexacta</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                </ul>
                <p>
                  Para ejercer estos derechos, puedes contactarnos a través de nuestro formulario de contacto o correo electrónico.
                </p>
              </section>

              <section>
                <h3>7. Retención de Datos</h3>
                <p>
                  Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos 
                  en esta política, a menos que la ley requiera o permita un período de retención más largo.
                </p>
              </section>

              <section>
                <h3>8. Cambios a esta Política</h3>
                <p>
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos 
                  publicando la nueva política en esta página y actualizando la fecha de "Última actualización".
                </p>
              </section>

              <section>
                <h3>9. Contacto</h3>
                <p>
                  Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tu información personal, 
                  puedes contactarnos a través de:
                </p>
                <ul>
                  <li>Formulario de contacto en nuestro sitio web</li>
                  <li>Correo electrónico proporcionado en la sección de contacto</li>
                </ul>
              </section>

              <div class="privacy-footer">
                <p><strong>Última actualización:</strong> {{ new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button @click="closeModal" class="btn-close-modal">Cerrar</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('openPrivacyModal', openModal)
})

onUnmounted(() => {
  window.removeEventListener('openPrivacyModal', openModal)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-content {
  background-color: var(--bg-color);
  border-radius: 24px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dark .modal-content {
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px;
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
}

.modal-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-color);
  margin: 0;
}

.modal-close {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  background-color: var(--hover-bg);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.modal-close:hover {
  background-color: var(--border-color);
  transform: rotate(90deg);
}

.modal-close svg {
  width: 20px;
  height: 20px;
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 28px;
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) transparent;
}

.modal-body::-webkit-scrollbar {
  width: 8px;
}

.modal-body::-webkit-scrollbar-track {
  background: transparent;
}

.modal-body::-webkit-scrollbar-thumb {
  background-color: var(--border-color);
  border-radius: 4px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background-color: var(--text-secondary);
}

.privacy-content {
  color: var(--text-color);
}

.privacy-content section {
  margin-bottom: 32px;
}

.privacy-content h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-color);
}

.privacy-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.privacy-content ul {
  margin: 12px 0;
  padding-left: 24px;
}

.privacy-content li {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.privacy-content strong {
  color: var(--text-color);
  font-weight: 600;
}

.privacy-footer {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.privacy-footer p {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
}

.modal-footer {
  padding: 20px 28px;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
}

.btn-close-modal {
  padding: 12px 32px;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-close-modal:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}

.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-active .modal-content {
  animation: modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-leave-active .modal-content {
  animation: modalSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@keyframes modalSlideIn {
  from {
    transform: scale(0.9) translateY(20px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

@keyframes modalSlideOut {
  from {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  to {
    transform: scale(0.95) translateY(20px);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 12px;
  }

  .modal-content {
    max-height: 95vh;
    border-radius: 20px;
  }

  .modal-header {
    padding: 20px;
  }

  .modal-header h2 {
    font-size: 24px;
  }

  .modal-body {
    padding: 20px;
  }

  .privacy-content h3 {
    font-size: 18px;
  }

  .privacy-content p,
  .privacy-content li {
    font-size: 14px;
  }

  .modal-footer {
    padding: 16px 20px;
  }

  .btn-close-modal {
    width: 100%;
    padding: 14px 32px;
  }
}
</style>

