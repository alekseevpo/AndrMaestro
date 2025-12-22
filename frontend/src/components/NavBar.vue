<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <router-link to="/" class="logo">
          <span class="logo-text">AndrMaestro</span>
        </router-link>
        
        <div class="nav-links" :class="{ active: menuOpen }">
          <router-link to="/" @click="closeMenu">Inicio</router-link>
          <router-link to="/servicios" @click="closeMenu">Servicios</router-link>
          <router-link to="/portafolio" @click="closeMenu">Portafolio</router-link>
          <router-link to="/blog" @click="closeMenu">Blog</router-link>
          <router-link to="/preguntas-frecuentes" @click="closeMenu">FAQ</router-link>
          <router-link to="/contacto" @click="closeMenu">Contacto</router-link>
          <ThemeToggle />
        </div>
        
        <div class="nav-actions">
          <ThemeToggle class="mobile-theme-toggle" />
          <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
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
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
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
  transition: all 0.3s ease;
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
  
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--bg-color);
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    border-top: 1px solid var(--border-color);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }
  
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }
}
</style>

