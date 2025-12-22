# Backend - AndrMaestro API

API FastAPI para el sitio web de AndrMaestro.

## Instalación

1. Crear entorno virtual:
```bash
python -m venv venv
```

2. Activar entorno virtual:
- Windows: `venv\Scripts\activate`
- Linux/Mac: `source venv/bin/activate`

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

## Ejecución

```bash
uvicorn main:app --reload
```

La API estará disponible en `http://localhost:8000`

Documentación interactiva disponible en `http://localhost:8000/docs`

