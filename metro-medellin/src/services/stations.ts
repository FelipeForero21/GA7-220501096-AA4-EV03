import type { Station } from '../types'

// Mocks de estaciones básicas para demostración
export const stationsMock: Station[] = [
  { id: 'S1', name: 'Niquía', line: 'A', lat: 6.3407, lng: -75.5426, accessible: true, services: ['Bici', 'Parqueadero'] },
  { id: 'S2', name: 'Acevedo', line: 'A', lat: 6.3155, lng: -75.5588, accessible: true, services: ['Bici'] },
  { id: 'S3', name: 'San Antonio', line: 'A', lat: 6.2477, lng: -75.5670, accessible: true, services: ['Transbordo Línea B'] },
]

export const listStationNames = () => stationsMock.map((s) => s.name)
