# Быстрый деплой на GitHub и Vercel

## 🚀 Быстрая инструкция

### 1. Создайте репозиторий на GitHub

1. Откройте https://github.com/new
2. Название: `AndrMaestro`
3. Выберите Public или Private
4. **НЕ** добавляйте README, .gitignore, лицензию
5. Нажмите "Create repository"

### 2. Подключите репозиторий

После создания репозитория выполните команды (замените `YOUR_USERNAME` на ваш GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/AndrMaestro.git
git branch -M main
git push -u origin main
```

### 3. Деплой на Vercel

1. Откройте https://vercel.com
2. Войдите через GitHub
3. Нажмите "Add New Project"
4. Выберите репозиторий `AndrMaestro`
5. **Настройки:**
   - Root Directory: `frontend`
   - Framework: Vite
6. Нажмите "Deploy"

Готово! 🎉

