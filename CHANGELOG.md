# Historial de Desarrollo - AndrMaestro

Este archivo documenta todos los cambios importantes realizados en el proyecto.

## [1.3.4] - 2024-01-XX

### Corregido
- **Tema Oscuro - Adaptación Completa**: Adaptación completa de todos los elementos a la tema oscuro
  - Corregidos fondos de imágenes de Portfolio para tema oscuro
  - Corregidos fondos de imágenes de Blog para tema oscuro
  - Mejorado fondo de NavBar en tema oscuro (más consistente)
  - Añadido color de fondo al componente App
  - Mejorado contraste del subtítulo hero en tema oscuro
  - Todos los gradientes ahora se adaptan correctamente a tema oscuro
  - Estilo consistente de tema oscuro en todos los componentes

## [1.3.3] - 2024-01-XX

### Corregido
- **Tema Oscuro - Mejoras Críticas de Contraste**: Mejoras significativas en la legibilidad del tema oscuro
  - Cambiado fondo de tema oscuro de negro puro (#000000) a gris oscuro (#1a1a1a) para mejor legibilidad
  - Mejorado color de texto a blanco puro (#ffffff) para máximo contraste
  - Mejorado color text-secondary a #d1d1d6 para mejor visibilidad
  - Todos los encabezados (h1-h6) ahora son blancos y más gruesos en tema oscuro
  - Mejorados elementos FAQ con fondo más oscuro (#2a2a2c) y mejores bordes
  - Mejorado texto de preguntas FAQ con color blanco y peso más grueso
  - Mejorado contraste del texto de respuestas FAQ
  - Mejor visibilidad de sección CTA en tema oscuro
  - Todos los encabezados de página ahora tienen contraste adecuado (Home, Services, Contact, Blog, FAQ)
  - Mejor jerarquía visual con pesos de fuente mejorados

## [1.3.2] - 2024-01-XX

### Mejorado
- **Menú Móvil**: Mejorado significativamente el menú móvil con animaciones suaves
  - Añadido overlay con efecto blur de fondo
  - Animación suave de deslizamiento desde la izquierda
  - Animación escalonada (stagger) para los elementos del menú
  - Mejorada animación del icono hamburguesa con cubic-bezier easing
  - Cierre del menú con tecla Escape
  - Cierre automático al cambiar tamaño de ventana (al pasar a desktop)
  - Bloqueo del scroll del body cuando el menú está abierto
  - Efectos hover mejorados para elementos del menú
  - Mejor feedback visual con resaltados de fondo
  - Transiciones suaves con funciones de tiempo cubic-bezier

## [1.3.1] - 2024-01-XX

### Corregido
- **Tema Oscuro - Contraste y Legibilidad**: Mejorada significativamente la legibilidad y el contraste en el tema oscuro
  - Reemplazados colores fijos por variables CSS en todos los componentes
  - Mejorado el contraste del texto secundario en tema oscuro (#a1a1a6 en lugar de #86868b)
  - Actualizado NavBar para usar fondo oscuro semitransparente en tema oscuro
  - Corregidos colores del Footer para usar variables CSS en lugar de valores fijos
  - Actualizado componente Toast para tema oscuro con bordes
  - Corregidos fondos de tarjetas de Portfolio y Services para usar variables CSS
  - Mejorados mensajes de éxito/error para tema oscuro con mejor contraste
  - Corregidos fondos de imágenes en Portfolio para tema oscuro
  - Actualizadas tarjetas de características en Home con bordes y fondos adaptativos
  - Corregido fondo de sección de servicios para tema oscuro
  - Todos los componentes ahora soportan correctamente el tema oscuro con buen contraste

## [1.3.0] - 2024-01-XX

### Añadido
- Sistema de notificaciones Toast para feedback del usuario
- Botón "Volver arriba" (Back to Top) con scroll suave
- Enlace "Saltar al contenido" para accesibilidad
- Focus trap en ventanas modales (navegación por teclado mejorada)
- Lógica de reintento para peticiones API (3 intentos)
- Utilidades API centralizadas con manejo de errores mejorado
- Code splitting para rutas (lazy loading)
- Smooth scroll behavior global
- Estilos de focus mejorados para accesibilidad

### Mejorado
- Manejo de errores API con mensajes amigables al usuario
- Navegación por teclado en modales (Tab/Shift+Tab)
- Accesibilidad general del sitio
- Experiencia de usuario con notificaciones visuales
- Rendimiento con code splitting

### Cambiado
- Formulario de contacto ahora usa utilidades API centralizadas
- Rutas cargadas de forma lazy para mejor rendimiento
- Scroll suave habilitado globalmente

## [1.2.0] - 2024-01-XX

### Añadido
- Sistema SEO completo con Open Graph y Twitter Card мета-теги
- Estructurados datos (JSON-LD) para mejor indexación
- Composable `useSEO` para gestión dinámica de мета-теги
- Validación de formularios con mensajes de error personalizados
- Utilidades de validación (`validation.js`) para email, teléfono y campos requeridos
- Composable `useKeyboard` para manejo de eventos de teclado
- Cierre de modal con tecla ESC
- Navegación por teclado mejorada (Enter/Space para abrir proyectos)
- Aria-labels y atributos de accesibilidad en todos los componentes
- Configuración centralizada (`config/index.js`)
- Variables de entorno (.env.example)
- robots.txt y sitemap.xml para SEO
- IMPROVEMENTS.md con plan de mejoras futuras

### Mejorado
- Validación en tiempo real del formulario de contacto
- Mensajes de error específicos para cada campo
- Accesibilidad mejorada con aria-labels y roles semánticos
- SEO optimizado en todas las páginas
- Manejo de errores mejorado en formularios
- Estructura de código más organizada con composables y utilidades

### Cambiado
- Formulario de contacto ahora valida antes de enviar
- Modal de portafolio se cierra con tecla ESC
- Proyectos del portafolio son accesibles por teclado
- Configuración de WhatsApp ahora usa variables de entorno

## [1.1.0] - 2024-01-XX

### Cambiado
- Actualizado número de teléfono a +34 633 34 34 68 en todos los componentes

### Añadido
- Botón flotante de WhatsApp para contacto rápido desde cualquier página
- Página de Preguntas Frecuentes (FAQ) con 10 preguntas comunes y respuestas detalladas
- Componente WhatsAppButton con diseño responsive y animaciones
- Ruta `/preguntas-frecuentes` agregada al router
- Enlace a FAQ en la navegación principal y footer
- Enlace directo a WhatsApp en la página de contacto
- CHANGELOG.md para seguimiento de desarrollo y cambios
- Sistema de acordeón para preguntas frecuentes con animaciones suaves

### Cambiado
- Actualizada navegación para incluir enlace a FAQ
- Actualizado footer con enlace a Preguntas Frecuentes
- Mejorada página de contacto con opción de WhatsApp

### Detalles Técnicos
- Componente WhatsAppButton con soporte para mensaje personalizado
- FAQ con sistema de toggle para mostrar/ocultar respuestas
- Diseño responsive para botón WhatsApp (se convierte en icono en móvil)
- Integración de WhatsApp Web API para contacto directo

## [1.0.0] - 2024-01-XX

### Añadido
- Estructura inicial del proyecto con Vue.js 3 y FastAPI
- Frontend con Vue.js 3, Vue Router y Vite
- Backend con FastAPI y configuración CORS
- Diseño minimalista inspirado en Apple
- Página de inicio (Home) con hero section y características
- Página de servicios con 6 categorías de servicios
- Página de portafolio con galería de proyectos y filtros
- Página de contacto con formulario
- Componentes NavBar y Footer
- Sistema de routing con Vue Router
- Estilos CSS personalizados con variables CSS
- Configuración de Vercel para despliegue
- Scripts de inicio para Windows (start-backend.bat, start-frontend.bat, start-all.bat)
- README.md con instrucciones de instalación
- DEPLOY.md con instrucciones de despliegue
- .gitignore configurado para Python y Node.js

### Características
- Diseño completamente responsive
- Navegación móvil con menú hamburguesa
- Animaciones suaves y transiciones
- Formulario de contacto con validación
- Galería de proyectos con modal
- Filtros de proyectos por categoría
- API REST con FastAPI
- Documentación automática de API (Swagger)

### Tecnologías
- Frontend: Vue.js 3.3.4, Vue Router 4.2.5, Vite 4.5.0
- Backend: FastAPI 0.104.1, Uvicorn 0.24.0, Pydantic 2.5.0
- Estilos: CSS3 con variables personalizadas
- Herramientas: Git, npm, pip

---

## Formato de Versiones

Este proyecto sigue [Semantic Versioning](https://semver.org/):
- **MAJOR**: Cambios incompatibles en la API
- **MINOR**: Nueva funcionalidad compatible hacia atrás
- **PATCH**: Correcciones de errores compatibles hacia atrás

## Tipos de Cambios

- **Añadido**: Nueva funcionalidad
- **Cambiado**: Cambios en funcionalidad existente
- **Deprecado**: Funcionalidad que será eliminada
- **Eliminado**: Funcionalidad eliminada
- **Corregido**: Corrección de errores
- **Seguridad**: Correcciones de seguridad

