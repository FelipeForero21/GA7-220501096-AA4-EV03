import React, { useState } from 'react'
import { RouteCalculator } from '../components/RouteCalculator'
import { listStationNames } from '../services/stations'

// Página de inicio con calculadora de rutas
export const Home: React.FC = () => {
  const [lastQuery, setLastQuery] = useState<string>('')

  const handleCalc = (
    origin: string,
    destination: string,
    prefs: { fast: boolean; lowTransfers: boolean; accessible: boolean },
  ) => {
    // Simula cálculo de ruta. En implementación real, invocar servicio.
    setLastQuery(
      `Ruta de ${origin} a ${destination} (${prefs.fast ? 'rápida' : 'normal'}$${prefs.lowTransfers ? ', menos transbordos' : ''}$${prefs.accessible ? ', accesible' : ''})`,
    )
  }

  return (
    <section className="container">
      <h1>Planifica tu viaje</h1>
      <p className="muted">Calcula la mejor ruta entre dos estaciones.</p>
      <RouteCalculator stations={listStationNames()} onCalculate={handleCalc} />
      {lastQuery && (
        <p aria-live="polite" style={{ marginTop: '1rem' }}>
          {lastQuery.replaceAll('$$', '')}
        </p>
      )}
    </section>
  )
}
