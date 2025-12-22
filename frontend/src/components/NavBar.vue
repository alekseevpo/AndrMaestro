<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <router-link to="/" class="logo" @click="closeMenu">
          <span class="logo-text">AndrMaestro</span>
        </router-link>
        
        <Transition name="menu-overlay">
          <div v-if="menuOpen" class="menu-overlay" @click="closeMenu"></div>
        </Transition>
        
        <div class="nav-links" :class="{ active: menuOpen }">
          <router-link to="/" @click="closeMenu" class="nav-link-item">Inicio</router-link>
          <router-link to="/servicios" @click="closeMenu" class="nav-link-item">Servicios</router-link>
          <router-link to="/portafolio" @click="closeMenu" class="nav-link-item">Portafolio</router-link>
          <router-link to="/blog" @click="closeMenu" class="nav-link-item">Blog</router-link>
          <router-link to="/preguntas-frecuentes" @click="closeMenu" class="nav-link-item">FAQ</router-link>
          <router-link to="/contacto" @click="closeMenu" class="nav-link-item">Contacto</router-link>
          <ThemeToggle class="mobile-menu-theme" />
        </div>
        
        <div class="nav-actions">
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
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  // Блокируем скролл когда меню открыто
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
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

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  padding: 15px 0;
}

.dark .navbar {
  background-color: rgba(0, 0, 0, 0.8);
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

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 999;
}

.menu-overlay-enter-active,
.menu-overlay-leave-active {
  transition: opacity 0.3s ease, backdrop-filter 0.3s ease;
}

.menu-overlay-enter-from,
.menu-overlay-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .mobile-theme-toggle {
    display: flex !important;
  }
  
  .nav-links .theme-toggle {
    display: none;
  }
  
  .mobile-menu-theme {
    margin-top: 10px;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--bg-color);
    flex-direction: column;
    padding: 80px 30px 30px;
    gap: 0;
    z-index: 1000;
    overflow-y: auto;
    transform: translateX(-100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
  }
  
  .dark .nav-links {
    box-shadow: 2px 0 20px rgba(0, 0, 0, 0.5);
  }
  
  .nav-links.active {
    transform: translateX(0);
  }
  
  .nav-link-item {
    padding: 18px 20px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 12px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateX(-20px);
    position: relative;
    overflow: hidden;
  }
  
  .nav-links.active .nav-link-item {
    opacity: 1;
    transform: translateX(0);
  }
  
  .nav-links.active .nav-link-item:nth-child(1) {
    transition-delay: 0.05s;
  }
  
  .nav-links.active .nav-link-item:nth-child(2) {
    transition-delay: 0.1s;
  }
  
  .nav-links.active .nav-link-item:nth-child(3) {
    transition-delay: 0.15s;
  }
  
  .nav-links.active .nav-link-item:nth-child(4) {
    transition-delay: 0.2s;
  }
  
  .nav-links.active .nav-link-item:nth-child(5) {
    transition-delay: 0.25s;
  }
  
  .nav-links.active .nav-link-item:nth-child(6) {
    transition-delay: 0.3s;
  }
  
  .nav-link-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background-color: var(--accent-color);
    opacity: 0.1;
    transition: width 0.3s ease;
  }
  
  .nav-link-item:hover::before,
  .nav-link-item.router-link-active::before {
    width: 100%;
  }
  
  .nav-link-item:hover {
    background-color: var(--hover-bg);
    transform: translateX(5px);
  }
  
  .nav-link-item.router-link-active {
    color: var(--accent-color);
    background-color: var(--hover-bg);
  }
  
  .nav-link-item::after {
    display: none;
  }
}
</style>

