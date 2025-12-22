from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

router = APIRouter(prefix="/api/blog", tags=["blog"])

class BlogPost(BaseModel):
    id: int
    title: str
    slug: str
    excerpt: str
    content: str
    category: str
    date: str
    readTime: int
    image: Optional[str] = None
    tags: List[str] = []

# Mock data - в будущем это будет из базы данных
blog_posts_db = [
    {
        "id": 1,
        "title": "Tendencias en Acabados Interiores para 2024",
        "slug": "tendencias-acabados-interiores-2024",
        "excerpt": "Descubre las últimas tendencias en acabados interiores que están marcando la diferencia este año.",
        "content": "<p>El mundo del diseño de interiores está en constante evolución...</p>",
        "category": "Tendencias",
        "date": "2024-01-15",
        "readTime": 5,
        "image": None,
        "tags": ["tendencias", "diseño", "2024"]
    },
    {
        "id": 2,
        "title": "Cómo Elegir el Color Perfecto para tu Hogar",
        "slug": "elegir-color-perfecto-hogar",
        "excerpt": "Guía completa para elegir los colores que mejor se adapten a tu espacio y personalidad.",
        "content": "<p>Elegir el color adecuado para tu hogar puede ser una decisión abrumadora...</p>",
        "category": "Consejos",
        "date": "2024-01-10",
        "readTime": 7,
        "image": None,
        "tags": ["colores", "diseño", "consejos"]
    },
    {
        "id": 3,
        "title": "Proyecto: Renovación Completa de Cocina",
        "slug": "renovacion-completa-cocina",
        "excerpt": "Te mostramos paso a paso cómo transformamos una cocina antigua en un espacio moderno y funcional.",
        "content": "<p>En este artículo te mostramos el proceso completo de renovación...</p>",
        "category": "Proyectos",
        "date": "2024-01-05",
        "readTime": 8,
        "image": None,
        "tags": ["proyectos", "cocina", "renovación"]
    },
    {
        "id": 4,
        "title": "Materiales Sostenibles en Acabados Interiores",
        "slug": "materiales-sostenibles-acabados",
        "excerpt": "Exploramos las mejores opciones de materiales ecológicos para tus proyectos de acabados.",
        "content": "<p>La sostenibilidad en el diseño de interiores ya no es una opción...</p>",
        "category": "Sostenibilidad",
        "date": "2024-01-01",
        "readTime": 6,
        "image": None,
        "tags": ["sostenibilidad", "materiales", "ecológico"]
    }
]

@router.get("/posts")
async def get_blog_posts(category: Optional[str] = None):
    """
    Получить список всех постов блога.
    Можно фильтровать по категории.
    """
    posts = blog_posts_db
    
    if category and category != "Todos":
        posts = [p for p in blog_posts_db if p["category"] == category]
    
    # Сортировка по дате (новые первые)
    posts.sort(key=lambda x: x["date"], reverse=True)
    
    return {"posts": posts}

@router.get("/posts/{slug}")
async def get_blog_post(slug: str):
    """
    Получить конкретный пост по slug.
    """
    post = next((p for p in blog_posts_db if p["slug"] == slug), None)
    
    if not post:
        raise HTTPException(status_code=404, detail="Post no encontrado")
    
    return post

@router.get("/categories")
async def get_categories():
    """
    Получить список всех категорий блога.
    """
    categories = list(set([p["category"] for p in blog_posts_db]))
    return {"categories": sorted(categories)}

