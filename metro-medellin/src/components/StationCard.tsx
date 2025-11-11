import React from 'react'
import type { Station } from '../types.ts'

export type StationCardProps = {
  station: Station
}

// Tarjeta con información de una estación
export const StationCard: React.FC<StationCardProps> = ({ station }) => {
  return (
    <article className="card" aria-labelledby={`station-${station.id}`}>
      <h3 id={`station-${station.id}`}>{station.name}</h3>
      <p>Línea: {station.line}</p>
      <p>Accesibilidad: {station.accessible ? 'Sí' : 'No'}</p>
      {station.services?.length ? (
        <ul>
          {station.services.map((svc) => (
            <li key={svc}>{svc}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
