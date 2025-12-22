<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <router-link to="/" class="logo" @click="closeMenu">
          <span class="logo-text">AndrMaestro</span>
        </router-link>
        
        <!-- Desktop Navigation -->
        <nav class="nav-links">
          <router-link to="/">Inicio</router-link>
          <router-link to="/servicios">Servicios</router-link>
          <router-link to="/portafolio">Portafolio</router-link>
          <router-link to="/blog">Artículos</router-link>
          <router-link to="/preguntas-frecuentes">Preguntas Frecuentes</router-link>
          <router-link to="/contacto">Contacto</router-link>
        </nav>
        
        <div class="nav-actions">
          <ThemeToggle class="desktop-theme-toggle" />
          <ThemeToggle class="mobile-theme-toggle" />
          <button 
            class="menu-toggle" 
            :class="{ active: menuOpen }"
            @click="toggleMenu" 
            aria-label="Toggle menu"
            aria-expanded="menuOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
    
        <Teleport to="body">
          <Transition name="overlay">
            <div v-if="menuOpen" class="menu-overlay" @click="closeMenu"></div>
          </Transition>
          
          <Transition name="popup">
            <div v-if="menuOpen" class="popup-menu-wrapper" @click.self="closeMenu">
              <div class="popup-menu">
                <div class="popup-menu-header">
                  <h2 class="popup-menu-title">Menú</h2>
                </div>
                <div class="popup-menu-content">
                  <router-link to="/" @click="closeMenu" class="popup-menu-item">
                    <span class="menu-item-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                    </span>
                    <span class="menu-item-text">Inicio</span>
                  </router-link>
                  <router-link to="/servicios" @click="closeMenu" class="popup-menu-item" style="animation-delay: 0.1s">
                    <span class="menu-item-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                      </svg>
                    </span>
                    <span class="menu-item-text">Servicios</span>
                  </router-link>
                  <router-link to="/portafolio" @click="closeMenu" class="popup-menu-item" style="animation-delay: 0.15s">
                    <span class="menu-item-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                      </svg>
                    </span>
                    <span class="menu-item-text">Portafolio</span>
                  </router-link>
                  <router-link to="/blog" @click="closeMenu" class="popup-menu-item" style="animation-delay: 0.2s">
                    <span class="menu-item-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 4.5z"/>
                        <line x1="8" y1="7" x2="16" y2="7"/>
                        <line x1="8" y1="11" x2="16" y2="11"/>
                        <line x1="8" y1="15" x2="12" y2="15"/>
                      </svg>
                    </span>
                    <span class="menu-item-text">Artículos</span>
                  </router-link>
                  <router-link to="/preguntas-frecuentes" @click="closeMenu" class="popup-menu-item" style="animation-delay: 0.25s">
                    <span class="menu-item-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>
                    </span>
                    <span class="menu-item-text">Preguntas Frecuentes</span>
                  </router-link>
                  <router-link to="/contacto" @click="closeMenu" class="popup-menu-item" style="animation-delay: 0.3s">
                    <span class="menu-item-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <span class="menu-item-text">Contacto</span>
                  </router-link>
                </div>
                <div class="popup-menu-footer">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Transition>
        </Teleport>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

// Закрываем меню при изменении размера окна (если перешли на десктоп)
const handleResize = () => {
  if (window.innerWidth > 768 && menuOpen.value) {
    closeMenu()
  }
}

// Закрываем меню при нажатии Escape
const handleEscape = (e) => {
  if (e.key === 'Escape' && menuOpen.value) {
    closeMenu()
  }
}

// Отслеживаем изменения menuOpen для блокировки скролла
watch(menuOpen, (isOpen) => {
  if (isOpen) {
    // Сохраняем текущую позицию скролла
    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
  } else {
    // Восстанавливаем позицию скролла
    const scrollY = document.body.style.top
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }
})

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 999;
  padding: 15px 0;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}

