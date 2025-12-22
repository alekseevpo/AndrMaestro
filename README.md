# AndrMaestro - Sitio Web para Maestro de Acabados Interiores

Sitio web profesional para maestro de acabados interiores construido con Vue.js (frontend) y FastAPI (backend).

## Estructura del Proyecto

```
AndrMaestro/
├── frontend/          # Aplicación Vue.js
├── backend/           # API FastAPI
└── README.md
```

## Tecnologías

- **Frontend**: Vue.js 3, Vue Router, Composition API
- **Backend**: FastAPI, Python 3.9+
- **Estilo**: Diseño minimalista moderno

## Instalación

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Desarrollo

El proyecto está diseñado para escalarse según las necesidades del negocio.

## Despliegue en Vercel

### Frontend (Vue.js)

1. **Conectar repositorio a Vercel:**
   - Ve a [Vercel](https://vercel.com) y crea una cuenta o inicia sesión
   - Haz clic en "New Project"
   - Conecta tu repositorio de GitHub/GitLab/Bitbucket
   - Selecciona el repositorio `AndrMaestro`

2. **Configuración del proyecto:**
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Variables de entorno (si es necesario):**
   - `VITE_API_URL`: URL de tu API backend (opcional)

4. **Deploy:**
   - Haz clic en "Deploy"
   - Vercel construirá y desplegará automáticamente tu aplicación

### Backend (FastAPI)

Para el backend, puedes usar servicios como:
- **Railway**: https://railway.app
- **Render**: https://render.com
- **Fly.io**: https://fly.io
- **Heroku**: https://heroku.com

## Push a GitHub

```bash
# Crear repositorio en GitHub primero, luego:
git remote add origin https://github.com/TU_USUARIO/AndrMaestro.git
git branch -M main
git push -u origin main
```

## Estructura de Archivos

- `frontend/` - Aplicación Vue.js con Vite
- `backend/` - API FastAPI
- `vercel.json` - Configuración de Vercel (raíz)
- `frontend/vercel.json` - Configuración específica del frontend

