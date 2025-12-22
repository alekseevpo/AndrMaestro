from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import uvicorn

app = FastAPI(
    title="AndrMaestro API",
    description="API para el sitio web de maestro de acabados interiores",
    version="1.0.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos Pydantic
class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: str
    message: str

class Project(BaseModel):
    id: int
    title: str
    category: str
    description: str
    duration: str
    type: str

# Datos de ejemplo (en producción esto vendría de una base de datos)
projects_db = [
    {
        "id": 1,
        "title": "Cocina Moderna Integral",
        "category": "Carpintería",
        "description": "Diseño e instalación completa de cocina moderna con muebles a medida.",
        "duration": "3 semanas",
        "type": "Reforma Integral"
    }
]

@app.get("/")
async def root():
    return {"message": "AndrMaestro API", "version": "1.0.0"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/contact")
async def submit_contact(request: ContactRequest):
    """
    Endpoint para recibir mensajes de contacto.
    En producción, aquí se guardaría en base de datos o se enviaría por email.
    """
    try:
        # Aquí iría la lógica para guardar el mensaje
        # Por ejemplo: save_to_database(request) o send_email(request)
        
        return {
            "success": True,
            "message": "Mensaje recibido correctamente. Te contactaremos pronto."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/projects")
async def get_projects():
    """
    Endpoint para obtener la lista de proyectos del portafolio.
    """
    return {"projects": projects_db}

@app.get("/api/projects/{project_id}")
async def get_project(project_id: int):
    """
    Endpoint para obtener un proyecto específico por ID.
    """
    project = next((p for p in projects_db if p["id"] == project_id), None)
    if not project:
        raise HTTPException(status_code=404, detail="Proyecto no encontrado")
    return project

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

