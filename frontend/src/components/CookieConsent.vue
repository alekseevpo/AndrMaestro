<template>
  <Transition name="cookie-slide">
    <div v-if="showConsent" class="cookie-consent">
      <div class="cookie-content">
        <div class="cookie-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </div>
        <div class="cookie-text">
          <h3>Uso de Cookies</h3>
          <p>
            Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido. 
            Al hacer clic en "Aceptar", aceptas nuestro uso de cookies. 
            <button @click="openPrivacy" class="privacy-link">Política de Privacidad</button>
          </p>
        </div>
        <div class="cookie-actions">
          <button @click="acceptCookies" class="btn-accept">Aceptar</button>
          <button @click="declineCookies" class="btn-decline">Rechazar</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showConsent = ref(false)

onMounted(() => {
  // Check if user has already given consent
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) {
    // Show consent banner after a short delay
    setTimeout(() => {
      showConsent.value = true
    }, 1000)
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  localStorage.setItem('cookieConsentDate', new Date().toISOString())
  showConsent.value = false
}

const declineCookies = () => {
  localStorage.setItem('cookieConsent', 'declined')
  localStorage.setItem('cookieConsentDate', new Date().toISOString())
  showConsent.value = false
}

const openPrivacy = () => {
  // Emit event to open privacy modal
  window.dispatchEvent(new CustomEvent('openPrivacyModal'))
}
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--bg-color);
  border-top: 1px solid var(--border-color);
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.15);
  z-index: 9998;
  padding: 20px;
}

.dark .cookie-consent {
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.5);
  background-color: var(--bg-color);
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cookie-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  color: white;
  border-radius: 12px;
  flex-shrink: 0;
}

.cookie-icon svg {
  width: 24px;
  height: 24px;
}

.cookie-text {
  flex: 1;
  min-width: 250px;
}

.cookie-text h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-color);
}

.cookie-text p {
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0;
}

.privacy-link {
  background: none;
  border: none;
  color: var(--accent-color);
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  margin-left: 4px;
  transition: color 0.3s ease;
}

.privacy-link:hover {
  color: var(--primary-color);
}

.cookie-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.btn-accept,
.btn-decline {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-accept {
  background-color: var(--accent-color);
  color: white;
}

.btn-accept:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}

.btn-decline {
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.btn-decline:hover {
  background-color: var(--hover-bg);
  border-color: var(--text-secondary);
}

.cookie-slide-enter-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}

.cookie-slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}

.cookie-slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.cookie-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }

  .cookie-icon {
    width: 40px;
    height: 40px;
  }

  .cookie-icon svg {
    width: 20px;
    height: 20px;
  }

  .cookie-text h3 {
    font-size: 16px;
  }

  .cookie-text p {
    font-size: 13px;
  }

  .cookie-actions {
    width: 100%;
    flex-direction: column;
  }

  .btn-accept,
  .btn-decline {
    width: 100%;
    padding: 14px 24px;
  }
}
</style>

