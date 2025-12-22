# Инструкции по деплою

## 1. Создание репозитория на GitHub

1. Зайдите на https://github.com
2. Нажмите "New repository"
3. Название: `AndrMaestro` (или любое другое)
4. Выберите Public или Private
5. **НЕ** добавляйте README, .gitignore или лицензию (они уже есть)
6. Нажмите "Create repository"

## 2. Push кода в GitHub

Выполните следующие команды в терминале:

```bash
# Добавить remote репозиторий (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/AndrMaestro.git

# Переименовать ветку в main (если нужно)
git branch -M main

# Отправить код
git push -u origin main
```

## 3. Деплой Frontend в Vercel

### Вариант 1: Через веб-интерфейс Vercel

1. Зайдите на https://vercel.com
2. Войдите через GitHub
3. Нажмите "Add New Project"
4. Импортируйте репозиторий `AndrMaestro`
5. **Важно**: Настройте проект:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite (или Other)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Нажмите "Deploy"
7. Дождитесь завершения деплоя
8. Ваш сайт будет доступен по адресу вида: `https://andrmaestro.vercel.app`

### Вариант 2: Через Vercel CLI

```bash
# Установить Vercel CLI
npm i -g vercel

# Войти в Vercel
vercel login

# Перейти в папку frontend
cd frontend

# Деплой
vercel

# Для production деплоя
vercel --prod
```

## 4. Деплой Backend (опционально)

Backend можно задеплоить на:
- **Railway**: https://railway.app (рекомендуется для FastAPI)
- **Render**: https://render.com
- **Fly.io**: https://fly.io

### Railway (пример)

1. Зайдите на https://railway.app
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите "Deploy from GitHub repo"
5. Выберите репозиторий `AndrMaestro`
6. Railway автоматически определит Python проект
7. Установите переменные окружения если нужно
8. Railway автоматически задеплоит ваш API

После деплоя обновите CORS настройки в `backend/main.py` с URL вашего фронтенда.

## 5. Обновление CORS для Backend

После деплоя фронтенда, обновите `backend/main.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://your-frontend-url.vercel.app",  # Добавьте ваш Vercel URL
    ],
    # ... остальное
)
```

## Полезные ссылки

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs
- Railway Dashboard: https://railway.app/dashboard

