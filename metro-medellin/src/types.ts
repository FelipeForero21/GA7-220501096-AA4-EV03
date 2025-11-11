// Tipos compartidos del dominio del Metro de Medellín
export type Station = {
  id: string
  name: string
  line: string
  lat: number
  lng: number
  accessible: boolean
  services: string[]
}

export type Schedule = {
  line: string
  day: 'Laboral' | 'Sábado' | 'Domingo/Festivo'
  open: string
  close: string
  peak: string
  offpeak: string
}

export type NewsItem = {
  id: string
  title: string
  date: string
  summary: string
  link?: string
}
