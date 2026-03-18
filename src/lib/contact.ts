// Contact form submission via EmailJS
// Docs: https://www.emailjs.com/docs/sdk/send/
import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  company: string
  role: string
  message: string
}

/**
 * Sends the contact form data via EmailJS.
 * Reads service/template/public key from VITE_ env vars.
 *
 * Required .env variables:
 *   VITE_EMAILJS_SERVICE_ID
 *   VITE_EMAILJS_TEMPLATE_ID
 *   VITE_EMAILJS_PUBLIC_KEY
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS environment variables are not configured.')
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.name,
      from_email: data.email,
      company: data.company,
      role: data.role,
      message: data.message,
    },
    publicKey,
  )
}
