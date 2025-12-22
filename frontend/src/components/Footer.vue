<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>AndrMaestro</h3>
          <p>Maestro profesional de acabados interiores con años de experiencia en transformar espacios.</p>
        </div>
        
        <div class="footer-section">
          <h4>Enlaces</h4>
          <router-link to="/">Inicio</router-link>
          <router-link to="/servicios">Servicios</router-link>
          <router-link to="/portafolio">Portafolio</router-link>
          <router-link to="/preguntas-frecuentes">Preguntas Frecuentes</router-link>
          <router-link to="/contacto">Contacto</router-link>
        </div>
        
        <div class="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@andrmaestro.com</p>
          <p>Teléfono: +34 XXX XXX XXX</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} AndrMaestro. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: var(--primary-color);
  color: #f5f5f7;
  padding: 60px 0 30px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 600;
}

.footer-section h4 {
  font-size: 17px;
  margin-bottom: 15px;
  font-weight: 600;
}

.footer-section p {
  color: #86868b;
  line-height: 1.6;
  margin-bottom: 10px;
}

.footer-section a {
  display: block;
  color: #86868b;
  margin-bottom: 10px;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #f5f5f7;
}

.footer-bottom {
  border-top: 1px solid #424245;
  padding-top: 30px;
  text-align: center;
  color: #86868b;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>

