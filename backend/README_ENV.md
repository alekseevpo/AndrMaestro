# Настройка переменных окружения

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

### Для работы Email системы:
- `SMTP_HOST` - SMTP сервер (например, smtp.gmail.com)
- `SMTP_PORT` - SMTP порт (обычно 587)
- `SMTP_USER` - Email адрес для отправки
- `SMTP_PASSWORD` - Пароль или App Password

### Для работы reCAPTCHA:
- `RECAPTCHA_SECRET_KEY` - Секретный ключ reCAPTCHA v3

### Для CORS:
- `CORS_ORIGINS` - Разрешенные origins (через запятую)

## Опциональные переменные

- `SMTP_FROM_EMAIL` - Email отправителя (по умолчанию: info@andrmaestro.com)
- `SMTP_FROM_NAME` - Имя отправителя (по умолчанию: AndrMaestro)
- `ADMIN_EMAIL` - Email администратора (по умолчанию: info@andrmaestro.com)
- `RECAPTCHA_MIN_SCORE` - Минимальный score reCAPTCHA (по умолчанию: 0.5)

## Пример для разработки

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=info@andrmaestro.com
SMTP_FROM_NAME=AndrMaestro
ADMIN_EMAIL=info@andrmaestro.com

RECAPTCHA_SECRET_KEY=your-secret-key
RECAPTCHA_MIN_SCORE=0.5

CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

## Пример для production

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=alekseevpo@gmail.com
SMTP_PASSWORD=QWEqwe0304+
SMTP_FROM_EMAIL=info@andrmaestro.com
SMTP_FROM_NAME=AndrMaestro
ADMIN_EMAIL=info@andrmaestro.com

RECAPTCHA_SECRET_KEY=6Lf7BTQsAAAAAGcuXOyDWLEDQexUahtGaMVBbW0s
RECAPTCHA_MIN_SCORE=0.5

CORS_ORIGINS=https://andr-maestro.vercel.app
```

## Важно!

⚠️ **НИКОГДА не коммитьте файл `.env` в Git!**

Файл `.env` уже добавлен в `.gitignore` и не будет включен в репозиторий.

