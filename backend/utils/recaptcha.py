"""
reCAPTCHA v3 verification utility
"""
import os
import httpx
from typing import Optional

RECAPTCHA_SECRET_KEY = os.getenv("RECAPTCHA_SECRET_KEY", "")
RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify"
RECAPTCHA_MIN_SCORE = float(os.getenv("RECAPTCHA_MIN_SCORE", "0.5"))
# Require captcha in production (set RECAPTCHA_REQUIRED=true). Default false to not break local dev.
RECAPTCHA_REQUIRED = os.getenv("RECAPTCHA_REQUIRED", "false").lower() == "true"


async def verify_recaptcha(token: str, remote_ip: Optional[str] = None) -> tuple[bool, Optional[str]]:
    """
    Verify reCAPTCHA v3 token
    
    Args:
        token: reCAPTCHA token from client
        remote_ip: Client IP address (optional, recommended)
    
    Returns:
        Tuple of (is_valid, error_message)
        is_valid: True if token is valid and score is acceptable
        error_message: Error message if verification failed, None if successful
    """
    if not RECAPTCHA_SECRET_KEY:
        if RECAPTCHA_REQUIRED:
            error_message = "reCAPTCHA is required but secret key is not configured"
            print(f"[reCAPTCHA] {error_message}")
            return False, error_message
        # In development, allow requests without reCAPTCHA
        print("[reCAPTCHA] Secret key not configured, skipping verification")
        return True, None
    
    if not token:
        return False, "reCAPTCHA token is missing"
    
    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            data = {
                "secret": RECAPTCHA_SECRET_KEY,
                "response": token
            }
            if remote_ip:
                data["remoteip"] = remote_ip
            
            response = await client.post(RECAPTCHA_VERIFY_URL, data=data)
            response.raise_for_status()
            result = response.json()
            
            if not result.get("success", False):
                error_codes = result.get("error-codes", [])
                error_message = f"reCAPTCHA verification failed: {', '.join(error_codes)}"
                print(f"[reCAPTCHA] {error_message}")
                return False, error_message
            
            score = result.get("score", 0.0)
            action = result.get("action", "")
            
            # Check score threshold
            if score < RECAPTCHA_MIN_SCORE:
                error_message = f"reCAPTCHA score too low: {score} (minimum: {RECAPTCHA_MIN_SCORE})"
                print(f"[reCAPTCHA] {error_message}")
                return False, error_message
            
            print(f"[reCAPTCHA] Verification successful - Score: {score}, Action: {action}")
            return True, None
            
    except httpx.TimeoutException:
        error_message = "reCAPTCHA verification timeout"
        print(f"[reCAPTCHA] {error_message}")
        return False, error_message
    except Exception as e:
        error_message = f"reCAPTCHA verification error: {str(e)}"
        print(f"[reCAPTCHA] {error_message}")
        return False, error_message

