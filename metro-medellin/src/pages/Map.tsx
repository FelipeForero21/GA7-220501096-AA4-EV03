import React from 'react'
import { MapView } from '../components/MapView'
import { stationsMock } from '../services/stations'

// Página del mapa con las estaciones dibujadas
export const MapPage: React.FC = () => {
  return (
    <section className="container">
      <h1>Mapa de rutas</h1>
      <p className="muted">Explora la red del Metro de Medellín.</p>
      <MapView stations={stationsMock} />
    </section>
  )
}
