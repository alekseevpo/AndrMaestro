# Настройка Email системы

## Описание

Email система позволяет отправлять:
1. **Уведомления администратору** - когда клиент отправляет форму контакта
2. **Подтверждения клиенту** - автоматическое подтверждение получения сообщения

## Настройка

### 1. Gmail (рекомендуется для начала)

1. Включите двухфакторную аутентификацию в вашем Google аккаунте
2. Создайте "App Password":
   - Перейдите в https://myaccount.google.com/apppasswords
   - Создайте новый пароль для "Mail"
   - Скопируйте сгенерированный пароль

3. Создайте файл `.env` в папке `backend/`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER="alekseevpo@gmail.com"
SMTP_PASSWORD=your-16-char-app-password
SMTP_FROM_EMAIL=info@andrmaestro.com
SMTP_FROM_NAME=AndrMaestro
ADMIN_EMAIL=info@andrmaestro.com
```

### 2. Другие SMTP провайдеры

#### Outlook/Office 365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
SMTP_FROM_EMAIL=info@andrmaestro.com
```

#### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASSWORD=your-mailgun-password
```

#### Custom SMTP
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASSWORD=your-password
SMTP_FROM_EMAIL=info@andrmaestro.com
SMTP_FROM_NAME=AndrMaestro
ADMIN_EMAIL=info@andrmaestro.com
```

## Переменные окружения

| Переменная | Описание | Обязательно | По умолчанию |
|------------|----------|-------------|--------------|
| `SMTP_HOST` | SMTP сервер | Да | smtp.gmail.com |
| `SMTP_PORT` | SMTP порт | Да | 587 |
| `SMTP_USER` | Имя пользователя SMTP | Да | - |
| `SMTP_PASSWORD` | Пароль SMTP | Да | - |
| `SMTP_FROM_EMAIL` | Email отправителя | Нет | info@andrmaestro.com |
| `SMTP_FROM_NAME` | Имя отправителя | Нет | AndrMaestro |
| `ADMIN_EMAIL` | Email администратора | Нет | info@andrmaestro.com |

## Безопасность

⚠️ **ВАЖНО:** Никогда не коммитьте файл `.env` в Git!

Файл `.env` уже добавлен в `.gitignore`.

## Тестирование

После настройки переменных окружения:

1. Запустите backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

2. Отправьте тестовую форму на странице контактов

3. Проверьте:
   - Email администратора получил уведомление
   - Клиент получил подтверждение

## Отключение Email (для разработки)

Если SMTP не настроен, система будет работать, но email отправляться не будут. В консоли будут логи о том, что email не отправлен.

## Troubleshooting

### Ошибка: "Authentication failed"
- Проверьте правильность SMTP_USER и SMTP_PASSWORD
- Для Gmail используйте App Password, а не обычный пароль

### Ошибка: "Connection refused"
- Проверьте SMTP_HOST и SMTP_PORT
- Убедитесь, что порт не заблокирован файрволом

### Email не отправляются
- Проверьте логи в консоли backend
- Убедитесь, что переменные окружения загружены правильно
- Проверьте, что SMTP_USER и SMTP_PASSWORD установлены

