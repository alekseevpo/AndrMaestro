<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="visible"
        class="video-bubble"
        role="complementary"
        aria-label="Video reel"
      >
        <div class="bubble-header">
          <span class="bubble-title">Reel</span>
          <button class="bubble-close" @click="dismiss" aria-label="Cerrar video">
            ✕
          </button>
        </div>
        <div class="bubble-body">
          <iframe
            v-if="videoId"
            :src="embedUrl"
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
    </transition>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const DEFAULT_VIDEO_ID = import.meta.env.VITE_VIDEO_REEL_ID || 'ysz5S6PUM-U'
const DISMISS_KEY = 'videoBubbleDismissedAt'
const DISMISS_TTL_MS = 1000 * 60 * 60 * 24 // 24h

const videoId = DEFAULT_VIDEO_ID
const visible = ref(false)

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

const dismiss = () => {
  visible.value = false
  try {
    localStorage.setItem(DISMISS_KEY, Date.now().toString())
  } catch (e) {
    // ignore
  }
}

const shouldShow = () => {
  try {
    const ts = parseInt(localStorage.getItem(DISMISS_KEY) || '0', 10)
    if (!ts) return true
    return Date.now() - ts > DISMISS_TTL_MS
  } catch (e) {
    return true
  }
}

onMounted(() => {
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
  left: 16px;
  bottom: 16px;
  width: 260px;
  max-width: calc(100vw - 32px);
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  border-radius: 14px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  z-index: 20000;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.bubble-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  font-size: 14px;
  letter-spacing: 0.2px;
  background: linear-gradient(135deg, rgba(0, 122, 255, 0.12), rgba(0, 122, 255, 0.05));
}

.bubble-title {
  font-weight: 600;
}

.bubble-close {
  background: transparent;
  border: none;
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.bubble-close:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: scale(1.05);
}

.bubble-body {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  background: #000;
}

.bubble-body iframe,
.bubble-body .bubble-placeholder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0 0 14px 14px;
}

.bubble-placeholder {
  display: grid;
  place-items: center;
  color: #ccc;
  font-size: 14px;
}

@media (max-width: 480px) {
  .video-bubble {
    width: 220px;
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
</style>

