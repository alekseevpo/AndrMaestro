# Настройка переменных окружения (Frontend)

## Создание .env файла

1. Скопируйте файл `.env.example` в `.env`:
   ```bash
   cp .env.example .env
   ```

   Или на Windows:
   ```cmd
   copy .env.example .env
   ```

2. Откройте файл `.env` и заполните все необходимые значения.

## Обязательные переменные

### Для работы reCAPTCHA:
- `VITE_RECAPTCHA_SITE_KEY` - Публичный ключ reCAPTCHA v3 (Site Key)

## Опциональные переменные

- `VITE_API_URL` - URL backend API (по умолчанию: http://localhost:8000)
- `VITE_BASE_URL` - Базовый URL сайта (по умолчанию: http://localhost:3000)
- `VITE_WHATSAPP_PHONE` - Номер телефона WhatsApp (по умолчанию: +34633343468)
- `VITE_SITE_NAME` - Название сайта (по умолчанию: AndrMaestro)
- `VITE_SITE_DESCRIPTION` - Описание сайта

## Пример для разработки

```env
VITE_API_URL=http://localhost:8000
VITE_RECAPTCHA_SITE_KEY=your-site-key
VITE_BASE_URL=http://localhost:3000
VITE_WHATSAPP_PHONE=+34633343468
VITE_SITE_NAME=AndrMaestro
VITE_SITE_DESCRIPTION=Maestro profesional de acabados interiores
```

## Пример для production

```env
VITE_API_URL=https://api.andrmaestro.com
VITE_RECAPTCHA_SITE_KEY=your-production-site-key
VITE_BASE_URL=https://andr-maestro.vercel.app
VITE_WHATSAPP_PHONE=+34633343468
VITE_SITE_NAME=AndrMaestro
VITE_SITE_DESCRIPTION=Maestro profesional de acabados interiores
```

## Важно!

⚠️ **Переменные с префиксом `VITE_` доступны в браузере!**

Не используйте `VITE_` префикс для секретных ключей. Только для публичных данных.

⚠️ **НИКОГДА не коммитьте файл `.env` в Git!**

Файл `.env` уже добавлен в `.gitignore` и не будет включен в репозиторий.

## После изменения .env

После изменения `.env` файла необходимо:
1. Перезапустить dev сервер (`npm run dev`)
2. Пересобрать проект для production (`npm run build`)

