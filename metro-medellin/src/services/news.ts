import type { NewsItem } from '../types'

export const newsMock: NewsItem[] = [
  {
    id: 'N1',
    title: 'Mantenimiento programado en línea A',
    date: new Date().toISOString(),
    summary: 'Se realizarán trabajos nocturnos de mantenimiento entre Niquía y Acevedo.',
    link: '#',
  },
  {
    id: 'N2',
    title: 'Ajustes de horarios por evento ciudad',
    date: new Date(Date.now() - 86400000).toISOString(),
    summary: 'El próximo sábado habrá mayor frecuencia por evento deportivo.',
  },
]
