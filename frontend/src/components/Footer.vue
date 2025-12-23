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
          <router-link to="/blog">Artículos</router-link>
          <router-link to="/preguntas-frecuentes">Preguntas Frecuentes</router-link>
          <router-link to="/contacto">Contacto</router-link>
        </div>
        
        <div class="footer-section">
          <h4>Contacto</h4>
          <p>
            Email: 
            <a href="mailto:info@andrmaestro.com" class="contact-link">info@andrmaestro.com</a>
          </p>
          <p>
            Teléfono: 
            <a href="tel:+34633343468" class="contact-link">+34 633 34 34 68</a>
          </p>
        </div>
        
        <div class="footer-section">
          <h4>Síguenos</h4>
          <div class="social-links">
            <a 
              href="https://www.facebook.com/andrmaestro" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Facebook"
              title="Facebook"
            >
              <div class="social-icon facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
            </a>
            <a 
              href="https://www.instagram.com/andrmaestro" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Instagram"
              title="Instagram"
            >
              <div class="social-icon instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/@andrmaestro" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
              aria-label="YouTube"
              title="YouTube"
            >
              <div class="social-icon youtube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </a>
            <a 
              href="https://wa.me/34633343468" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <div class="social-icon whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
            </a>
          </div>
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
  background-color: var(--hover-bg);
  color: var(--text-color);
  padding: 60px 0 30px;
  margin-top: auto;
  border-top: 1px solid var(--border-color);
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
  color: var(--text-color);
}

.footer-section h4 {
  font-size: 17px;
  margin-bottom: 15px;
  font-weight: 600;
  color: var(--text-color);
}

.footer-section p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 10px;
}

.footer-section a {
  display: block;
  color: var(--text-secondary);
  margin-bottom: 10px;
  transition: color 0.3s ease;
  text-decoration: none;
}

.footer-section a:hover {
  color: var(--accent-color);
}

.contact-link {
  color: var(--accent-color);
  text-decoration: none;
  transition: color 0.3s ease, opacity 0.3s ease;
  font-weight: 500;
}

.contact-link:hover {
  color: var(--primary-color);
  opacity: 0.8;
  text-decoration: underline;
}

.dark .contact-link {
  color: #4a9eff;
}

.dark .contact-link:hover {
  color: #6bb0ff;
}

.social-links {
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--hover-bg);
  border: 1px solid var(--border-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--text-secondary);
  will-change: transform, background-color, box-shadow;
}

.social-icon svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.social-link:hover .social-icon {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.social-link:hover .social-icon svg {
  transform: scale(1.05);
}

/* Цвета для каждой социальной сети */
.social-icon.facebook {
  color: #1877F2;
}

.social-link:hover .social-icon.facebook {
  background: #1877F2 !important;
  border-color: #1877F2 !important;
  color: white !important;
  box-shadow: 0 4px 16px rgba(24, 119, 242, 0.4);
}

.social-icon.instagram {
  color: #E4405F;
}

.social-link:hover .social-icon.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) !important;
  border-color: #E4405F !important;
  color: white !important;
  box-shadow: 0 4px 16px rgba(228, 64, 95, 0.4);
}

.social-icon.youtube {
  color: #FF0000;
}

.social-link:hover .social-icon.youtube {
  background: #FF0000 !important;
  border-color: #FF0000 !important;
  color: white !important;
  box-shadow: 0 4px 16px rgba(255, 0, 0, 0.4);
}

.social-icon.whatsapp {
  color: #25D366;
}

.social-link:hover .social-icon.whatsapp {
  background: #25D366 !important;
  border-color: #25D366 !important;
  color: white !important;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
}

.dark .social-icon {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .social-link:hover .social-icon {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 30px;
  text-align: center;
  color: var(--text-secondary);
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 24px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 32px;
  }

  .footer-section h3 {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .footer-section h4 {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .footer-section p {
    font-size: 15px;
    line-height: 1.6;
  }

  .footer-section a {
    font-size: 15px;
    padding: 8px 0;
  }

  .social-links {
    gap: 10px;
    justify-content: center;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .social-icon svg {
    width: 18px;
    height: 18px;
  }

  .footer-bottom {
    padding-top: 24px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 32px 0 20px;
  }

  .footer-content {
    gap: 24px;
  }
}
</style>

