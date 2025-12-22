<template>
  <a href="#main-content" class="skip-to-content" @click="handleClick">
    Saltar al contenido principal
  </a>
</template>

<script setup>
const handleClick = (e) => {
  e.preventDefault()
  const mainContent = document.getElementById('main-content')
  if (mainContent) {
    mainContent.focus()
    mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.skip-to-content {
  position: absolute;
  top: -100px;
  left: 0;
  background-color: var(--accent-color);
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  z-index: 10001;
  border-radius: 0 0 4px 0;
  font-weight: 500;
  transition: top 0.3s ease;
}

.skip-to-content:focus {
  top: 0;
  outline: 2px solid white;
  outline-offset: 2px;
}
</style>

