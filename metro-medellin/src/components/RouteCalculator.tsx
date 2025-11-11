import React, { useState } from 'react'

export type RouteCalculatorProps = {
  stations: string[]
  onCalculate: (origin: string, destination: string, prefs: { fast: boolean; lowTransfers: boolean; accessible: boolean }) => void
}

// Formulario para calcular rutas entre estaciones con validaciones básicas
export const RouteCalculator: React.FC<RouteCalculatorProps> = ({ stations, onCalculate }) => {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [prefs, setPrefs] = useState({ fast: true, lowTransfers: false, accessible: false })

  const swap = () => {
    setOrigin(destination)
    setDestination(origin)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!origin || !destination) return
    if (origin === destination) return
    onCalculate(origin, destination, prefs)
  }

  return (
    <form className="form" onSubmit={submit} aria-label="Calculadora de rutas">
      <div className="form-row">
        <label htmlFor="origin">Origen</label>
        <select id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)} required>
          <option value="" disabled>
            Selecciona una estación
          </option>
          {stations.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="destination">Destino</label>
        <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} required>
          <option value="" disabled>
            Selecciona una estación
          </option>
          {stations.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <fieldset>
          <legend>Preferencias</legend>
          <label>
            <input type="checkbox" checked={prefs.fast} onChange={(e) => setPrefs({ ...prefs, fast: e.target.checked })} />
            Más rápida
          </label>
          <label>
            <input
              type="checkbox"
              checked={prefs.lowTransfers}
              onChange={(e) => setPrefs({ ...prefs, lowTransfers: e.target.checked })}
            />
            Menos transbordos
          </label>
          <label>
            <input
              type="checkbox"
              checked={prefs.accessible}
              onChange={(e) => setPrefs({ ...prefs, accessible: e.target.checked })}
            />
            Accesible
          </label>
        </fieldset>
      </div>

      <div className="form-actions">
        <button type="button" onClick={swap} aria-label="Intercambiar origen y destino">
          ⇅ Intercambiar
        </button>
        <button type="submit" disabled={!origin || !destination || origin === destination}>
          Calcular ruta
        </button>
      </div>
    </form>
  )
}
