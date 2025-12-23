<template>
  <div v-if="isNewYearEnabled" class="new-year-effects">
    <!-- Snowflakes -->
    <div 
      v-for="n in 50" 
      :key="n" 
      class="snowflake"
      :style="{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 10}s`,
        opacity: Math.random()
      }"
    >
      ❄
    </div>
  </div>
</template>

<script setup>
import { useNewYearTheme } from '../composables/useNewYearTheme'

const { isNewYearEnabled } = useNewYearTheme()
</script>

<style scoped>
.new-year-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  top: -10px;
  font-size: 1.5em;
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  animation: snowfall linear infinite;
  user-select: none;
}

@keyframes snowfall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(50px) rotate(360deg);
    opacity: 0;
  }
}

/* Different sizes for variety */
.snowflake:nth-child(3n) {
  font-size: 1.2em;
}

.snowflake:nth-child(5n) {
  font-size: 1.8em;
}

.snowflake:nth-child(7n) {
  font-size: 1em;
}
</style>