@media (max-width: 768px) {
  .navbar {
    z-index: 1002;
  }
}

.dark .navbar {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.desktop-theme-toggle {
  display: flex;
}

.mobile-theme-toggle {
  display: none;
}

.logo {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
}

.logo-text {
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-links a {
  font-size: 17px;
  color: var(--text-color);
  position: relative;
  padding: 5px 0;
}

.nav-links a.router-link-active {
  color: var(--accent-color);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 30px;
  height: 30px;
  justify-content: center;
  z-index: 1003;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: center;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Overlay для затемнения фона */
.menu-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999998 !important;
  isolation: isolate !important;
  pointer-events: auto !important;
}

.overlay-enter-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.overlay-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Всплывающее меню (popup) */
.popup-menu-wrapper {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999 !important;
  padding: 20px;
  pointer-events: none;
}

.popup-menu {
  background-color: var(--bg-color) !important;
  border-radius: 24px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 420px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  pointer-events: auto;
  position: relative;
}

.dark .popup-menu {
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.6);
}

.popup-enter-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.popup-leave-active {
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.popup-enter-active .popup-menu {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.popup-leave-active .popup-menu {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), filter 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.popup-enter-from {
  opacity: 0;
}

.popup-enter-from .popup-menu {
  transform: scale(0.9) translateY(-20px);
  opacity: 0;
  filter: blur(8px);
}

.popup-leave-to {
  opacity: 0;
}

.popup-leave-to .popup-menu {
  transform: scale(0.95) translateY(15px);
  opacity: 0;
  filter: blur(4px);
}

.popup-menu {
  position: relative;
}

.popup-menu-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 24px 20px;
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
  background-color: var(--bg-color);
}

.popup-menu-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-color) !important;
  margin: 0;
  letter-spacing: -0.3px;
  text-align: center;
}

.popup-menu-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  gap: 8px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) transparent;
}

.popup-menu-content::-webkit-scrollbar {
  width: 6px;
}

.popup-menu-content::-webkit-scrollbar-track {
  background: transparent;
}

.popup-menu-content::-webkit-scrollbar-thumb {
  background-color: var(--border-color);
  border-radius: 3px;
}

.popup-menu-content::-webkit-scrollbar-thumb:hover {
  background-color: var(--accent-color);
}

.popup-menu-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  border-radius: 16px;
  text-decoration: none;
  color: var(--text-color) !important;
  font-size: 17px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  opacity: 0;
  transform: translateY(10px);
  animation: menuItemFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  min-height: 60px;
}

@keyframes menuItemFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.popup-menu-item:hover {
  background-color: var(--hover-bg);
  transform: translateX(4px);
}

.popup-menu-item.router-link-active {
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  color: white !important;
  font-weight: 600;
  box-shadow: 0 6px 16px rgba(0, 122, 255, 0.3);
  transform: translateX(4px);
}

.popup-menu-item .menu-item-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--text-color);
  background: var(--hover-bg);
  border-radius: 10px;
}

.popup-menu-item .menu-item-icon svg {
  width: 22px;
  height: 22px;
  stroke: currentColor;
  transition: all 0.3s ease;
}

.popup-menu-item:hover .menu-item-icon {
  transform: scale(1.1);
  color: var(--accent-color);
  background: rgba(0, 122, 255, 0.1);
}

.popup-menu-item.router-link-active .menu-item-icon {
  color: white;
  background: rgba(255, 255, 255, 0.2);
}

.popup-menu-item.router-link-active .menu-item-icon svg {
  stroke: white;
}

.popup-menu-footer {
  padding: 20px 24px 24px;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  background-color: var(--bg-color);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    z-index: 10001;
  }
  
  .nav-actions {
    z-index: 10001;
    position: relative;
  }
  
  .desktop-theme-toggle {
    display: none !important;
  }
  
  .mobile-theme-toggle {
    display: flex !important;
  }
  
  .nav-links {
    display: none;
  }
}
</style>

