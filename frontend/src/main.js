import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { inject } from '@vercel/analytics'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Initialize Vercel Analytics
inject()

// Initialize Speed Insights (optional)
injectSpeedInsights()

