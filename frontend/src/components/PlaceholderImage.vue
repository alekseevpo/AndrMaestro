<template>
  <div class="placeholder-image" :class="size">
    <div class="placeholder-content">
      <div class="placeholder-icon">{{ icon }}</div>
      <p v-if="label" class="placeholder-label">{{ label }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: '🏗️'
  },
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})
</script>

<style scoped>
.placeholder-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--hover-bg) 0%, var(--bg-color) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.dark .placeholder-image {
  background: linear-gradient(135deg, #2a2a2c 0%, #1a1a1a 100%);
}

.placeholder-content {
  text-align: center;
  z-index: 1;
}

.placeholder-icon {
  font-size: 64px;
  opacity: 0.6;
  animation: float 3s ease-in-out infinite;
}

.placeholder-image.large .placeholder-icon {
  font-size: 96px;
}

.placeholder-image.small .placeholder-icon {
  font-size: 48px;
}

.placeholder-label {
  margin-top: 10px;
  color: var(--text-secondary);
  font-size: 14px;
  opacity: 0.7;
}

.placeholder-image::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 122, 255, 0.1) 0%, transparent 70%);
  animation: shimmer 4s ease-in-out infinite;
}

.dark .placeholder-image::before {
  background: radial-gradient(circle, rgba(0, 122, 255, 0.15) 0%, transparent 70%);
}
</style>

