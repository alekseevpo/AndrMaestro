# Historial de Desarrollo - AndrMaestro

Este archivo documenta todos los cambios importantes realizados en el proyecto.

## [1.1.0] - 2024-01-XX

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

