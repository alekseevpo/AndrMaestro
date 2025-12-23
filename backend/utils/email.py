"""
Email utility module for sending emails
"""
import os
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional
from jinja2 import Template

# Email configuration from environment variables
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER", "")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")
SMTP_FROM_EMAIL = os.getenv("SMTP_FROM_EMAIL", "info@andrmaestro.com")
SMTP_FROM_NAME = os.getenv("SMTP_FROM_NAME", "AndrMaestro")
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", "info@andrmaestro.com")

# Email templates
CONTACT_NOTIFICATION_TEMPLATE = """
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #007AFF 0%, #0051D5 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #007AFF; margin-bottom: 5px; display: block; }
        .value { background: white; padding: 12px; border-radius: 5px; border-left: 3px solid #007AFF; }
        .message-box { background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #007AFF; margin-top: 10px; white-space: pre-wrap; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Nuevo Mensaje de Contacto</h1>
            <p>Has recibido un nuevo mensaje desde el formulario de contacto</p>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Nombre:</span>
                <div class="value">{{ name }}</div>
            </div>
            <div class="field">
                <span class="label">Email:</span>
                <div class="value">{{ email }}</div>
            </div>
            {% if phone %}
            <div class="field">
                <span class="label">Teléfono:</span>
                <div class="value">{{ phone }}</div>
            </div>
            {% endif %}
            <div class="field">
                <span class="label">Asunto:</span>
                <div class="value">{{ subject }}</div>
            </div>
            <div class="field">
                <span class="label">Mensaje:</span>
                <div class="message-box">{{ message }}</div>
            </div>
        </div>
        <div class="footer">
            <p>Este mensaje fue enviado desde el formulario de contacto de AndrMaestro</p>
            <p>Fecha: {{ date }}</p>
        </div>
    </div>
</body>
</html>
"""

CONTACT_CONFIRMATION_TEMPLATE = """
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #007AFF 0%, #0051D5 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .message { background: white; padding: 20px; border-radius: 5px; border-left: 3px solid #007AFF; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>¡Gracias por contactarnos!</h1>
        </div>
        <div class="content">
            <p>Hola {{ name }},</p>
            <div class="message">
                <p>Hemos recibido tu mensaje correctamente y te responderemos en un plazo máximo de 24 horas.</p>
                <p><strong>Asunto:</strong> {{ subject }}</p>
            </div>
            <p>Mientras tanto, si tienes alguna pregunta urgente, puedes contactarnos directamente:</p>
            <ul>
                <li><strong>Email:</strong> info@andrmaestro.com</li>
                <li><strong>Teléfono:</strong> +34 633 34 34 68</li>
                <li><strong>WhatsApp:</strong> <a href="https://wa.me/34633343468">Escribir por WhatsApp</a></li>
            </ul>
            <p>Saludos,<br><strong>Equipo AndrMaestro</strong></p>
        </div>
        <div class="footer">
            <p>Este es un mensaje automático, por favor no respondas a este email.</p>
        </div>
    </div>
</body>
</html>
"""


async def send_email(
    to_email: str,
    subject: str,
    html_content: str,
    text_content: Optional[str] = None,
    from_email: Optional[str] = None,
    from_name: Optional[str] = None
) -> bool:
    """
    Send an email using SMTP
    
    Args:
        to_email: Recipient email address
        subject: Email subject
        html_content: HTML content of the email
        text_content: Plain text content (optional)
        from_email: Sender email (defaults to SMTP_FROM_EMAIL)
        from_name: Sender name (defaults to SMTP_FROM_NAME)
    
    Returns:
        True if email was sent successfully, False otherwise
    """
    # Skip email sending if SMTP is not configured
    if not SMTP_USER or not SMTP_PASSWORD:
        print(f"[EMAIL] SMTP not configured. Would send to {to_email}: {subject}")
        return True  # Return True to not break the flow in development
    
    try:
        from_email = from_email or SMTP_FROM_EMAIL
        from_name = from_name or SMTP_FROM_NAME
        
        # Create message
        message = MIMEMultipart("alternative")
        message["From"] = f"{from_name} <{from_email}>"
        message["To"] = to_email
        message["Subject"] = subject
        
        # Add text and HTML parts
        if text_content:
            text_part = MIMEText(text_content, "plain", "utf-8")
            message.attach(text_part)
        
        html_part = MIMEText(html_content, "html", "utf-8")
        message.attach(html_part)
        
        # Send email
        await aiosmtplib.send(
            message,
            hostname=SMTP_HOST,
            port=SMTP_PORT,
            username=SMTP_USER,
            password=SMTP_PASSWORD,
            use_tls=True,
        )
        
        print(f"[EMAIL] Successfully sent email to {to_email}")
        return True
        
    except Exception as e:
        print(f"[EMAIL] Error sending email to {to_email}: {str(e)}")
        return False


async def send_contact_notification(
    name: str,
    email: str,
    phone: Optional[str],
    subject: str,
    message: str
) -> bool:
    """
    Send notification email to admin when contact form is submitted
    
    Args:
        name: Contact name
        email: Contact email
        phone: Contact phone (optional)
        subject: Message subject
        message: Message content
    
    Returns:
        True if email was sent successfully
    """
    from datetime import datetime
    
    template = Template(CONTACT_NOTIFICATION_TEMPLATE)
    html_content = template.render(
        name=name,
        email=email,
        phone=phone or "No proporcionado",
        subject=subject,
        message=message,
        date=datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    )
    
    email_subject = f"Nuevo mensaje de contacto: {subject}"
    
    return await send_email(
        to_email=ADMIN_EMAIL,
        subject=email_subject,
        html_content=html_content
    )


async def send_contact_confirmation(
    name: str,
    email: str,
    subject: str
) -> bool:
    """
    Send confirmation email to user after contact form submission
    
    Args:
        name: Contact name
        email: Contact email
        subject: Message subject
    
    Returns:
        True if email was sent successfully
    """
    template = Template(CONTACT_CONFIRMATION_TEMPLATE)
    html_content = template.render(
        name=name,
        subject=subject
    )
    
    return await send_email(
        to_email=email,
        subject="Gracias por contactar con AndrMaestro",
        html_content=html_content
    )

