/**
 * Form validation utilities
 */

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  // Spanish phone format: +34 XXX XXX XXX or similar
  const re = /^\+?[1-9]\d{1,14}$/
  return re.test(phone.replace(/\s/g, ''))
}

export const validateRequired = (value) => {
  return value && value.trim().length > 0
}

export const validateMinLength = (value, minLength) => {
  return value && value.trim().length >= minLength
}

export const validateMaxLength = (value, maxLength) => {
  return value && value.trim().length <= maxLength
}

export const getFieldError = (field, value, rules) => {
  if (rules.required && !validateRequired(value)) {
    return `${field} es obligatorio`
  }

  if (rules.email && !validateEmail(value)) {
    return 'Email inválido'
  }

  if (rules.phone && !validatePhone(value)) {
    return 'Teléfono inválido'
  }

  if (rules.minLength && !validateMinLength(value, rules.minLength)) {
    return `Mínimo ${rules.minLength} caracteres`
  }

  if (rules.maxLength && !validateMaxLength(value, rules.maxLength)) {
    return `Máximo ${rules.maxLength} caracteres`
  }

  return null
}

export const validateContactForm = (form) => {
  const errors = {}

  errors.name = getFieldError('Nombre', form.name, { required: true, minLength: 2, maxLength: 100 })
  errors.email = getFieldError('Email', form.email, { required: true, email: true })
  errors.subject = getFieldError('Asunto', form.subject, { required: true, minLength: 5, maxLength: 200 })
  errors.message = getFieldError('Mensaje', form.message, { required: true, minLength: 10, maxLength: 2000 })

  if (form.phone && form.phone.trim()) {
    errors.phone = getFieldError('Teléfono', form.phone, { phone: true })
  }

  // Remove null values
  return Object.fromEntries(Object.entries(errors).filter(([_, v]) => v !== null))
}

