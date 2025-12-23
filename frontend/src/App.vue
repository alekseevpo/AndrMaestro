<template>
  <div id="app">
    <NewYearEffects />
    <SkipToContent />
    <NavBar />
    <Breadcrumbs />
    <main id="main-content" tabindex="-1">
      <router-view />
    </main>
    <Footer />
    <WhatsAppButton />
    <BackToTop />
    <Toast />
    <PageLoader />
    <CookieConsent />
    <PrivacyModal />
  </div>
</template>

<script setup>
import { onMounted, defineAsyncComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'
import PrivacyModal from './components/PrivacyModal.vue'
import NewYearEffects from './components/NewYearEffects.vue'
import { useTheme } from './composables/useTheme'
import { useNewYearTheme } from './composables/useNewYearTheme'

// Lazy load non-critical components
const WhatsAppButton = defineAsyncComponent(() => import('./components/WhatsAppButton.vue'))
const BackToTop = defineAsyncComponent(() => import('./components/BackToTop.vue'))
const Toast = defineAsyncComponent(() => import('./components/Toast.vue'))
const SkipToContent = defineAsyncComponent(() => import('./components/SkipToContent.vue'))
const Breadcrumbs = defineAsyncComponent(() => import('./components/Breadcrumbs.vue'))
const PageLoader = defineAsyncComponent(() => import('./components/PageLoader.vue'))

// Initialize themes
useTheme()
useNewYearTheme()

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
  background-color: var(--bg-color);
}
</style>

