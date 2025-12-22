import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Lazy load analytics to improve initial load time
if (import.meta.env.PROD) {
  Promise.all([
    import('@vercel/analytics').then(({ inject }) => inject()),
    import('@vercel/speed-insights').then(({ injectSpeedInsights }) => injectSpeedInsights())
  ]).catch(() => {
    // Silently fail if analytics can't load
  })
}

