from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import uvicorn
import os
from dotenv import load_dotenv
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

# Load environment variables
load_dotenv()

try:
    from api import blog
except ImportError:
    # Если модуль не найден, создаем заглушку
    blog = None

app = FastAPI(
    title="AndrMaestro API",
    description="API para el sitio web de maestro de acabados interiores",
    version="1.0.0"
)

# Rate limiting
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)

# Configurar CORS
cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:3000,http://127.0.0.1:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in cors_origins],
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
    recaptcha_token: Optional[str] = None

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
@limiter.limit("5/minute")  # Rate limit: 5 requests per minute
async def submit_contact(request: Request, contact_data: ContactRequest):
    """
    Endpoint para recibir mensajes de contacto.
    Envía notificación al administrador y confirmación al usuario.
    """
    try:
        # Verify reCAPTCHA if token is provided
        if contact_data.recaptcha_token:
            from utils.recaptcha import verify_recaptcha
            remote_ip = request.client.host if request.client else None
            is_valid, error_message = await verify_recaptcha(
                contact_data.recaptcha_token,
                remote_ip
            )
            
            if not is_valid:
                raise HTTPException(
                    status_code=400,
                    detail=error_message or "reCAPTCHA verification failed"
                )
        
        # Sanitize input data
        from html import escape
        sanitized_name = escape(contact_data.name[:100])
        sanitized_subject = escape(contact_data.subject[:200])
        sanitized_message = escape(contact_data.message[:2000])
        sanitized_phone = escape(contact_data.phone[:20]) if contact_data.phone else None
        
        # Import email utilities
        from utils.email import send_contact_notification, send_contact_confirmation
        
        # Send notification email to admin
        notification_sent = await send_contact_notification(
            name=sanitized_name,
            email=contact_data.email,
            phone=sanitized_phone,
            subject=sanitized_subject,
            message=sanitized_message
        )
        
        # Send confirmation email to user
        confirmation_sent = await send_contact_confirmation(
            name=sanitized_name,
            email=contact_data.email,
            subject=sanitized_subject
        )
        
        # Log email status (optional)
        if not notification_sent:
            print(f"[WARNING] Failed to send notification email for contact from {contact_data.email}")
        if not confirmation_sent:
            print(f"[WARNING] Failed to send confirmation email to {contact_data.email}")
        
        return {
            "success": True,
            "message": "Mensaje recibido correctamente. Te contactaremos pronto."
        }
    except HTTPException:
        raise
    except Exception as e:
        print(f"[ERROR] Contact form submission error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Error interno del servidor. Por favor, inténtalo más tarde."
        )

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

# Include blog router
if blog:
    app.include_router(blog.router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

