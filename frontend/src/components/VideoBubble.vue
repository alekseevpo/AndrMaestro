<template>
  <Teleport to="body">
    <!-- Mini bubble -->
    <transition name="fade">
      <div
        v-if="visible"
        class="video-bubble mini"
        role="complementary"
        aria-label="Video reel"
      >
        <button 
          class="bubble-close" 
          @click="closeBubble" 
          aria-label="Cerrar video"
          title="Cerrar"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="mini-thumb" @click="openExpanded" role="button" aria-label="Reproducir video">
          <iframe
            v-if="videoId"
            key="mini"
            :src="embedUrl"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <img v-else-if="poster" :src="poster" alt="Reel" loading="lazy" />
          <div v-else class="thumb-placeholder"></div>
        </div>
      </div>
    </transition>

    <!-- Expanded modal -->
    <transition name="zoom-fade">
      <div v-if="visible && expanded" class="bubble-modal" role="dialog" aria-modal="true">
        <div class="modal-backdrop" @click="closeExpanded"></div>
        <div class="modal-content">
          <div class="modal-body">
            <iframe
              v-if="videoId"
              key="expanded"
              :src="embedUrlExpanded"
              title="YouTube video player"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div v-else class="bubble-placeholder">
              <span>Video no disponible</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const DEFAULT_VIDEO_ID = import.meta.env.VITE_VIDEO_REEL_ID || 'oj6S8WFVQjo'
const DEFAULT_POSTER = import.meta.env.VITE_VIDEO_REEL_POSTER || ''
const DISMISS_KEY = 'video-bubble-dismissed'
const videoId = DEFAULT_VIDEO_ID
const poster = DEFAULT_POSTER
const visible = ref(false)
const expanded = ref(false)

const embedUrl = computed(() => {
  if (!videoId) return ''
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    controls: '0',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    loop: '1',
    playlist: videoId
  })
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
})

const embedUrlExpanded = computed(() => {
  if (!videoId) return ''
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '0',
    controls: '1',
    playsinline: '1',
    rel: '0',
    modestbranding: '1'
  })
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
})

const openExpanded = () => {
  if (!videoId) return
  expanded.value = true
  lockScroll(true)
}

const closeExpanded = () => {
  expanded.value = false
  lockScroll(false)
}

const closeBubble = () => {
  visible.value = false
  expanded.value = false
  lockScroll(false)
  // Save dismissal state
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(DISMISS_KEY, 'true')
  }
}

const showBubble = () => {
  // Clear dismissal state
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(DISMISS_KEY)
  }
  // Show bubble
  visible.value = true
  expanded.value = false
}

const lockScroll = (lock) => {
  if (typeof document === 'undefined') return
  if (lock) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const shouldShow = () => {
  if (typeof localStorage === 'undefined') return true
  const dismissed = localStorage.getItem(DISMISS_KEY)
  return dismissed !== 'true'
}

// Expose showBubble function globally
onMounted(() => {
  // Always expose the function, even if video is dismissed
  if (typeof window !== 'undefined') {
    window.showVideoBubble = showBubble
  }
  
  if (!videoId) return
  if (!shouldShow()) return
  // slight delay to avoid layout shift
  setTimeout(() => {
    visible.value = true
  }, 600)
})
</script>

<style scoped>
.video-bubble {
  position: fixed;
  left: 14px;
  bottom: 14px;
  width: 140px;
  max-width: calc(100vw - 28px);
  z-index: 20000;
}

.video-bubble.mini {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  overflow: visible;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
}

.bubble-close {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: opacity 0.2s ease;
  padding: 0;
  margin: 0;
}

.bubble-close:hover {
  opacity: 0.7;
}

.bubble-close:active {
  opacity: 0.5;
}

.bubble-close svg {
  width: 14px;
  height: 14px;
  display: block;
  flex-shrink: 0;
}

.bubble-close svg line {
  stroke: #ffffff;
  stroke-width: 2.5;
}

.mini-thumb {
  position: relative;
  width: 100%;
  padding-bottom: 140%; /* portrait */
  overflow: hidden;
  border-radius: 12px;
  background: #0b0b0b;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.mini-thumb iframe,
.mini-thumb img,
.thumb-placeholder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.mini-thumb iframe {
  pointer-events: none;
  width: 125%;
  height: 125%;
  left: -12.5%;
  top: -12.5%;
}

.thumb-placeholder {
  background: linear-gradient(135deg, #1f1f22, #0f0f12);
}

.thumb-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.45) 100%);
}

.play-icon {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 50%;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 480px) {
  .video-bubble {
    width: 120px;
    left: 12px;
    bottom: 12px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

/* Modal */
.bubble-modal {
  position: fixed;
  inset: 0;
  z-index: 30000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
}

.modal-content {
  position: relative;
  width: min(90vw, 420px);
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.modal-body {
  position: relative;
  width: 100%;
  padding-bottom: 177.78%; /* 9:16 portrait */
  background: #000;
}

.modal-body iframe,
.modal-body .bubble-placeholder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>

