import React from 'react'
import { faresMock } from '../services/fares'

// Página de tarifas: tabla simple con categorías
export const Fares: React.FC = () => {
  return (
    <section className="container">
      <h1>Tarifas</h1>
      <p className="muted">Consulta las tarifas por categoría.</p>
      <table className="table" role="table" aria-label="Tabla de tarifas">
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {faresMock.map((f) => (
            <tr key={f.category}>
              <td>{f.category}</td>
              <td>${f.value.toLocaleString('es-CO')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
