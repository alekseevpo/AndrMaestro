# Guía para Agregar Artículos al Blog

## Estructura de un Artículo

Cada artículo del blog debe tener la siguiente estructura:

```json
{
  "id": 1,
  "title": "Título del Artículo",
  "slug": "titulo-del-articulo",
  "excerpt": "Breve descripción del artículo (150-200 caracteres)",
  "content": "<p>Contenido completo en HTML...</p>",
  "category": "Categoría",
  "date": "2024-01-15",
  "readTime": 5,
  "image": "URL de la imagen o null",
  "tags": ["tag1", "tag2", "tag3"]
}
```

## Campos Requeridos

- **id**: Número único identificador
- **title**: Título del artículo (SEO importante)
- **slug**: URL amigable (sin espacios, minúsculas, guiones)
- **excerpt**: Resumen corto para la lista de artículos
- **content**: Contenido completo en HTML
- **category**: Categoría del artículo
- **date**: Fecha en formato YYYY-MM-DD
- **readTime**: Tiempo estimado de lectura en minutos
- **image**: URL de imagen destacada (opcional)
- **tags**: Array de etiquetas para SEO

## Cómo Agregar un Nuevo Artículo

### Opción 1: A través del Backend API (Recomendado)

1. Edita el archivo `backend/api/blog.py`
2. Agrega el nuevo artículo al array `blog_posts_db`
3. Reinicia el servidor backend

### Opción 2: Directamente en el Frontend (Temporal)

1. Edita `frontend/src/views/Blog.vue` o `frontend/src/views/BlogPost.vue`
2. Agrega el artículo al array `mockPosts` o `postsData`
3. Reconstruye el frontend

## Mejores Prácticas para SEO

### Títulos
- Usa palabras clave relevantes
- Mantén títulos entre 50-60 caracteres
- Sé descriptivo y atractivo

### Contenido
- Usa encabezados H2, H3 para estructura
- Incluye palabras clave naturalmente
- Escribe contenido de calidad (mínimo 300 palabras)
- Usa listas y párrafos cortos

### Imágenes
- Usa imágenes relevantes y de alta calidad
- Optimiza imágenes antes de subirlas
- Agrega texto alternativo descriptivo
- Usa nombres de archivo descriptivos

### Slug
- Usa palabras clave en el slug
- Mantén slugs cortos y descriptivos
- Ejemplo: `tendencias-acabados-interiores-2024`

### Meta Descripción (excerpt)
- 150-160 caracteres ideal
- Incluye llamada a la acción
- Usa palabras clave principales

## Ejemplo de Artículo Completo

```javascript
{
  id: 5,
  title: '10 Consejos para Renovar tu Baño',
  slug: '10-consejos-renovar-bano',
  excerpt: 'Descubre los mejores consejos profesionales para renovar tu baño y crear un espacio moderno y funcional.',
  content: `
    <p>Renovar un baño puede ser un proyecto emocionante pero también desafiante. Te compartimos 10 consejos profesionales que te ayudarán a lograr el baño de tus sueños.</p>
    
    <h2>1. Planifica tu Presupuesto</h2>
    <p>Antes de comenzar, establece un presupuesto realista. Incluye materiales, mano de obra y un margen para imprevistos.</p>
    
    <h2>2. Elige los Materiales Correctos</h2>
    <p>Los materiales para baños deben ser resistentes a la humedad. Elige azulejos, pinturas y maderas adecuadas para espacios húmedos.</p>
    
    <!-- Más contenido... -->
  `,
  category: 'Consejos',
  date: '2024-01-20',
  readTime: 6,
  image: '/images/blog/bano-renovado.jpg',
  tags: ['baño', 'renovación', 'consejos', 'diseño']
}
```

## Categorías Disponibles

- **Tendencias**: Artículos sobre tendencias actuales
- **Consejos**: Consejos prácticos y guías
- **Proyectos**: Casos de estudio y proyectos reales
- **Sostenibilidad**: Materiales y prácticas ecológicas
- **Diseño**: Ideas y conceptos de diseño

## Próximos Pasos

En el futuro, se puede implementar:
- Panel de administración para agregar artículos
- Editor WYSIWYG para contenido
- Sistema de carga de imágenes
- Base de datos para almacenar artículos
- Sistema de comentarios

