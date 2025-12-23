# Настройка безопасности

## reCAPTCHA v3

### Получение ключей

1. Перейдите на https://www.google.com/recaptcha/admin/create
2. Выберите **reCAPTCHA v3**
3. Добавьте домены:
   - `localhost` (для разработки)
   - `andr-maestro.vercel.app` (для production)
4. Скопируйте **Site Key** и **Secret Key**

### Настройка Frontend

Добавьте в `.env` файл в папке `frontend/`:

```env
VITE_RECAPTCHA_SITE_KEY=your-site-key-here
```

### Настройка Backend

Добавьте в `.env` файл в папке `backend/`:

```env
RECAPTCHA_SECRET_KEY=your-secret-key-here
RECAPTCHA_MIN_SCORE=0.5
```

**Примечание:** `RECAPTCHA_MIN_SCORE` определяет минимальный score (0.0-1.0). Рекомендуется 0.5 для баланса между безопасностью и удобством.

## Rate Limiting

Rate limiting настроен на 5 запросов в минуту для формы контакта.

Для изменения лимита отредактируйте в `backend/main.py`:

```python
@limiter.limit("5/minute")  # Измените на нужное значение
```

## Sanitization

Все входные данные автоматически экранируются перед отправкой в email:
- HTML теги экранируются
- Ограничение длины полей
- Удаление потенциально опасных символов

## CORS

CORS настраивается через переменную окружения `CORS_ORIGINS` в `backend/.env`:

```env
CORS_ORIGINS=https://andr-maestro.vercel.app,https://www.andrmaestro.com
```

Разделяйте несколько origins запятыми.

## Проверка безопасности

После настройки проверьте:

1. ✅ reCAPTCHA работает (проверьте в консоли браузера)
2. ✅ Rate limiting работает (попробуйте отправить форму 6 раз подряд)
3. ✅ Email отправляется корректно
4. ✅ CORS настроен правильно

## Troubleshooting

### reCAPTCHA не загружается
- Проверьте, что `VITE_RECAPTCHA_SITE_KEY` установлен
- Проверьте консоль браузера на ошибки
- Убедитесь, что домен добавлен в настройках reCAPTCHA

### Rate limiting блокирует легитимные запросы
- Увеличьте лимит в `backend/main.py`
- Проверьте, что IP адреса не блокируются неправильно

### reCAPTCHA verification failed
- Проверьте, что `RECAPTCHA_SECRET_KEY` установлен
- Проверьте, что домен совпадает с настройками reCAPTCHA
- Проверьте логи backend на детали ошибки

