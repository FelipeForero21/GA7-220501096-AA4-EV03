import React from 'react'
import { StationCard } from '../components/StationCard'
import { stationsMock } from '../services/stations'

// Página de estaciones: listado de tarjetas por estación
export const Stations: React.FC = () => {
  return (
    <section className="container">
      <h1>Estaciones</h1>
      <p className="muted">Información de estaciones, accesibilidad y servicios.</p>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {stationsMock.map((st) => (
          <StationCard key={st.id} station={st} />
        ))}
      </div>
    </section>
  )
}
