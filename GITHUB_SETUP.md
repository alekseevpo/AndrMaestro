# Инструкция по настройке GitHub и деплою на Vercel

## Шаг 1: Создание репозитория на GitHub

1. Зайдите на https://github.com
2. Нажмите кнопку "+" в правом верхнем углу → "New repository"
3. Заполните:
   - **Repository name**: `AndrMaestro` (или любое другое имя)
   - **Description**: "Sitio web profesional para maestro de acabados interiores"
   - Выберите **Public** или **Private**
   - **НЕ** добавляйте README, .gitignore или лицензию (они уже есть в проекте)
4. Нажмите "Create repository"

## Шаг 2: Подключение локального репозитория к GitHub

После создания репозитория GitHub покажет инструкции. Выполните команды:

```bash
# Добавить remote репозиторий (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/AndrMaestro.git

# Переименовать ветку в main (если нужно)
git branch -M main

# Отправить код на GitHub
git push -u origin main
```

## Шаг 3: Деплой на Vercel

### Вариант 1: Через веб-интерфейс Vercel (рекомендуется)

1. Зайдите на https://vercel.com
2. Войдите через GitHub (нажмите "Sign Up" → выберите GitHub)
3. После входа нажмите "Add New Project"
4. Импортируйте репозиторий `AndrMaestro`
5. **Важно! Настройте проект:**
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite (или Other)
   - **Build Command**: `npm run build` (должно определиться автоматически)
   - **Output Directory**: `dist` (должно определиться автоматически)
   - **Install Command**: `npm install` (должно определиться автоматически)
6. Нажмите "Deploy"
7. Дождитесь завершения деплоя (обычно 1-2 минуты)
8. Ваш сайт будет доступен по адресу вида: `https://andrmaestro.vercel.app`

### Вариант 2: Через Vercel CLI

```bash
# Установить Vercel CLI глобально
npm install -g vercel

# Войти в Vercel
vercel login

# Перейти в папку frontend
cd frontend

# Деплой (первый раз)
vercel

# Для production деплоя
vercel --prod
```

## После деплоя

1. Vercel автоматически создаст URL для вашего сайта
2. Каждый push в GitHub будет автоматически деплоить новую версию
3. Вы можете настроить кастомный домен в настройках проекта Vercel

## Полезные ссылки

- GitHub: https://github.com
- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs

