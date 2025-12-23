<template>
  <button
    class="new-year-toggle"
    @click="toggleNewYearTheme"
    :aria-label="isNewYearEnabled ? 'Desactivar tema navideño' : 'Activar tema navideño'"
    :title="isNewYearEnabled ? 'Desactivar tema navideño' : 'Activar tema navideño'"
  >
    <svg v-if="!isNewYearEnabled" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Snowflake icon -->
      <path d="M12 2v20M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3M2 12h20M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66"/>
    </svg>
    <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Christmas tree icon -->
      <path d="M12 2v4M12 2l-2 2M12 2l2 2M8 8l-2 2M8 8l2 2M16 8l-2 2M16 8l2 2M10 14l-2 2M10 14l2 2M14 14l-2 2M14 14l2 2M12 20v2M12 20l-1 1M12 20l1 1"/>
      <circle cx="12" cy="6" r="1" fill="currentColor"/>
      <circle cx="8" cy="10" r="1" fill="currentColor"/>
      <circle cx="16" cy="10" r="1" fill="currentColor"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </svg>
  </button>
</template>

<script setup>
import { useNewYearTheme } from '../composables/useNewYearTheme'

const { isNewYearEnabled, toggleNewYearTheme } = useNewYearTheme()
</script>

<style scoped>
.new-year-toggle {
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

.new-year-toggle:hover {
  background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%);
  color: white;
  border-color: #dc2626;
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(220, 38, 38, 0.5);
}

.new-year-toggle svg {
  width: 20px;
  height: 20px;
  color: var(--text-color);
  stroke: var(--text-color);
  transition: transform 0.3s ease, color 0.3s ease;
  flex-shrink: 0;
}

.new-year-toggle:hover svg {
  transform: rotate(15deg);
  color: white;
  stroke: white;
}

.new-year .new-year-toggle {
  background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%);
  color: white;
  border-color: #dc2626;
  box-shadow: 0 0 15px rgba(220, 38, 38, 0.5);
}

.new-year .new-year-toggle svg {
  color: white;
  stroke: white;
}
</style>

