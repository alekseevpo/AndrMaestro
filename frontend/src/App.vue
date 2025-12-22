<template>
  <div id="app">
    <SkipToContent />
    <NavBar />
    <main id="main-content" tabindex="-1">
      <router-view />
    </main>
    <Footer />
    <WhatsAppButton />
    <BackToTop />
    <Toast />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import BackToTop from './components/BackToTop.vue'
import Toast from './components/Toast.vue'
import SkipToContent from './components/SkipToContent.vue'
import { useTheme } from './composables/useTheme'

// Initialize theme
useTheme()

// Smooth scroll behavior
onMounted(() => {
  if (typeof window !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth'
  }
})
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

