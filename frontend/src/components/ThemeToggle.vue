<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
    :title="isDark ? 'Tema claro' : 'Tema oscuro'"
  >
    <svg v-if="!isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
    <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--hover-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.theme-toggle:hover {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
  transform: scale(1.05);
}

.theme-toggle svg {
  width: 20px;
  height: 20px;
  color: var(--text-color);
  stroke: var(--text-color);
  transition: transform 0.3s ease, color 0.3s ease;
  flex-shrink: 0;
}

.theme-toggle:hover svg {
  transform: rotate(15deg);
  color: white;
  stroke: white;
}

/* Улучшенная видимость для мобильных */
@media (max-width: 768px) {
  .theme-toggle {
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
  }

  .theme-toggle svg {
    width: 22px;
    height: 22px;
  }
}
</style>

