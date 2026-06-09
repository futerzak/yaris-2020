import { carData } from '../data/carData'

export function formatPhone(phone = carData.phone) {
  return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
}

export function telHref(phone = carData.phone) {
  return `tel:${phone}`
}

export function whatsappHref(
  message = 'Cześć, interesuje mnie Toyota Yaris Hybrid z Waszej strony.',
  phone = carData.phone,
) {
  return `https://wa.me/48${phone}?text=${encodeURIComponent(message)}`
}
